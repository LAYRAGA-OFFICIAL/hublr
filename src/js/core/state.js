/* ============================================
   HUBLR - State Management
   ============================================ */

const State = {
    language: Storage.get('lang', CONFIG.settings.defaultLanguage),
    theme: Storage.get('theme', CONFIG.settings.defaultTheme),
    clockFormat: Storage.get('clock', CONFIG.settings.clockFormat),
    wallpaperEnabled: Storage.get('wallpaper', true),
    animationsEnabled: Storage.get('anim', true),
    bookmarks: Storage.get('bookmarks', null) || [...CONFIG.defaultBookmarks],

    set(key, value) {
        this[key] = value;
        Storage.set(key, value);
    }
};