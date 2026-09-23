/* ============================================
   HUBLR - Autosuggestions Module
   Saran dari history pencarian
   ============================================ */

const Autosuggest = {
    history: [],
    currentIndex: -1,

    init() {
        this.history = Storage.get('search_history', []);
    },

    add(query) {
        if (!query.trim()) return;
        this.history = this.history.filter((h) => h !== query);
        this.history.unshift(query);
        this.history = this.history.slice(0, 20);
        Storage.set('search_history', this.history);
    },

    suggest(query) {
        if (!query.trim()) return [];
        const q = query.toLowerCase();
        return this.history
            .filter((h) => h.toLowerCase().includes(q) && h.toLowerCase() !== q)
            .slice(0, 5);
    },

    render(query) {
        const el = $('#suggestions');
        if (!el) return;
        const suggestions = this.suggest(query);
        if (suggestions.length === 0) {
            el.classList.remove('active');
            return;
        }
        el.innerHTML = suggestions.map((s, i) => `
            <div class="suggestion-item" data-value="${Helpers.escapeHtml(s)}" data-index="${i}">
                🕐 ${Helpers.escapeHtml(s)}
            </div>
        `).join('');
        el.classList.add('active');
        this.currentIndex = -1;

        el.querySelectorAll('.suggestion-item').forEach((item) => {
            item.addEventListener('click', () => {
                const input = $('#searchInput');
                input.value = item.dataset.value;
                el.classList.remove('active');
                input.focus();
            });
        });
    },

    hide() {
        const el = $('#suggestions');
        if (el) el.classList.remove('active');
        this.currentIndex = -1;
    },

    navigate(dir) {
        const items = $$('.suggestion-item');
        if (items.length === 0) return;
        this.currentIndex += dir;
        if (this.currentIndex < 0) this.currentIndex = items.length - 1;
        if (this.currentIndex >= items.length) this.currentIndex = 0;
        items.forEach((item, i) => {
            item.classList.toggle('selected', i === this.currentIndex);
        });
        const input = $('#searchInput');
        input.value = items[this.currentIndex].dataset.value;
    },

    selectCurrent() {
        const items = $$('.suggestion-item');
        if (this.currentIndex >= 0 && items[this.currentIndex]) {
            const input = $('#searchInput');
            input.value = items[this.currentIndex].dataset.value;
            this.hide();
        }
    }
};