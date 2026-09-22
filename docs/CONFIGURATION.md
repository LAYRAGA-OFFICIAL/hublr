# ⚙️ Konfigurasi HUBLR

Semua pengaturan ada di file: `src/js/config.js`

---

## 🏷️ Brand

```javascript
brand: {
    name: 'HUBLR',
    fullName: 'LAYRAGA Hub',
    version: '0.1.0',
    author: 'LAYRAGA OFFICIAL',
    repo: 'https://github.com/LAYRAGA-OFFICIAL/hublr'
}
```

---

## 🔍 Mesin Pencari

```javascript
engines: [
    { id: 'google', name: 'Google', icon: '🔍', url: 'https://www.google.com/search?q=%s' },
    { id: 'youtube', name: 'YouTube', icon: '▶️', url: 'https://www.youtube.com/results?search_query=%s' },
    // tambah di sini...
]
```

**Menambah mesin baru:**
```javascript
{ id: 'ecosia', name: 'Ecosia', icon: '🌳', url: 'https://www.ecosia.org/search?q=%s' }
```

`%s` = kata kunci yang diketik user.

---

## 🔖 Bookmark Default

```javascript
defaultBookmarks: [
    { name: 'GitHub', url: 'https://github.com', icon: '🐙' },
    { name: 'YouTube', url: 'https://youtube.com', icon: '▶️' },
    // tambah di sini...
]
```

> ⚠️ Hanya berlaku untuk pengguna **baru**.

---

## 🖼️ Wallpaper

```javascript
wallpaper: {
    enabled: true,
    source: 'https://source.unsplash.com/1920x1080/?nature',
    refreshInterval: 3600000  // 1 jam
}
```

**Contoh source:**
- `?nature` → alam
- `?city,night` → kota malam
- `?abstract` → abstrak

---

## ⚙️ Settings Default

```javascript
settings: {
    defaultTheme: 'dark',      // 'dark' | 'light' | 'auto'
    defaultLanguage: 'id',     // 'id' | 'en'
    clockFormat: '24',         // '24' | '12'
    animations: true
}
```

---

## 💾 Simpan & Refresh

1. Tekan `Ctrl + S` di editor
2. Refresh browser (`F5` atau `Ctrl + R`)
3. Kalau tidak berubah, hard refresh (`Ctrl + Shift + R`)

---

## 🔄 Reset Pengaturan

Buka Console browser (`F12`):
```javascript
localStorage.clear(); location.reload();
```

---

**Dibuat di Indonesia 🇮🇩 oleh LAYRAGA OFFICIAL**
