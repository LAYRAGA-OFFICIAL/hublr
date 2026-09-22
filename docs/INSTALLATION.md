# 🛠️ Cara Install HUBLR

Panduan ini untuk **semua orang**, termasuk yang belum pernah pakai Git atau GitHub.

---

## 🌐 Cara 1: Pakai Online (Paling Mudah)

1. Buka browser
2. Ketik: `https://layraga-official.github.io/hublr/`
3. Tekan Enter

Selesai! 🎉

---

## 💾 Cara 2: Download ke Komputer

1. Buka: https://github.com/LAYRAGA-OFFICIAL/hublr
2. Klik tombol hijau **`<> Code`** → **Download ZIP**
3. Ekstrak file ZIP-nya
4. Buka folder hasil ekstrak
5. **Jangan klik `index.html` langsung** — tidak akan jalan

### Cara Jalankan (Pilih Salah Satu):

**A. Pakai VS Code (paling mudah untuk pemula):**
1. Install [VS Code](https://code.visualstudio.com/)
2. Install ekstensi **Live Server**
3. Buka folder HUBLR di VS Code
4. Klik kanan `index.html` → **Open with Live Server**

**B. Pakai Python (kalau sudah ada):**
```bash
cd folder-hublr
python -m http.server 8000
```
Buka: `http://localhost:8000`

**C. Pakai Node.js (kalau sudah ada):**
```bash
cd folder-hublr
npx serve .
```
Buka: `http://localhost:8000`

---

## 🏠 Cara 3: Jadikan Homepage Browser

### Chrome / Edge / Brave:
1. Buka **Settings** → **On startup**
2. Pilih **Open a specific page**
3. Tambah: `https://layraga-official.github.io/hublr/`

### Firefox:
1. Buka **Settings** → **Home**
2. Pilih **Custom URLs**
3. Tambah URL di atas

---

## 📱 Cara 4: Install sebagai Aplikasi (PWA)

1. Buka: `https://layraga-official.github.io/hublr/`
2. Klik ikon **Install** (⊕) di address bar
3. Klik **Install**

HUBLR akan muncul seperti aplikasi biasa. Bisa dibuka tanpa browser!

---

## 🆘 Masalah Umum

| Masalah | Solusi |
|---|---|
| Halaman kosong | Pakai Live Server / Python / Node.js, jangan klik `index.html` langsung |
| `python: command not found` | Coba `python3` atau pakai VS Code Live Server |
| Styling hilang | Tekan `Ctrl + Shift + R` |
| PWA tidak bisa install | Pakai Chrome/Edge versi terbaru |

---

## 🤝 Butuh Bantuan?

- 📖 [USAGE.md](USAGE.md)
- ❓ [FAQ.md](FAQ.md)
- 🐛 [Buat issue](https://github.com/LAYRAGA-OFFICIAL/hublr/issues)

---

**Dibuat di Indonesia 🇮🇩 oleh LAYRAGA OFFICIAL**
