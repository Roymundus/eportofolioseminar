# 📘 Panduan Kustomisasi E-Portofolio PPG

Struktur file portofolio ini telah dirapikan ke dalam modul-modul terpisah agar Anda dapat dengan sangat mudah menemukan dan mengubah data apa pun tanpa perlu membaca ratusan baris kode.

---

## 🗺️ Peta Lokasi File Data (Di Mana Saya Harus Mengubah...?)

Semua data teks, informasi, dan tautan terletak di dalam folder **`src/data/`**:

| Apa yang Ingin Anda Ubah? | File yang Harus Dibuka | Keterangan Isi |
|---|---|---|
| **Data Diri, Foto, & Visi** | [`src/data/biodata.js`](file:///c:/Users/alpia/OneDrive%20-%20uny.ac.id/Semester%202/Seminar%20Pendidikan%20Profesi%20Guru/Eportofolio-seminar/src/data/biodata.js) | Nama lengkap, NIM, email, sekolah PPL, foto profil, visi pendidikan Indonesia, visi calon guru, 5 komitmen aksi, nilai-nilai dasar, dan semboyan Ki Hadjar Dewantara. |
| **Refleksi 11 Mata Kuliah** | [`src/data/mataKuliah.js`](file:///c:/Users/alpia/OneDrive%20-%20uny.ac.id/Semester%202/Seminar%20Pendidikan%20Profesi%20Guru/Eportofolio-seminar/src/data/mataKuliah.js) | Refleksi 11 MK Semester 1 & 2 lengkap dengan 4 pilar (Connection, Challenge, Concept, Change), nama artefak, alasan pemilihan, dan tautan PDF artefak. |
| **Refleksi Menyeluruh PPG** | [`src/data/refleksiPPG.js`](file:///c:/Users/alpia/OneDrive%20-%20uny.ac.id/Semester%202/Seminar%20Pendidikan%20Profesi%20Guru/Eportofolio-seminar/src/data/refleksiPPG.js) | Narasi pengantar transformasi, 4 fase linimasa PPG, tabel pergeseran pola pikir (*Before vs After*), narasi momen titik balik (*Critical Incident*), dan ikrar profesional. |
| **Karya Inovasi (LK 4 & Artefak)** | [`src/data/karyaInovasi.js`](file:///c:/Users/alpia/OneDrive%20-%20uny.ac.id/Semester%202/Seminar%20Pendidikan%20Profesi%20Guru/Eportofolio-seminar/src/data/karyaInovasi.js) | Karya inovasi utama LK 4 (Berpikir Komputasional TaRL-DUP di SMK N 2 Yk), Sistem Monitoring KBM, Modul Ajar Deep Learning Vokasi, dan PSE Lab Komputer. |
| **Rencana Tindak Lanjut (RTL)** | [`src/data/rencanaTindakLanjut.js`](file:///c:/Users/alpia/OneDrive%20-%20uny.ac.id/Semester%202/Seminar%20Pendidikan%20Profesi%20Guru/Eportofolio-seminar/src/data/rencanaTindakLanjut.js) | Matriks RTL berprinsip SMART untuk jangka pendek (1 tahun), menengah (1-3 tahun), dan panjang (3-5 tahun), serta teks ikrar pengesahan. |

---

## 📂 Struktur Folder Proyek yang Rapi

```text
Eportofolio-seminar/
├── public/
│   └── dokumen/                    # 📄 Berkas PDF asli (bisa dibuka langsung di browser)
│       ├── lk1-identifikasi-diri.pdf
│       ├── lk2-filosofi-pendidikan.pdf
│       ├── lk2-asesmen-dasar.pdf
│       ├── lk2-pembelajaran-sosial-emosional.pdf
│       └── ... (12 berkas PDF LK resmi)
├── dokumen-asli/                   # 🗄️ Arsip berkas Word (.docx) & PDF dari LPTK
│   ├── 1_identifikasi_diri/
│   └── 2_refleksi_mata_kuliah/
├── src/
│   ├── assets/                     # Gambar grafis & ikon statis
│   ├── components/
│   │   ├── layout/                 # Komponen tata letak (Navbar.jsx, Footer.jsx)
│   │   ├── common/                 # Komponen umum (PageHeader.jsx, ScrollToTop.jsx)
│   │   ├── cards/                  # Kartu reusable (CourseCard.jsx, InnovationCard.jsx, RtlCard.jsx)
│   │   └── index.js                # Hub ekspor komponen rapi
│   ├── data/                       # 🌟 DATA UTAMA YANG DAPAT DIEDIT
│   │   ├── biodata.js              # Biodata & Visi (LK 1)
│   │   ├── mataKuliah.js           # Refleksi 11 Mata Kuliah 4C (LK 2)
│   │   ├── refleksiPPG.js          # Refleksi Menyeluruh Program PPG
│   │   ├── karyaInovasi.js         # Karya Inovasi Pendidikan (LK 4)
│   │   ├── rencanaTindakLanjut.js  # Rencana Tindak Lanjut (RTL)
│   │   └── index.js                # Penggabung data terpusat
│   ├── pages/                      # 5 Halaman Utama Aplikasi
│   │   ├── IdentifikasiDiri.jsx
│   │   ├── RefleksiMataKuliah.jsx
│   │   ├── RefleksiPPG.jsx
│   │   ├── KaryaInovasi.jsx
│   │   └── RencanaTindakLanjut.jsx
│   ├── App.jsx                     # Router navigasi
│   ├── index.css                   # Gaya Tailwind CSS & Font Google
│   └── main.jsx
├── README.md
└── package.json
```

---

## 💡 Panduan Cepat Menyesuaikan Konten

### 1. Mengganti Foto Profil
1. Simpan foto Anda di folder `src/assets/foto-profil.jpg` (atau gunakan link URL gambar online).
2. Buka `src/data/biodata.js`.
3. Pada baris `fotoProfil`, ubah nilainya menjadi path foto Anda:
   ```javascript
   fotoProfil: "/src/assets/foto-profil.jpg",
   ```

### 2. Menghubungkan Dokumen PDF Baru
1. Masukkan file PDF Anda ke dalam folder `public/dokumen/` (contoh: `modul-ajar-informatika.pdf`).
2. Buka `src/data/mataKuliah.js` atau `src/data/karyaInovasi.js`.
3. Ubah bagian `tautan`:
   ```javascript
   tautan: "/dokumen/modul-ajar-informatika.pdf"
   ```
4. Ketika penguji mengklik tombol **"Buka Dokumen PDF"**, browser akan langsung membuka berkas PDF tersebut di tab baru.

### 3. Mengubah Teks Refleksi / Pengalaman Belajar
Cukup buka file yang bersangkutan di `src/data/` dan ganti teks di dalam tanda kutip `"..."`. Antarmuka React akan otomatis diperbarui secara instan (*Hot Module Replacement*).

