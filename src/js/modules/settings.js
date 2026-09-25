/* ============================================
   HUBLR - Settings Module v0.3.0
   ============================================ */

const Settings = {
    init() {
        on(ELS.settingsBtn, 'click', () => this.open());
        on(ELS.settingsClose, 'click', () => hide(ELS.settingsModal));

        on(ELS.wallpaperToggle, 'change', (e) => {
            State.set('wallpaperEnabled', e.target.checked);
            WallpaperManager.apply();
        });

        on(ELS.animationToggle, 'change', (e) => {
            State.set('animationsEnabled', e.target.checked);
            document.body.style.setProperty(
                '--transition',
                e.target.checked ? '0.3s cubic-bezier(0.4, 0, 0.2, 1)' : '0s'
            );
        });

        on(ELS.clockFormat, 'change', (e) => {
            State.set('clockFormat', e.target.value);
            Clock.update();
        });

        on(ELS.langToggle, 'click', () => {
            I18n.toggle();
            App.applyLanguage();
        });

        // v0.3.0 — Wallpaper type toggle
        on($('#wallpaperType'), 'change', (e) => {
            const type = e.target.value;
            $$('.wallpaper-option').forEach((el) => el.classList.add('hidden'));
            const target = $(`#wallpaper-${type}`);
            if (target) target.classList.remove('hidden');
        });

        $$('.modal').forEach((modal) => {
            on(modal, 'click', (e) => {
                if (e.target === modal) modal.classList.add('hidden');
            });
        });
    },

    open() {
        if (ELS.wallpaperToggle) ELS.wallpaperToggle.checked = State.wallpaperEnabled;
        if (ELS.animationToggle) ELS.animationToggle.checked = State.animationsEnabled;
        if (ELS.clockFormat) ELS.clockFormat.value = State.clockFormat;
        show(ELS.settingsModal);
    }
};