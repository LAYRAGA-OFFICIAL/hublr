/* ============================================
   HUBLR - App Entry Point v0.2.0
   ============================================ */

const App = {
    init() {
        // Init theme & wallpaper dulu
        Theme.init();
        Wallpaper.init();

        // Render teks bahasa
        this.applyLanguage();

        // Init modul-modul
        Clock.init();
        Autosuggest.init();
        Search.init();
        Bookmarks.init();
        Notes.init();
        Todo.init();
        Weather.init();
        Backup.init();
        Dashboard.init();
        Settings.init();

        // Register service worker (PWA)
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js').catch(() => {});
        }

        console.log('%c🌀 HUBLR v0.2.0', 'color:#6366f1;font-size:20px;font-weight:bold;');
        console.log('%cby LAYRAGA OFFICIAL', 'color:#0ea5e9;font-size:12px;');
    },

    applyLanguage() {
        if (!ELS.langLabel) return;

        ELS.langLabel.textContent = State.language.toUpperCase();

        if (ELS.searchInput) ELS.searchInput.placeholder = I18n.t('searchPlaceholder');
        if (ELS.bookmarksTitle) ELS.bookmarksTitle.textContent = I18n.t('bookmarks');
        if (ELS.modalTitle) ELS.modalTitle.textContent = I18n.t('addBookmark');
        if (ELS.bmName) ELS.bmName.placeholder = I18n.t('name');
        if (ELS.bmUrl) ELS.bmUrl.placeholder = I18n.t('url');
        if (ELS.bmCancel) ELS.bmCancel.textContent = I18n.t('cancel');
        if (ELS.bmSave) ELS.bmSave.textContent = I18n.t('save');
        if (ELS.settingsTitle) ELS.settingsTitle.textContent = I18n.t('settings');
        if (ELS.settingsClose) ELS.settingsClose.textContent = I18n.t('close');
        if (ELS.lblWallpaper) ELS.lblWallpaper.textContent = I18n.t('wallpaper');
        if (ELS.lblAnim) ELS.lblAnim.textContent = I18n.t('animations');
        if (ELS.lblClock) ELS.lblClock.textContent = I18n.t('clockFormat');
        if (ELS.footerText) ELS.footerText.textContent = I18n.t('footer');

        // v0.2.0 - Dashboard
        if (ELS.notesTitle) ELS.notesTitle.textContent = I18n.t('notesTitle');
        if (ELS.todoTitle) ELS.todoTitle.textContent = I18n.t('todoTitle');
        if (ELS.weatherTitle) ELS.weatherTitle.textContent = I18n.t('weatherTitle');
        if (ELS.backupTitle) ELS.backupTitle.textContent = I18n.t('backupTitle');
        if (ELS.backupDesc) ELS.backupDesc.textContent = I18n.t('backupDesc');

        // Re-render modul yang punya teks
        if (typeof Bookmarks !== 'undefined' && Bookmarks.render) Bookmarks.render();
        if (typeof Notes !== 'undefined' && Notes.render) Notes.render();
        if (typeof Todo !== 'undefined' && Todo.render) Todo.render();
        if (typeof Clock !== 'undefined' && Clock.update) Clock.update();
    }
};

// Start when DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
} else {
    App.init();
}