# 🛠️ Cara Instalasi HUBLR

> Panduan ini dibuat untuk **siapa saja**, termasuk yang **belum pernah pakai Git, terminal, atau GitHub**.
> Ikuti langkahnya pelan-pelan. Kalau ada yang bingung, tanya di [Issues](https://github.com/LAYRAGA-OFFICIAL/hublr/issues).

---

## 📑 Daftar Isi

1. [Pilih Cara Instalasi](#-pilih-cara-instalasi)
2. [Cara 1: Pakai Online (Paling Mudah)](#-cara-1-pakai-online-paling-mudah)
3. [Cara 2: Download ZIP (Tanpa Git)](#-cara-2-download-zip-tanpa-git)
4. [Cara 3: Pakai Git Clone (Untuk Developer)](#-cara-3-pakai-git-clone-untuk-developer)
5. [Cara Menjalankan di Komputer](#-cara-menjalankan-di-komputer)
6. [Cara Jadikan Homepage Browser](#-cara-jadikan-homepage-browser)
7. [Cara Install sebagai Aplikasi (PWA)](#-cara-install-sebagai-aplikasi-pwa)
8. [Masalah Umum & Solusinya](#-masalah-umum--solusinya)
9. [Kamus Istilah](#-kamus-istilah)

---

## 🎯 Pilih Cara Instalasi

Ada 3 cara. Pilih sesuai kebutuhan Anda:

| Cara | Untuk Siapa | Butuh Apa | Tingkat Kesulitan |
|---|---|---|---|
| **Cara 1: Pakai Online** | Semua orang | Browser | ⭐ Sangat Mudah |
| **Cara 2: Download ZIP** | Yang mau coba lokal | Browser + Aplikasi extract | ⭐⭐ Mudah |
| **Cara 3: Git Clone** | Yang mau kontribusi / ngoding | Git + Terminal | ⭐⭐⭐ Menengah |

**Rekomendasi**:
- Baru kenal HUBLR? → **Cara 1**
- Mau coba offline? → **Cara 2**
- Mau ikut kembangkan? → **Cara 3**

---

## 🌐 Cara 1: Pakai Online (Paling Mudah)

**Cocok untuk**: siapa saja, tanpa install apa pun.

### Langkah:

1. Buka browser Anda (Chrome, Edge, Firefox, Brave, Opera, dll)
2. Ketik di address bar:
   ```
   https://layraga-official.github.io/hublr/
   ```
3. Tekan **Enter**
4. Selesai! HUBLR langsung muncul.

### Selesai? Coba:

- Klik kolom search → ketik `github` → tekan Enter
- Klik tombol **ID** (kanan atas) → bahasa berubah ke Inggris
- Klik tombol **🌙** → tema berubah ke terang
- Klik **⚙️** → buka pengaturan

> 💡 **Tips**: Bookmark URL di atas biar mudah dibuka lain kali.

---

## 📦 Cara 2: Download ZIP (Tanpa Git)

**Cocok untuk**: yang mau coba di komputer sendiri, tapi belum kenal Git.

### Langkah 1: Download File

1. Buka: **https://github.com/LAYRAGA-OFFICIAL/hublr**
2. Klik tombol **hijau** bertuliskan **`<> Code`**
3. Pilih **Download ZIP**
4. File `hublr-main.zip` akan terunduh ke folder **Downloads**

### Langkah 2: Ekstrak File

**Windows:**
1. Buka folder **Downloads**
2. Klik kanan `hublr-main.zip` → **Extract All...**
3. Pilih lokasi (misal `C:\Projects\hublr`) → **Extract**

**Mac:**
1. Buka folder **Downloads**
2. Klik dua kali `hublr-main.zip`
3. Folder `hublr-main` akan muncul

**Linux:**
```bash
unzip hublr-main.zip -d ~/Projects/hublr
```

### Langkah 3: Jalankan

Lihat bagian [Cara Menjalankan di Komputer](#-cara-menjalankan-di-komputer) di bawah.

---

## 🔧 Cara 3: Pakai Git Clone (Untuk Developer)

**Cocok untuk**: yang mau ikut kembangkan, kirim Pull Request, atau otomatis update.

### Langkah 1: Install Git

**Windows:**
1. Download dari https://git-scm.com/download/win
2. Jalankan installer → klik **Next** sampai selesai
3. Buka **Command Prompt** → ketik `git --version` → harus muncul versi

**Mac:**
```bash
brew install git
```
Atau download dari https://git-scm.com/download/mac

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install git
```

**Cek instalasi:**
```bash
git --version
```

### Langkah 2: Konfigurasi Git (Sekali Saja)

```bash
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

### Langkah 3: Clone Repo

Buka **Terminal** / **Command Prompt** / **Git Bash**:

```bash
cd C:\Projects
git clone https://github.com/LAYRAGA-OFFICIAL/hublr.git
cd hublr
```

> Kalau di Mac/Linux: `cd ~/Projects` dulu.

### Langkah 4: Jalankan

Lihat bagian di bawah. ⬇️

---

## 💻 Cara Menjalankan di Komputer

> ⚠️ **PENTING**: HUBLR **TIDAK BISA** hanya di-klik dua kali `index.html`-nya.
> Browser akan **memblokir** karena alasan keamanan (CORS).
>
> Anda **WAJIB** pakai server lokal kecil. Tenang, caranya mudah.

### Pilih Salah Satu Cara:

---

### 🐍 Cara A: Pakai Python (Paling Mudah Kalau Sudah Ada Python)

**Cek dulu apakah Python terinstall:**
```bash
python --version
```
atau:
```bash
python3 --version
```

Kalau muncul versi (misal `Python 3.11.0`), berarti sudah ada. Lanjut:

**Masuk ke folder hublr:**
```bash
cd C:\Projects\hublr
```

**Jalankan server:**
```bash
python -m http.server 8000
```
atau (kalau `python` tidak dikenali):
```bash
python3 -m http.server 8000
```

**Buka browser:**
```
http://localhost:8000
```

**Stop server:** tekan `Ctrl + C` di terminal.

---

### 🟢 Cara B: Pakai Node.js (Kalau Sudah Ada Node)

**Cek dulu:**
```bash
node --version
```

Kalau ada, jalankan:

```bash
cd C:\Projects\hublr
npx serve .
```

Atau:
```bash
npx http-server -p 8000
```

Buka: `http://localhost:8000`

---

### 💙 Cara C: Pakai VS Code + Live Server (Paling Ramah Pemula)

**Cocok untuk**: yang belum punya Python/Node, atau ingin cara paling gampang.

**Langkah:**

1. **Download VS Code** (gratis): https://code.visualstudio.com/
2. **Install VS Code** seperti aplikasi biasa
3. Buka VS Code
4. Klik ikon **Extensions** (kotak-kotak di kiri, atau tekan `Ctrl+Shift+X`)
5. Ketik di kotak pencarian: **`Live Server`**
6. Cari yang **paling atas** (publisher: **Ritwick Dey**) → klik **Install**
7. Setelah terinstall:
   - Buka menu **File** → **Open Folder** → pilih folder `hublr`
   - Di panel kiri, cari file **`index.html`**
   - **Klik kanan** file → pilih **Open with Live Server**
8. Browser otomatis terbuka, HUBLR muncul! 🎉

**Stop server**: klik **Port: 5500** di kanan bawah VS Code → **Stop**.

---

### 🐘 Cara D: Pakai PHP (Kalau Sudah Ada PHP)

```bash
cd C:\Projects\hublr
php -S localhost:8000
```

Buka: `http://localhost:8000`

---

### 🧪 Cara E: Pakai Extension Browser (Tanpa Install Apa Pun)

**Chrome / Edge:**

1. Buka Chrome Web Store
2. Cari **"Web Server for Chrome"** (atau **"Web Server"**)
3. Install extension
4. Klik ikon extension → **Choose Folder** → pilih folder `hublr`
5. Klik link `http://127.0.0.1:8887`

**Firefox:**
- Cari extension **"Web Server"** di addons.mozilla.org

---

## 🏠 Cara Jadikan Homepage Browser

Agar HUBLR muncul otomatis setiap buka browser baru.

### Chrome / Edge / Brave / Opera

1. Buka browser
2. Klik ikon **titik tiga (⋮)** kanan atas → **Settings**
3. Cari **On startup**
4. Pilih **Open a specific page or pages**
5. Klik **Add a new page**
6. Tempel URL:
   ```
   https://layraga-official.github.io/hublr/
   ```
7. Klik **Add**
8. Tutup dan buka ulang browser → HUBLR muncul! ✅

### Firefox

1. Buka Firefox
2. Klik menu **☰** kanan atas → **Settings**
3. Pilih **Home**
4. Di **Homepage and new windows**, pilih **Custom URLs**
5. Tempel URL:
   ```
   https://layraga-official.github.io/hublr/
   ```
6. Tutup tab Settings

---

## 📱 Cara Install sebagai Aplikasi (PWA)

PWA = Progressive Web App. HUBLR bisa di-install **seperti aplikasi biasa**, punya ikon sendiri, bisa dibuka tanpa browser.

**Syarat**: pakai Chrome, Edge, atau Brave versi terbaru.

### Langkah:

1. Buka **https://layraga-official.github.io/hublr/**
2. Lihat **address bar** — akan muncul ikon **⊕** atau **monitor dengan panah ke bawah**
3. Klik ikon tersebut
4. Klik **Install**
5. HUBLR akan muncul di:
   - **Windows**: Start Menu
   - **Mac**: Applications / Launchpad
   - **Linux**: Menu aplikasi
6. Buka dari sana — HUBLR terbuka **tanpa browser**

**Bonus**: bisa **offline** setelah pertama kali dibuka!

---

## 🆘 Masalah Umum & Solusinya

### ❌ Halaman kosong / putih saat buka `index.html` langsung

**Penyebab**: browser blokir karena CORS.

**Solusi**: Jangan klik dua kali. Pakai **server lokal** (lihat [Cara Menjalankan di Komputer](#-cara-menjalankan-di-komputer)).

---

### ❌ `python: command not found`

**Penyebab**: Python belum terinstall atau tidak di PATH.

**Solusi**:
- Coba `python3 -m http.server 8000`
- Atau install Python dari https://python.org
- Atau pakai VS Code Live Server (Cara C)

---

### ❌ `npx: command not found`

**Penyebab**: Node.js belum terinstall.

**Solusi**:
- Install Node.js dari https://nodejs.org
- Atau pakai Python (Cara A)
- Atau pakai VS Code Live Server (Cara C)

---

### ❌ Halaman muncul tapi tanpa styling (tanpa warna, tanpa layout)

**Penyebab**: CSS tidak ter-load.

**Solusi**:
1. Tekan `Ctrl + Shift + R` (hard refresh)
2. Cek Console browser (F12) — ada error merah?
3. Pastikan folder `src/css/` ada dan berisi 5 file CSS

---

### ❌ Tombol `ID` / `🌙` / `⚙️` tidak berfungsi

**Penyebab**: JavaScript tidak ter-load.

**Solusi**:
1. Tekan `F12` → tab **Console** → screenshot error-nya
2. Buat [issue baru](https://github.com/LAYRAGA-OFFICIAL/hublr/issues) dengan screenshot

---

### ❌ Tidak bisa install PWA (ikon ⊕ tidak muncul)

**Penyebab**: 
- Browser tidak support PWA
- Akses lewat `http://` bukan `https://`
- File `manifest.json` tidak ter-load

**Solusi**:
- Pakai Chrome/Edge/Brave versi terbaru
- Akses lewat **https://** (GitHub Pages sudah HTTPS)
- Cek Console browser untuk error

---

### ❌ Setelah `git push`, GitHub Actions gagal

**Penyebab**: GitHub Pages belum diaktifkan.

**Solusi**:
1. Buka **Settings → Pages** di repo Anda
2. **Source**: pilih **GitHub Actions**
3. **Save**
4. Buka **Actions** → **Re-run all jobs**

---

## 📖 Kamus Istilah

Buat yang bingung dengan istilah teknis:

| Istilah | Arti Sederhana |
|---|---|
| **Repo** (Repository) | Folder proyek di GitHub |
| **Clone** | Copy repo dari GitHub ke komputer |
| **Fork** | Copy repo orang lain ke akun GitHub Anda |
| **Push** | Kirim perubahan dari komputer ke GitHub |
| **Pull** | Ambil perubahan dari GitHub ke komputer |
| **Commit** | Simpan perubahan dengan pesan |
| **Branch** | Cabang pengembangan (misal `main`) |
| **Terminal** | Aplikasi untuk mengetik perintah |
| **Localhost** | Komputer Anda sendiri (bukan internet) |
| **Server lokal** | Program kecil yang melayani file di komputer |
| **PWA** | Aplikasi web yang bisa di-install seperti app |
| **CORS** | Aturan keamanan browser |
| **ZIP** | File arsip terkompresi |
| **PATH** | Daftar folder tempat sistem mencari program |
| **Node.js** | Program untuk menjalankan JavaScript di luar browser |
| **Python** | Bahasa pemrograman (bisa untuk server lokal) |
| **GitHub Actions** | Robot GitHub yang otomatis jalan saat push |
| **GitHub Pages** | Layanan hosting gratis dari GitHub |

---

## 🎓 Setelah Berhasil Install

Coba fitur-fitur HUBLR:

- 🔍 **Search**: ketik apa saja → Enter
- ⚡ **Shortcut engine**: `gh: react` → langsung GitHub
- 🧮 **Kalkulator**: ketik `2+2` → muncul `= 4`
- ⌨️ **Ctrl+K**: fokus ke search bar
- 🔖 **Bookmark**: klik ➕ untuk tambah
- 🌐 **Ganti bahasa**: klik `ID` / `EN`
- 🌓 **Ganti tema**: klik 🌙 / ☀️

---

## 🤝 Butuh Bantuan?

- 📖 Baca [USAGE.md](USAGE.md) — cara pakai lengkap
- ⚙️ Baca [CONFIGURATION.md](CONFIGURATION.md) — cara kustomisasi
- ❓ Baca [FAQ.md](FAQ.md) — pertanyaan umum
- 🐛 [Buat issue](https://github.com/LAYRAGA-OFFICIAL/hublr/issues/new) — laporkan bug
- 💬 [Diskusi](https://github.com/LAYRAGA-OFFICIAL/hublr/discussions) — tanya jawab

---

## 🎉 Selamat!

Anda sudah berhasil menginstall HUBLR. Selamat menggunakan! 🌀

**Dibuat dengan ❤️ di Indonesia 🇮🇩 oleh LAYRAGA OFFICIAL**
