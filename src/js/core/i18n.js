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
        footer: 'HUBLR v0.1.0 — oleh LAYRAGA OFFICIAL',
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
        footer: 'HUBLR v0.1.0 — by LAYRAGA OFFICIAL',
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