/* ============================================
   HUBLR - Import/Export Module
   Backup & restore data HUBLR
   ============================================ */

const Backup = {
    init() {
        on($('#exportBtn'), 'click', () => this.export());
        on($('#importBtn'), 'click', () => $('#importFile').click());
        on($('#importFile'), 'change', (e) => this.import(e));
    },

    export() {
        const data = {
            version: '0.2.0',
            exportedAt: new Date().toISOString(),
            bookmarks: Storage.get('bookmarks', []),
            notes: Storage.get('notes', []),
            todos: Storage.get('todos', []),
            settings: {
                theme: Storage.get('theme', 'dark'),
                language: Storage.get('lang', 'id'),
                clockFormat: Storage.get('clock', '24'),
                wallpaper: Storage.get('wallpaper', true),
                animations: Storage.get('anim', true)
            },
            search_history: Storage.get('search_history', []),
            weather_location: Storage.get('weather_location', null)
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `hublr-backup-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    },

    import(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            try {
                const data = JSON.parse(evt.target.result);
                if (!confirm('Ini akan menimpa data Anda saat ini. Lanjutkan?')) return;
                if (data.bookmarks) Storage.set('bookmarks', data.bookmarks);
                if (data.notes) Storage.set('notes', data.notes);
                if (data.todos) Storage.set('todos', data.todos);
                if (data.settings) {
                    Storage.set('theme', data.settings.theme);
                    Storage.set('lang', data.settings.language);
                    Storage.set('clock', data.settings.clockFormat);
                    Storage.set('wallpaper', data.settings.wallpaper);
                    Storage.set('anim', data.settings.animations);
                }
                if (data.search_history) Storage.set('search_history', data.search_history);
                if (data.weather_location) Storage.set('weather_location', data.weather_location);
                alert('Import berhasil! Halaman akan dimuat ulang.');
                location.reload();
            } catch (err) {
                alert('File tidak valid!');
            }
        };
        reader.readAsText(file);
    }
};