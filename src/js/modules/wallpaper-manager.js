/* ============================================
   HUBLR - Wallpaper Manager v0.3.0
   Support: gambar, video, gradient, solid, URL
   ============================================ */

const WallpaperManager = {
    currentType: 'unsplash',
    currentValue: '',
    videoElement: null,

    init() {
        const saved = Storage.get('wallpaper_config', null);
        if (saved) {
            this.currentType = saved.type || 'unsplash';
            this.currentValue = saved.value || '';
        }
        this.apply();
        this.bindEvents();
    },

    bindEvents() {
        on($('#wallpaperType'), 'change', (e) => this.changeType(e.target.value));
        on($('#wallpaperUpload'), 'change', (e) => this.handleUpload(e));
        on($('#wallpaperUploadVideo'), 'change', (e) => this.handleUpload(e));
        on($('#wallpaperUrlInput'), 'keydown', (e) => {
            if (e.key === 'Enter') this.applyUrl();
        });
        on($('#wallpaperApplyUrl'), 'click', () => this.applyUrl());
        on($('#wallpaperGradientApply'), 'click', () => this.applyGradient());
        on($('#wallpaperSolidApply'), 'click', () => this.applySolid());
        on($('#wallpaperReset'), 'click', () => this.reset());
    },

    changeType(type) {
        this.currentType = type;
        $$('.wallpaper-option').forEach((el) => el.classList.add('hidden'));
        const target = $(`#wallpaper-${type}`);
        if (target) target.classList.remove('hidden');
    },

    apply() {
        const wp = ELS.wallpaper;
        if (!wp) return;

        if (this.videoElement) {
            try { this.videoElement.pause(); this.videoElement.remove(); } catch (e) {}
            this.videoElement = null;
        }

        try {
            if (this.currentType === 'unsplash') {
                wp.style.backgroundImage = `url('${CONFIG.wallpaper.source}&r=${Math.random()}')`;
                wp.style.background = '';
            } else if (this.currentType === 'image' || this.currentType === 'url') {
                wp.style.backgroundImage = `url('${this.currentValue}')`;
            } else if (this.currentType === 'gradient' || this.currentType === 'solid') {
                wp.style.backgroundImage = 'none';
                wp.style.background = this.currentValue;
            } else if (this.currentType === 'video') {
                wp.style.backgroundImage = 'none';
                wp.style.background = '#000';
                this.playVideo(this.currentValue);
            }
            if (this.currentType !== 'video') {
                wp.style.opacity = State.wallpaperEnabled ? '1' : '0';
            }
        } catch (e) {
            console.warn('Wallpaper apply error:', e);
        }
    },

    playVideo(src) {
        const wp = ELS.wallpaper;
        if (!wp || !src) return;
        try {
            const video = document.createElement('video');
            video.src = src;
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            video.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;';
            wp.appendChild(video);
            this.videoElement = video;
        } catch (e) {
            console.warn('Video error:', e);
        }
    },

    handleUpload(e) {
        const file = e.target.files[0];
        if (!file) return;
        const isVideo = file.type.startsWith('video/');
        const maxSize = isVideo ? 5 * 1024 * 1024 : 2 * 1024 * 1024;
        if (file.size > maxSize) {
            alert(`File terlalu besar! Max ${isVideo ? '5' : '2'}MB.`);
            return;
        }
        const reader = new FileReader();
        reader.onload = (evt) => {
            this.currentType = isVideo ? 'video' : 'image';
            this.currentValue = evt.target.result;
            Storage.set('wallpaper_config', { type: this.currentType, value: this.currentValue });
            this.apply();
            this.showPreview(isVideo ? '🎬 Video berhasil dipasang!' : '🖼️ Gambar berhasil dipasang!');
        };
        reader.readAsDataURL(file);
    },

    applyUrl() {
        const input = $('#wallpaperUrlInput');
        if (!input) return;
        const url = input.value.trim();
        if (!url) return;
        this.currentType = 'url';
        this.currentValue = url;
        Storage.set('wallpaper_config', { type: 'url', value: url });
        this.apply();
        this.showPreview('🌐 URL wallpaper diterapkan!');
    },

    applyGradient() {
        const c1 = $('#gradientColor1');
        const c2 = $('#gradientColor2');
        const ang = $('#gradientAngle');
        if (!c1 || !c2) return;
        const angle = (ang && ang.value) || 135;
        const gradient = `linear-gradient(${angle}deg, ${c1.value}, ${c2.value})`;
        this.currentType = 'gradient';
        this.currentValue = gradient;
        Storage.set('wallpaper_config', { type: 'gradient', value: gradient });
        this.apply();
        this.showPreview('🌈 Gradient diterapkan!');
    },

    applySolid() {
        const c = $('#solidColor');
        if (!c) return;
        this.currentType = 'solid';
        this.currentValue = c.value;
        Storage.set('wallpaper_config', { type: 'solid', value: c.value });
        this.apply();
        this.showPreview('🎨 Warna solid diterapkan!');
    },

    reset() {
        this.currentType = 'unsplash';
        this.currentValue = '';
        Storage.remove('wallpaper_config');
        this.apply();
        this.showPreview('♻️ Wallpaper di-reset');
    },

    showPreview(msg) {
        const el = $('#wallpaperPreview');
        if (!el) return;
        el.textContent = msg;
        el.classList.add('active');
        setTimeout(() => el.classList.remove('active'), 2000);
    }
};