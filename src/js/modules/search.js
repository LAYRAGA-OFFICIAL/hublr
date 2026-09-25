/* ============================================
   HUBLR - Search Module v0.3.2
   Engine picker dengan dropdown keren
   ============================================ */

const Search = {
    init() {
        this.populateEngines();
        this.populateDropdown();
        this.bindEvents();
    },

    bindEvents() {
        on(ELS.searchBtn, 'click', () => this.do(ELS.searchInput.value));

        on(ELS.searchInput, 'keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.do(ELS.searchInput.value);
            } else if (e.key === 'Escape') {
                ELS.searchInput.value = '';
                ELS.calcResult.classList.remove('active');
                this.closeDropdown();
                if (typeof SearchEnhanced !== 'undefined') SearchEnhanced.hidePreview();
            }
        });

        on(ELS.searchInput, 'input', (e) => Calculator.update(e.target.value));

        on(ELS.engineSelect, 'change', (e) => {
            this.selectEngine(e.target.value);
        });

        const pickerBtn = $('#enginePickerBtn');
        if (pickerBtn) {
            pickerBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDropdown();
            });
        }

        const closeBtn = $('#engineDropdownClose');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.closeDropdown();
            });
        }

        document.addEventListener('click', (e) => {
            const dropdown = $('#engineDropdown');
            const pickerBtn = $('#enginePickerBtn');
            if (dropdown && dropdown.classList.contains('active')) {
                if (!dropdown.contains(e.target) && !pickerBtn.contains(e.target)) {
                    this.closeDropdown();
                }
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeDropdown();
        });

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
        if (!ELS.engineSelect) return;
        ELS.engineSelect.innerHTML = '';
        CONFIG.engines.forEach((engine) => {
            const opt = document.createElement('option');
            opt.value = engine.id;
            opt.textContent = `${engine.icon} ${engine.name}`;
            ELS.engineSelect.appendChild(opt);
        });
    },

    populateDropdown() {
        const list = $('#engineDropdownList');
        if (!list) return;

        list.innerHTML = CONFIG.engines.map((engine) => `
            <div class="engine-dropdown-item" data-id="${engine.id}">
                <span class="engine-dropdown-icon">${engine.icon}</span>
                <span class="engine-dropdown-name">${engine.name}</span>
                <span class="engine-dropdown-check">✓</span>
            </div>
        `).join('');

        list.querySelectorAll('.engine-dropdown-item').forEach((item) => {
            item.addEventListener('click', () => {
                const id = item.dataset.id;
                this.selectEngine(id);
                this.closeDropdown();
                ELS.searchInput.focus();
            });
        });

        this.updateDropdownActive();
    },

    updateDropdownActive() {
        const currentId = ELS.engineSelect ? ELS.engineSelect.value : 'google';
        $$('.engine-dropdown-item').forEach((item) => {
            item.classList.toggle('active', item.dataset.id === currentId);
        });
    },

    selectEngine(id) {
        if (ELS.engineSelect) ELS.engineSelect.value = id;
        this.updateDropdownActive();
    },

    toggleDropdown() {
        const dropdown = $('#engineDropdown');
        const btn = $('#enginePickerBtn');
        if (!dropdown) return;
        const isActive = dropdown.classList.toggle('active');
        if (btn) btn.classList.toggle('open', isActive);
    },

    closeDropdown() {
        const dropdown = $('#engineDropdown');
        const btn = $('#enginePickerBtn');
        if (dropdown) dropdown.classList.remove('active');
        if (btn) btn.classList.remove('open');
    },

    getSelectedEngine() {
        if (!ELS.engineSelect) return CONFIG.engines[0];
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

        const engine = this.getSelectedEngine();

        const shortcutMatch = query.match(/^(\w+):\s*(.+)$/);
        if (shortcutMatch) {
            const engineId = shortcutMatch[1].toLowerCase();
            const found = CONFIG.engines.find((e) => e.id === engineId);
            if (found) {
                window.location.href = found.url.replace('%s', encodeURIComponent(shortcutMatch[2]));
                return;
            }
        }

        window.location.href = engine.url.replace('%s', encodeURIComponent(query));
    }
};