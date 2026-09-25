/* ============================================
   HUBLR - Theme Colors Module v0.3.0
   ============================================ */

const ThemeColors = {
    colors: {
        indigo: { primary: '#6366f1', hover: '#4f46e5', accent: '#0ea5e9' },
        emerald: { primary: '#10b981', hover: '#059669', accent: '#06b6d4' },
        rose: { primary: '#f43f5e', hover: '#e11d48', accent: '#ec4899' },
        amber: { primary: '#f59e0b', hover: '#d97706', accent: '#f97316' },
        violet: { primary: '#8b5cf6', hover: '#7c3aed', accent: '#a855f7' },
        cyan: { primary: '#06b6d4', hover: '#0891b2', accent: '#0ea5e9' },
        slate: { primary: '#64748b', hover: '#475569', accent: '#94a3b8' },
        red: { primary: '#ef4444', hover: '#dc2626', accent: '#f97316' }
    },

    init() {
        const saved = Storage.get('theme_color', 'indigo');
        this.apply(saved);
        $$('.color-swatch').forEach((swatch) => {
            swatch.addEventListener('click', () => {
                const color = swatch.dataset.color;
                this.apply(color);
                Storage.set('theme_color', color);
            });
        });
    },

    apply(colorName) {
        const color = this.colors[colorName] || this.colors.indigo;
        const root = document.documentElement;
        root.style.setProperty('--primary', color.primary);
        root.style.setProperty('--primary-hover', color.hover);
        root.style.setProperty('--accent', color.accent);

        $$('.color-swatch').forEach((s) => {
            s.classList.toggle('active', s.dataset.color === colorName);
        });
    }
};