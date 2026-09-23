/* ============================================
   HUBLR - Notes Module
   Catatan cepat dengan LocalStorage
   ============================================ */

const Notes = {
    notes: [],

    init() {
        this.notes = Storage.get('notes', []);
        this.render();
        on($('#addNoteBtn'), 'click', () => this.add());
        on($('#notesGrid'), 'click', (e) => {
            const del = e.target.closest('.note-delete');
            if (del) {
                e.stopPropagation();
                const id = parseInt(del.dataset.id);
                this.remove(id);
            }
        });
    },

    add() {
        const content = prompt(I18n.t('notePrompt') || 'Tulis catatan:');
        if (!content || !content.trim()) return;
        const note = {
            id: Date.now(),
            content: content.trim(),
            createdAt: new Date().toISOString()
        };
        this.notes.unshift(note);
        this.save();
        this.render();
    },

    remove(id) {
        if (!confirm(I18n.t('deleteConfirm'))) return;
        this.notes = this.notes.filter((n) => n.id !== id);
        this.save();
        this.render();
    },

    save() {
        Storage.set('notes', this.notes);
    },

    render() {
        const grid = $('#notesGrid');
        if (!grid) return;
        if (this.notes.length === 0) {
            grid.innerHTML = `<p class="empty-state">${I18n.t('noNotes') || 'Belum ada catatan'}</p>`;
            return;
        }
        grid.innerHTML = this.notes.map((n) => `
            <div class="note-card">
                <button class="note-delete" data-id="${n.id}" title="Hapus">✕</button>
                <p class="note-content">${Helpers.escapeHtml(n.content)}</p>
                <span class="note-date">${new Date(n.createdAt).toLocaleDateString('id-ID')}</span>
            </div>
        `).join('');
    }
};