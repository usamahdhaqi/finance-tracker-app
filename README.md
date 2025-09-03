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
git clone https://github.com/username/finance-tracker.git
cd finance-tracker

2. Install dependencies:
```bash
npm install

3. Jalankan aplikasi:
```bash
npm start

4. Buka browser dan akses http://localhost:3000

## 🎯 Cara Penggunaan
Menambah Transaksi
Buka tab "Tambah"

Pilih jenis transaksi (Pemasukan/Pengeluaran)

Pilih kategori

Masukkan deskripsi transaksi

Masukkan jumlah nominal

Klik "Tambah Transaksi"

Melihat Ringkasan Keuangan
Buka tab "Dashboard" untuk melihat:

Saldo terkini

Total pemasukan

Total pengeluaran

Grafik pengeluaran per kategori

Transaksi terbaru

Mengelola Transaksi
Buka tab "Transaksi" untuk:

Melihat semua transaksi

Menghapus transaksi

Memfilter berdasarkan jenis transaksi

## 🏗️ Struktur Project
src/
├── components/
│   ├── Dashboard.js          # Komponen dashboard
│   ├── ExpenseChart.js       # Komponen chart pengeluaran
│   ├── FinancialSummary.js   # Ringkasan keuangan
│   ├── TransactionForm.js    # Form tambah transaksi
│   └── TransactionList.js    # Daftar transaksi
├── utils/
│   └── storage.js           # Fungsi penyimpanan lokal
├── styles/
│   └── App.css              # Styling aplikasi
└── App.js                   # Komponen utama

🔧 Konfigurasi
Aplikasi ini menggunakan localStorage untuk menyimpan data. Data akan tetap tersimpan meskipun browser ditutup.

🌐 Deployment
Aplikasi dapat di-deploy ke berbagai platform:

Vercel
Install Vercel CLI: npm i -g vercel

Jalankan: vercel

Follow prompt yang muncul

Netlify
Build project: npm run build

Drag folder build ke Netlify Drop

GitHub Pages
Install gh-pages: npm install --save-dev gh-pages

Tambah di package.json:

json
"homepage": "https://username.github.io/finance-tracker",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Deploy: npm run deploy

🤝 Berkontribusi
Kontribusi selalu diterima! Silakan lakukan:

Fork project ini

Buat branch fitur baru (git checkout -b feature/AmazingFeature)

Commit perubahan (git commit -m 'Add some AmazingFeature')

Push ke branch (git push origin feature/AmazingFeature)

Buat Pull Request

📄 Lisensi
Distributed under the MIT License. Lihat LICENSE untuk lebih detail.

👥 Kontak
Nama Anda - @twitter_anda - email@example.com

Link Project: https://github.com/username/finance-tracker

🙌 Penghargaan
React

Recharts

Lucide

⭐️ Jika project ini membantu Anda, jangan lupa beri bintang di GitHub!

text

Simpan konten di atas dalam file dengan nama `README.md` di root folder project Anda. File README.md ini memberikan informasi lengkap tentang project finance tracker Anda, termasuk fitur, cara instalasi, cara penggunaan, dan informasi lainnya yang berguna untuk orang yang ingin memahami atau berkontribusi pada project Anda.