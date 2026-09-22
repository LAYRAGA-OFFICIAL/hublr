/* ============================================
   HUBLR - Theme Module
   ============================================ */

const Theme = {
    init() {
        this.apply();
        on(ELS.themeToggle, 'click', () => this.toggle());
    },

    apply() {
        let theme = State.theme;
        if (theme === 'auto') {
            const hour = new Date().getHours();
            theme = (hour >= 6 && hour < 18) ? 'light' : 'dark';
        }
        document.documentElement.setAttribute('data-theme', theme);
        if (ELS.themeIcon) ELS.themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    },

    toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        State.set('theme', current === 'dark' ? 'light' : 'dark');
        this.apply();
    }
};