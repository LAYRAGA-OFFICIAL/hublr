/* ============================================
   HUBLR - Search Enhanced v0.3.0
   Preview hasil + voice search
   ============================================ */

const SearchEnhanced = {
    previewCache: {},

    init() {
        this.bindEvents();
    },

    bindEvents() {
        on($('#voiceBtn'), 'click', () => this.startVoice());

        const wrapper = $('.search-wrapper');
        if (wrapper) {
            on(ELS.searchInput, 'focus', () => wrapper.classList.add('focused'));
            on(ELS.searchInput, 'blur', () => wrapper.classList.remove('focused'));
        }

        let timeout;
        on(ELS.searchInput, 'input', (e) => {
            clearTimeout(timeout);
            const q = e.target.value.trim();
            if (q.length < 3) {
                this.hidePreview();
                return;
            }
            timeout = setTimeout(() => this.fetchPreview(q), 500);
        });
    },

    startVoice() {
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SR) {
            alert('Browser Anda tidak mendukung voice search. Coba Chrome atau Edge.');
            return;
        }
        const recognition = new SR();
        recognition.lang = State.language === 'id' ? 'id-ID' : 'en-US';
        recognition.interimResults = false;

        const btn = $('#voiceBtn');
        if (btn) btn.classList.add('listening');

        recognition.onresult = (e) => {
            const text = e.results[0][0].transcript;
            ELS.searchInput.value = text;
            if (btn) btn.classList.remove('listening');
            setTimeout(() => Search.do(text), 500);
        };
        recognition.onerror = () => { if (btn) btn.classList.remove('listening'); };
        recognition.onend = () => { if (btn) btn.classList.remove('listening'); };
        recognition.start();
    },

    async fetchPreview(query) {
        if (this.previewCache[query]) {
            this.showPreview(this.previewCache[query]);
            return;
        }
        try {
            const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&no_html=1&skip_disambig=1`;
            const res = await fetch(url);
            const data = await res.json();
            const results = [];

            if (data.AbstractText) {
                results.push({
                    type: 'answer',
                    title: data.Heading || query,
                    text: data.AbstractText,
                    url: data.AbstractURL
                });
            }
            if (data.RelatedTopics) {
                data.RelatedTopics.slice(0, 4).forEach((topic) => {
                    if (topic.Text) {
                        results.push({
                            type: 'related',
                            title: topic.Text.split(' - ')[0],
                            text: topic.Text,
                            url: topic.FirstURL
                        });
                    }
                });
            }
            this.previewCache[query] = results;
            this.showPreview(results);
        } catch (e) {
            this.hidePreview();
        }
    },

    showPreview(results) {
        const el = $('#searchPreview');
        if (!el) return;
        if (!results || results.length === 0) {
            el.classList.remove('active');
            return;
        }
        el.innerHTML = results.map((r) => `
            <div class="preview-item" data-url="${r.url || ''}">
                <div class="preview-icon">${r.type === 'answer' ? '💡' : '🔗'}</div>
                <div class="preview-content">
                    <div class="preview-title">${Helpers.escapeHtml(r.title)}</div>
                    <div class="preview-text">${Helpers.escapeHtml((r.text || '').slice(0, 120))}${(r.text || '').length > 120 ? '...' : ''}</div>
                </div>
            </div>
        `).join('');
        el.classList.add('active');

        el.querySelectorAll('.preview-item').forEach((item) => {
            item.addEventListener('click', () => {
                const url = item.dataset.url;
                if (url) window.open(url, '_blank');
            });
        });
    },

    hidePreview() {
        const el = $('#searchPreview');
        if (el) el.classList.remove('active');
    }
};