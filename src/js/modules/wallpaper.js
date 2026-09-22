/* ============================================
   HUBLR - Wallpaper Module
   ============================================ */

const Wallpaper = {
    init() {
        this.apply();
        setInterval(() => this.refresh(), CONFIG.wallpaper.refreshInterval);
    },

    apply() {
        if (State.wallpaperEnabled) {
            const url = CONFIG.wallpaper.source + '&r=' + Math.random();
            ELS.wallpaper.style.backgroundImage = `url('${url}')`;
            ELS.wallpaper.style.opacity = '1';
        } else {
            ELS.wallpaper.style.opacity = '0';
        }
    },

    refresh() {
        if (State.wallpaperEnabled) {
            const url = CONFIG.wallpaper.source + '&r=' + Math.random();
            ELS.wallpaper.style.backgroundImage = `url('${url}')`;
        }
    }
};