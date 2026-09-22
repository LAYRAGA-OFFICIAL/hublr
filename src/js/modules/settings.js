/* ============================================
   HUBLR - Settings Module
   ============================================ */

const Settings = {
    init() {
        on(ELS.settingsBtn, 'click', () => this.open());
        on(ELS.settingsClose, 'click', () => hide(ELS.settingsModal));
        on(ELS.wallpaperToggle, 'change', (e) => {
            State.set('wallpaperEnabled', e.target.checked);
            Wallpaper.apply();
        });
        on(ELS.animationToggle, 'change', (e) => {
            State.set('animationsEnabled', e.target.checked);
            document.body.style.setProperty('--transition',
                e.target.checked ? '0.3s cubic-bezier(0.4, 0, 0.2, 1)' : '0s');
        });
        on(ELS.clockFormat, 'change', (e) => {
            State.set('clockFormat', e.target.value);
            Clock.update();
        });
        on(ELS.langToggle, 'click', () => {
            I18n.toggle();
            App.applyLanguage();
        });
        $$('.modal').forEach((modal) => {
            on(modal, 'click', (e) => {
                if (e.target === modal) modal.classList.add('hidden');
            });
        });
    },

    open() {
        ELS.wallpaperToggle.checked = State.wallpaperEnabled;
        ELS.animationToggle.checked = State.animationsEnabled;
        ELS.clockFormat.value = State.clockFormat;
        show(ELS.settingsModal);
    }
};