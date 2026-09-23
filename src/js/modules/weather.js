/* ============================================
   HUBLR - Weather Widget Module v0.2.1
   Auto-detect lokasi user via Geolocation API
   Fallback ke Jakarta kalau user tolak izin
   Pakai Open-Meteo API (gratis, tanpa API key)
   ============================================ */

const Weather = {
    location: null,
    weatherData: null,

    // Fallback lokasi kalau user tolak izin
    DEFAULT_LOCATION: {
        name: 'Jakarta',
        lat: -6.2088,
        lon: 106.8456
    },

    init() {
        // Ambil lokasi dari storage kalau sudah pernah disimpan
        const saved = Storage.get('weather_location', null);

        if (saved && saved.lat && saved.lon) {
            this.location = saved;
            this.render();
            this.fetch();
        } else {
            // Belum ada → deteksi otomatis
            this.render(); // tampilkan loading dulu
            this.detectLocation();
        }

        // Refresh tiap 30 menit
        setInterval(() => this.fetch(), 1800000);

        // Tombol refresh manual
        on($('#weatherRefresh'), 'click', () => {
            // Kalau klik sambil tahan Shift → paksa deteksi ulang
            if (window.event && window.event.shiftKey) {
                Storage.remove('weather_location');
                this.detectLocation();
            } else {
                this.fetch();
            }
        });
    },

    // ============================================
    // Deteksi lokasi user
    // ============================================
    detectLocation() {
        if (!navigator.geolocation) {
            // Browser tidak support → fallback
            this.useDefaultLocation();
            return;
        }

        const el = $('#weatherContent');
        if (el) {
            el.innerHTML = `
                <div class="weather-detect">
                    <p class="loading">📍 Mendeteksi lokasi...</p>
                    <p style="font-size: 0.75rem; color: var(--text-muted); text-align: center; margin-top: 8px;">
                        Izinkan akses lokasi untuk cuaca akurat
                    </p>
                </div>
            `;
        }

        navigator.geolocation.getCurrentPosition(
            // Sukses
            (pos) => {
                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;
                this.reverseGeocode(lat, lon);
            },
            // Gagal / user tolak
            (err) => {
                console.warn('Geolocation error:', err.message);
                this.useDefaultLocation();
            },
            {
                enableHighAccuracy: false,
                timeout: 10000,
                maximumAge: 3600000 // cache 1 jam
            }
        );
    },

    // ============================================
    // Reverse geocoding — koordinat → nama kota
    // Pakai Open-Meteo Geocoding API (gratis)
    // ============================================
    async reverseGeocode(lat, lon) {
        let cityName = 'Lokasi Anda';

        try {
            // Open-Meteo tidak punya reverse geocoding langsung,
            // jadi kita pakai BigDataCloud (gratis, tanpa API key)
            const res = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=id`
            );
            const data = await res.json();

            cityName =
                data.city ||
                data.locality ||
                data.principalSubdivision ||
                data.countryName ||
                'Lokasi Anda';
        } catch (e) {
            console.warn('Reverse geocode gagal:', e);
        }

        this.location = { name: cityName, lat, lon };
        Storage.set('weather_location', this.location);
        this.fetch();
    },

    // ============================================
    // Pakai lokasi default (Jakarta)
    // ============================================
    useDefaultLocation() {
        this.location = { ...this.DEFAULT_LOCATION };
        Storage.set('weather_location', this.location);
        this.render();
        this.fetch();

        // Tampilkan info ke user
        const el = $('#weatherContent');
        if (el) {
            setTimeout(() => {
                const info = document.createElement('p');
                info.style.cssText = 'font-size: 0.7rem; color: var(--text-muted); text-align: center; margin-top: 8px;';
                info.textContent = '📍 Pakai lokasi default (Jakarta). Klik ↻ sambil tahan Shift untuk deteksi ulang.';
                if (el.firstChild) el.appendChild(info);
            }, 1500);
        }
    },

    // ============================================
    // Fetch cuaca dari Open-Meteo
    // ============================================
    async fetch() {
        if (!this.location) return;

        const el = $('#weatherContent');
        if (el) el.innerHTML = '<p class="loading">Memuat cuaca...</p>';

        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.location.lat}&longitude=${this.location.lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`;
            const res = await fetch(url);
            const data = await res.json();
            this.weatherData = data.current;
            this.render();
        } catch (e) {
            if (el) el.innerHTML = '<p class="empty-state">Gagal memuat cuaca</p>';
        }
    },

    // ============================================
    // Mapping kode cuaca → icon
    // ============================================
    getWeatherIcon(code) {
        if (code === 0) return '☀️';
        if (code <= 3) return '⛅';
        if (code <= 48) return '🌫️';
        if (code <= 67) return '🌧️';
        if (code <= 77) return '❄️';
        if (code <= 82) return '🌧️';
        if (code <= 86) return '❄️';
        return '⛈️';
    },

    getWeatherLabel(code) {
        if (code === 0) return 'Cerah';
        if (code <= 3) return 'Berawan';
        if (code <= 48) return 'Berkabut';
        if (code <= 67) return 'Hujan';
        if (code <= 77) return 'Salju';
        if (code <= 82) return 'Hujan';
        if (code <= 86) return 'Salju';
        return 'Badai';
    },

    // ============================================
    // Render tampilan
    // ============================================
    render() {
        const el = $('#weatherContent');
        if (!el) return;
        if (!this.weatherData) {
            el.innerHTML = '<p class="loading">Memuat...</p>';
            return;
        }
        const w = this.weatherData;
        el.innerHTML = `
            <div class="weather-display">
                <div class="weather-icon">${this.getWeatherIcon(w.weather_code)}</div>
                <div class="weather-info">
                    <div class="weather-temp">${Math.round(w.temperature_2m)}°C</div>
                    <div class="weather-label">${this.getWeatherLabel(w.weather_code)}</div>
                    <div class="weather-location">📍 ${Helpers.escapeHtml(this.location.name)}</div>
                    <div class="weather-details">
                        💧 ${w.relative_humidity_2m}% · 💨 ${w.wind_speed_10m} km/h
                    </div>
                </div>
            </div>
        `;
    }
};