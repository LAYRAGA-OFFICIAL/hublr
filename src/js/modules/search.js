/* ============================================
   HUBLR - Search Module
   ============================================ */

const Search = {
    init() {
        this.populateEngines();
        on(ELS.searchBtn, 'click', () => this.do(ELS.searchInput.value));
        on(ELS.searchInput, 'keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.do(ELS.searchInput.value);
            } else if (e.key === 'Escape') {
                ELS.searchInput.value = '';
                ELS.calcResult.classList.remove('active');
            }
        });
        on(ELS.searchInput, 'input', (e) => Calculator.update(e.target.value));

        // Global shortcuts
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                ELS.searchInput.focus();
                ELS.searchInput.select();
            }
            if (e.key === '/' && document.activeElement !== ELS.searchInput) {
                e.preventDefault();
                ELS.searchInput.focus();
            }
        });
    },

    populateEngines() {
        ELS.engineSelect.innerHTML = '';
        CONFIG.engines.forEach((engine) => {
            const opt = document.createElement('option');
            opt.value = engine.id;
            opt.textContent = `${engine.icon} ${engine.name}`;
            ELS.engineSelect.appendChild(opt);
        });
    },

    getSelectedEngine() {
        return CONFIG.engines.find((e) => e.id === ELS.engineSelect.value) || CONFIG.engines[0];
    },

    do(query) {
        query = query.trim();
        if (!query) return;

        const calc = Calculator.tryEvaluate(query);
        if (calc !== null) {
            ELS.calcResult.textContent = '= ' + calc;
            ELS.calcResult.classList.add('active');
            return;
        }

        const shortcutMatch = query.match(/^(\w+):\s*(.+)$/);
        if (shortcutMatch) {
            const engineId = shortcutMatch[1].toLowerCase();
            const engine = CONFIG.engines.find((e) => e.id === engineId);
            if (engine) {
                window.location.href = engine.url.replace('%s', encodeURIComponent(shortcutMatch[2]));
                return;
            }
        }

        const engine = this.getSelectedEngine();
        window.location.href = engine.url.replace('%s', encodeURIComponent(query));
    }
};