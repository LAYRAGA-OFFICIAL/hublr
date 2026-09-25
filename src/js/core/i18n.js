/* ============================================
   HUBLR - Internasionalisasi (i18n)
   ============================================ */

const TRANSLATIONS = {
    id: {
        searchPlaceholder: 'Ketik untuk mencari... (Ctrl+K)',
        greetingMorning: 'Selamat pagi',
        greetingAfternoon: 'Selamat siang',
        greetingEvening: 'Selamat sore',
        greetingNight: 'Selamat malam',
        bookmarks: 'Bookmark',
        addBookmark: 'Tambah Bookmark',
        name: 'Nama',
        url: 'URL',
        cancel: 'Batal',
        save: 'Simpan',
        settings: 'Pengaturan',
        close: 'Tutup',
        wallpaper: 'Wallpaper dari Unsplash',
        animations: 'Animasi',
        clockFormat: 'Format Jam',
        notesTitle: 'Catatan',
        todoTitle: 'Tugas',
        weatherTitle: 'Cuaca',
        backupTitle: 'Backup',
        backupDesc: 'Simpan atau pulihkan data HUBLR Anda.',
        notePrompt: 'Tulis catatan:',
        noNotes: 'Belum ada catatan. Klik + untuk menambah.',
        noTodos: 'Belum ada tugas. Ketik di atas untuk menambah.',
        lblColorTitle: 'Warna Tema',
        lblWallpaperTitle: 'Wallpaper',
        lblWallpaperType: 'Tipe Wallpaper',
        lblAnimTitle: 'Animasi',
        lblParticles: 'Partikel Background',
        lblCursor: 'Efek Cursor',
        lblOtherTitle: 'Lainnya',
        footer: 'HUBLR v0.3.0 — oleh LAYRAGA OFFICIAL',
        deleteConfirm: 'Hapus bookmark ini?',
        noBookmarks: 'Belum ada bookmark. Klik ➕ untuk menambah.',
        days: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
        months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    },
    en: {
        searchPlaceholder: 'Type to search... (Ctrl+K)',
        greetingMorning: 'Good morning',
        greetingAfternoon: 'Good afternoon',
        greetingEvening: 'Good evening',
        greetingNight: 'Good night',
        bookmarks: 'Bookmarks',
        addBookmark: 'Add Bookmark',
        name: 'Name',
        url: 'URL',
        cancel: 'Cancel',
        save: 'Save',
        settings: 'Settings',
        close: 'Close',
        wallpaper: 'Wallpaper from Unsplash',
        animations: 'Animations',
        clockFormat: 'Clock Format',
        notesTitle: 'Notes',
        todoTitle: 'To-do',
        weatherTitle: 'Weather',
        backupTitle: 'Backup',
        backupDesc: 'Save or restore your HUBLR data.',
        notePrompt: 'Write a note:',
        noNotes: 'No notes yet. Click + to add.',
        noTodos: 'No tasks yet. Type above to add.',
        lblColorTitle: 'Theme Color',
        lblWallpaperTitle: 'Wallpaper',
        lblWallpaperType: 'Wallpaper Type',
        lblAnimTitle: 'Animations',
        lblParticles: 'Background Particles',
        lblCursor: 'Cursor Effect',
        lblOtherTitle: 'Other',
        footer: 'HUBLR v0.3.0 — by LAYRAGA OFFICIAL',
        deleteConfirm: 'Delete this bookmark?',
        noBookmarks: 'No bookmarks yet. Click ➕ to add.',
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    }
};

const I18n = {
    t(key) {
        return (TRANSLATIONS[State.language] && TRANSLATIONS[State.language][key]) || key;
    },

    toggle() {
        State.set('language', State.language === 'id' ? 'en' : 'id');
    }
};