/* ============================================
   HUBLR - App Entry Point
   ============================================ */

const App = {
    init() {
        this.applyLanguage();
        Theme.init();
        Wallpaper.init();
        Clock.init();
        Search.init();
        Bookmarks.init();
        Settings.init();

        // Register service worker (PWA)
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./sw.js').catch(() => {});
        }

        console.log('%c🌀 HUBLR v0.1.0', 'color:#6366f1;font-size:20px;font-weight:bold;');
        console.log('%cby LAYRAGA OFFICIAL', 'color:#0ea5e9;font-size:12px;');
    },

    applyLanguage() {
        ELS.langLabel.textContent = State.language.toUpperCase();
        ELS.searchInput.placeholder = I18n.t('searchPlaceholder');
        ELS.bookmarksTitle.textContent = I18n.t('bookmarks');
        ELS.modalTitle.textContent = I18n.t('addBookmark');
        ELS.bmName.placeholder = I18n.t('name');
        ELS.bmUrl.placeholder = I18n.t('url');
        ELS.bmCancel.textContent = I18n.t('cancel');
        ELS.bmSave.textContent = I18n.t('save');
        ELS.settingsTitle.textContent = I18n.t('settings');
        ELS.settingsClose.textContent = I18n.t('close');
        ELS.lblWallpaper.textContent = I18n.t('wallpaper');
        ELS.lblAnim.textContent = I18n.t('animations');
        ELS.lblClock.textContent = I18n.t('clockFormat');
        ELS.footerText.textContent = I18n.t('footer');
        Bookmarks.render();
        Clock.update();
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
} else {
    App.init();
}