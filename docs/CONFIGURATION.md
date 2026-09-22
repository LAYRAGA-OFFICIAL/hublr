# Konfigurasi HUBLR

Edit `src/js/config.js` untuk mengubah:

- **Brand**: nama, versi, author
- **Engines**: tambah search engine
- **defaultBookmarks**: bookmark awal
- **wallpaper**: sumber & interval
- **settings**: default tema, bahasa, dll

## Contoh: Tambah Search Engine

```javascript
{ id: 'perplexity', name: 'Perplexity', icon: '🧠', url: 'https://perplexity.ai/search?q=%s' }

---

## 📄 FILE 44: `docs/KEYBOARD_SHORTCUTS.md`

```markdown
# Keyboard Shortcuts

| Shortcut | Fungsi |
|----------|--------|
| `Ctrl+K` / `Cmd+K` | Fokus ke search |
| `/` | Fokus ke search |
| `Enter` | Cari |
| `Esc` | Bersihkan search |