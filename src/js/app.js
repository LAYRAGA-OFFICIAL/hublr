/* ============================================
   HUBLR - App Entry Point v0.3.1
   ============================================ */

const App = {
    init() {
        Theme.init();
        ThemeColors.init();
        WallpaperManager.init();
        Animations.init();

        this.applyLanguage();

        Clock.init();
        Autosuggest.init();
        Search.init();
        SearchEnhanced.init();
        Bookmarks.init();
        Notes.init();
        Todo.init();
        Weather.init();
        Backup.init();
        Dashboard.init();
        Settings.init();

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js').catch(() => {});
        }

        console.log('%c🌀 HUBLR v0.3.1', 'color:#6366f1;font-size:20px;font-weight:bold;');
        console.log('%cby LAYRAGA OFFICIAL', 'color:#0ea5e9;font-size:12px;');
    },

    applyLanguage() {
        if (!ELS.langLabel) return;
        ELS.langLabel.textContent = State.language.toUpperCase();

        const setText = (el, key) => { if (el) el.textContent = I18n.t(key); };
        const setPh = (el, key) => { if (el) el.placeholder = I18n.t(key); };

        setPh(ELS.searchInput, 'searchPlaceholder');
        setText(ELS.bookmarksTitle, 'bookmarks');
        setText(ELS.modalTitle, 'addBookmark');
        setPh(ELS.bmName, 'name');
        setPh(ELS.bmUrl, 'url');
        setText(ELS.bmCancel, 'cancel');
        setText(ELS.bmSave, 'save');
        setText(ELS.settingsTitle, 'settings');
        setText(ELS.settingsClose, 'close');
        setText(ELS.lblWallpaper, 'wallpaper');
        setText(ELS.lblAnim, 'animations');
        setText(ELS.lblClock, 'clockFormat');
        setText(ELS.footerText, 'footer');
        setText(ELS.notesTitle, 'notesTitle');
        setText(ELS.todoTitle, 'todoTitle');
        setText(ELS.weatherTitle, 'weatherTitle');
        setText(ELS.backupTitle, 'backupTitle');
        setText(ELS.backupDesc, 'backupDesc');
        setText(ELS.lblColorTitle, 'lblColorTitle');
        setText(ELS.lblWallpaperTitle, 'lblWallpaperTitle');
        setText(ELS.lblWallpaperType, 'lblWallpaperType');
        setText(ELS.lblAnimTitle, 'lblAnimTitle');
        setText(ELS.lblParticles, 'lblParticles');
        setText(ELS.lblCursor, 'lblCursor');
        setText(ELS.lblOtherTitle, 'lblOtherTitle');

        // v0.3.1: sync engine picker icon
        if (typeof Search !== 'undefined' && ELS.engineSelect) {
            const engine = CONFIG.engines.find((e) => e.id === ELS.engineSelect.value);
            const iconEl = $('#enginePickerIcon');
            if (iconEl && engine) iconEl.textContent = engine.icon;
        }

        if (typeof Bookmarks !== 'undefined' && Bookmarks.render) Bookmarks.render();
        if (typeof Notes !== 'undefined' && Notes.render) Notes.render();
        if (typeof Todo !== 'undefined' && Todo.render) Todo.render();
        if (typeof Clock !== 'undefined' && Clock.update) Clock.update();
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
} else {
    App.init();
}