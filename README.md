# Finance Tracker - Aplikasi Pencatatan Keuangan Pribadi

Finance Tracker adalah aplikasi web modern untuk mengelola keuangan pribadi dengan antarmuka yang minimalis dan intuitif. Aplikasi ini membantu Anda melacak pemasukan dan pengeluaran dengan visualisasi data yang informatif.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

## ✨ Fitur

- 📊 **Dashboard Keuangan** - Ringkasan saldo, pemasukan, dan pengeluaran
- 💰 **Pencatatan Transaksi** - Tambah transaksi pemasukan dan pengeluaran
- 🗂️ **Kategori Transaksi** - Organisir transaksi berdasarkan kategori
- 📈 **Grafik Interaktif** - Visualisasi pengeluaran dengan pie chart
- 🔍 **Filter Transaksi** - Filter berdasarkan jenis transaksi
- 💾 **Penyimpanan Lokal** - Data tersimpan di browser Anda
- 📱 **Responsif** - Bekerja optimal di desktop dan mobile
- 🎨 **Desain Minimalis** - Antarmuka yang bersih dan modern

## 🚀 Teknologi

- **React** - Framework UI
- **Recharts** - Library untuk chart dan grafik
- **Lucide React** - Icon library
- **CSS3** - Styling dengan gradient dan modern layout
- **Local Storage** - Penyimpanan data di browser

## 📦 Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/usamahdhaqi/finance-tracker-app.git
   cd finance-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan aplikasi:
   ```bash
   npm start
   ```

4. Buka browser dan akses `http://localhost:3000`

## 🎯 Cara Penggunaan

### Menambah Transaksi
1. Buka tab **"Tambah"**
2. Pilih jenis transaksi (Pemasukan/Pengeluaran)
3. Pilih kategori
4. Masukkan deskripsi transaksi
5. Masukkan jumlah nominal
6. Klik **"Tambah Transaksi"**

### Melihat Ringkasan Keuangan
Buka tab **"Dashboard"** untuk melihat:
- Saldo terkini
- Total pemasukan
- Total pengeluaran
- Grafik pengeluaran per kategori
- Transaksi terbaru

### Mengelola Transaksi
Buka tab **"Transaksi"** untuk:
- Melihat semua transaksi
- Menghapus transaksi
- Memfilter berdasarkan jenis transaksi

## 🏗️ Struktur Project

```
src/
├── components/
│   ├── Dashboard.js          # Komponen dashboard
│   ├── ExpenseChart.js       # Komponen chart pengeluaran
│   ├── FinancialSummary.js   # Ringkasan keuangan
│   ├── TransactionForm.js    # Form tambah transaksi
│   └── TransactionList.js    # Daftar transaksi
├── utils/
│   └── storage.js            # Fungsi penyimpanan lokal
├── styles/
│   └── App.css               # Styling aplikasi
└── App.js                    # Komponen utama
```

## 🔧 Konfigurasi
Aplikasi ini menggunakan **localStorage** untuk menyimpan data. Data akan tetap tersimpan meskipun browser ditutup.

## 🌐 Deployment
Aplikasi dapat di-deploy ke berbagai platform:

### Vercel
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Jalankan:
   ```bash
   vercel
   ```
3. Ikuti prompt yang muncul

### Netlify
1. Build project:
   ```bash
   npm run build
   ```
2. Drag folder `build` ke **Netlify Drop**

### GitHub Pages
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Tambah di `package.json`:
   ```json
   "homepage": "https://username.github.io/finance-tracker",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

## 🤝 Berkontribusi

Kontribusi selalu diterima! Silakan lakukan:
1. Fork project ini
2. Buat branch fitur baru:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit perubahan:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push ke branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Buat Pull Request

## 📄 Lisensi

Distributed under the MIT License. Lihat file [LICENSE](LICENSE) untuk lebih detail.

## 👥 Kontak

Nama Anda - [@usmhdhylhq](https://instagram.com/usmhdhylhq) - usamahdhaqi@gmail.com

Link Project: [https://github.com/usamahdhaqi/finance-tracker-app](https://github.com/usamahdhaqi/finance-tracker-app)

## 🙌 Penghargaan

- [React](https://react.dev/)
- [Recharts](https://recharts.org/)
- [Lucide](https://lucide.dev/)

---

⭐️ Jika project ini membantu Anda, jangan lupa beri **bintang** di GitHub!
