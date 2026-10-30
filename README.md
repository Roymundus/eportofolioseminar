# 🎓 E-Portofolio Digital Seminar PPG (Pendidikan Profesi Guru)

Aplikasi web modern berbasis **React.js + Tailwind CSS** yang dirancang khusus untuk memenuhi tugas akhir mata kuliah **Seminar Pendidikan Profesi Guru (PPG)** di Universitas Negeri Yogyakarta (UNY).

---

## ⚡ Struktur File Modular & Mudah Dikustomisasi

Semua data telah dipisahkan ke dalam file modular di folder **`src/data/`**:

- 👤 **`src/data/biodata.js`**: Profil, NIM, sekolah mitra PPL, visi Indonesia & visi calon guru, 5 komitmen aksi, nilai-nilai dasar, semboyan KHD.
- 📚 **`src/data/mataKuliah.js`**: Refleksi 11 mata kuliah Semester 1 & 2 berbasis Model 4C (*Connection, Challenge, Concept, Change*) beserta telaah artefak dan tautan PDF langsung.
- ✨ **`src/data/refleksiPPG.js`**: Sintesis 4 fase perjalanan, perbandingan pola pikir (*Mindset Shift: Before vs After*), narasi *Critical Incident* SMK N 2 Yogyakarta, dan ikrar pendidik.
- 💡 **`src/data/karyaInovasi.js`**: Desain Karya Inovatif LK 4 (Media Berpikir Komputasional TaRL & DUP di SMK Negeri 2 Yogyakarta), Proyek Kepemimpinan monitoring KBM, dll.
- 🧭 **`src/data/rencanaTindakLanjut.js`**: Matriks RTL berprinsip SMART untuk jangka pendek (1 tahun), menengah (1-3 tahun), dan panjang (3-5 tahun), serta lembar pengesahan tanda tangan.

> 📖 **Panduan Lengkap Kustomisasi:** Baca selengkapnya di [PANDUAN_KUSTOMISASI.md](./PANDUAN_KUSTOMISASI.md).

---

## 📂 Struktur Proyek

```text
Eportofolio-seminar/
├── public/dokumen/                 # Berkas PDF artefak tugas (bisa dibuka langsung di browser)
├── dokumen-asli/                   # Arsip berkas Word (.docx) & PDF dari LPTK
├── src/
│   ├── components/
│   │   ├── layout/                 # Navbar.jsx, Footer.jsx
│   │   ├── common/                 # PageHeader.jsx, ScrollToTop.jsx
│   │   ├── cards/                  # CourseCard.jsx, InnovationCard.jsx, RtlCard.jsx
│   │   └── index.js                # Hub ekspor komponen rapi
│   ├── data/                       # Data modular portofolio
│   │   ├── biodata.js
│   │   ├── mataKuliah.js
│   │   ├── refleksiPPG.js
│   │   ├── karyaInovasi.js
│   │   ├── rencanaTindakLanjut.js
│   │   └── index.js
│   ├── pages/                      # 5 Halaman Utama Aplikasi
│   │   ├── IdentifikasiDiri.jsx
│   │   ├── RefleksiMataKuliah.jsx
│   │   ├── RefleksiPPG.jsx
│   │   ├── KaryaInovasi.jsx
│   │   └── RencanaTindakLanjut.jsx
│   ├── App.jsx                     # Router navigasi
│   ├── index.css                   # Gaya Tailwind CSS & Font Google
│   └── main.jsx
├── PANDUAN_KUSTOMISASI.md
└── package.json
```

---

## 🚀 Menjalankan Aplikasi di Komputer Lokal

1. Buka terminal di folder project ini:
   ```bash
   npm run dev
   ```
2. Buka peramban (*browser*) pada alamat:
   ```
   http://localhost:5173
   ```

---

## 🖨️ Fitur Cetak / Ekspor ke PDF

- Pada bilah navigasi (Navbar) dan halaman RTL, terdapat tombol **"Cetak / PDF"**.
- Tombol ini otomatis menyembunyikan tombol navigasi dan merapikan tata letak agar portofolio dapat langsung dicetak atau disimpan rapi ke format PDF untuk diserahkan kepada Dosen Pembimbing Lapangan atau Penguji Seminar PPG.
