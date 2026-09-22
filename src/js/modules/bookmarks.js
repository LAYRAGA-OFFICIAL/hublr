/* ============================================
   HUBLR - Bookmarks Module
   ============================================ */

const Bookmarks = {
    init() {
        this.render();
        on(ELS.addBookmarkBtn, 'click', () => this.openModal());
        on(ELS.bmCancel, 'click', () => this.closeModal());
        on(ELS.bmSave, 'click', () => this.save());
        on(ELS.bmName, 'keydown', (e) => { if (e.key === 'Enter') ELS.bmUrl.focus(); });
        on(ELS.bmUrl, 'keydown', (e) => { if (e.key === 'Enter') this.save(); });
    },

    render() {
        ELS.bookmarksGrid.innerHTML = '';
        if (State.bookmarks.length === 0) {
            ELS.bookmarksGrid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);">${I18n.t('noBookmarks')}</p>`;
            return;
        }
        State.bookmarks.forEach((bm, index) => {
            const card = document.createElement('a');
            card.className = 'bookmark-card';
            card.href = bm.url;
            card.innerHTML = `
                <span class="bookmark-icon">${bm.icon || '🔗'}</span>
                <span class="bookmark-name">${Helpers.escapeHtml(bm.name)}</span>
                <button class="bookmark-delete" data-index="${index}" title="Hapus">✕</button>
            `;
            ELS.bookmarksGrid.appendChild(card);
        });

        $$('.bookmark-delete').forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const idx = parseInt(btn.dataset.index);
                if (confirm(I18n.t('deleteConfirm'))) {
                    State.bookmarks.splice(idx, 1);
                    Storage.set('bookmarks', State.bookmarks);
                    this.render();
                }
            });
        });
    },

    openModal() {
        ELS.bmName.value = '';
        ELS.bmUrl.value = '';
        show(ELS.bookmarkModal);
        ELS.bmName.focus();
    },

    closeModal() {
        hide(ELS.bookmarkModal);
    },

    save() {
        const name = ELS.bmName.value.trim();
        let url = ELS.bmUrl.value.trim();
        if (!name || !url) return;
        url = Helpers.normaliseUrl(url);
        State.bookmarks.push({ name, url, icon: '🔗' });
        Storage.set('bookmarks', State.bookmarks);
        this.render();
        this.closeModal();
    }
};