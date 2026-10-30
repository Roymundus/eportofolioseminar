/**
 * DATA KARYA INOVASI PENDIDIKAN (OTENTIK LEMBAR KERJA 4 / LK 4)
 * Penulis: Alpian Roymundus Siringo-ringo, S.Kom. (NIM: 25105260634)
 * Disajikan dalam format ringkasan eksekutif yang padat, rapi, dan sistematis.
 */

export const inovasiUtamaLK4 = {
  id: "inovasi-utama-tarl-dup",
  namaKarya: "Pengembangan Media Pembelajaran Interaktif Berbasis Website pada Materi Berpikir Komputasional dengan Pendekatan Teaching at the Right Level (TaRL) dan Desain Universal untuk Pembelajaran (DUP)",
  judulSingkat: "Media Web Interaktif Berpikir Komputasional (PikirLab)",
  kategori: "Media Pembelajaran Digital Interaktif",
  sasaran: "Murid Kelas X Konsentrasi Keahlian Teknik Pemesinan (X TP 1 dan X TP 3) di SMK Negeri 2 Yogyakarta (36 murid per rombel)",
  mataPelajaran: "Informatika (Materi: Berpikir Komputasional)",
  tahun: "2025/2026",
  berkasAsliPdf: "/dokumen/lk4-karya-inovasi.pdf",
  linkPrototipe: "https://pikirlab.vercel.app/",
  gambar: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=700",

  // 1. Identifikasi Kebutuhan & Tantangan (4 Poin Ringkas)
  identifikasiTantangan: [
    {
      nomor: "01",
      judul: "Kesenjangan Kesiapan Belajar",
      deskripsi: "Dalam rombel 36 murid, ada keragaman kemampuan awal logika. Model ajar seragam menyulitkan murid yang butuh waktu lebih lama, dan menghambat murid yang butuh tantangan lanjutan.",
      tag: "Heterogenitas 36 Murid"
    },
    {
      nomor: "02",
      judul: "Rendahnya Relevansi Konteks",
      deskripsi: "Konsep Berpikir Komputasional terasa rumit dan abstrak bila hanya berupa teori. Murid membutuhkan bahasa sederhana dan analogi nyata bengkel Teknik Pemesinan.",
      tag: "Konteks Vokasi Mesin"
    },
    {
      nomor: "03",
      judul: "Tantangan Fokus Jam Siang Lab",
      deskripsi: "Pembelajaran di lab komputer pada jam siang (12.30 - 15.00) rawan memicu kejenuhan dan distraksi gawai jika tidak ada media interaktif yang eksploratif.",
      tag: "Siasat Jam Siang"
    },
    {
      nomor: "04",
      judul: "Kebutuhan Media Belajar Mandiri",
      deskripsi: "Dibutuhkan platform digital menyerupai kursus mandiri dengan alur terstruktur, fleksibilitas mengulang, serta umpan balik formatif bertahap.",
      tag: "Mandiri & Fleksibel"
    }
  ],

  // 2. 4 Komponen Utama Website Inovasi
  komponenWebsite: [
    {
      judul: "Materi 4 Fondasi Komputasi",
      deskripsi: "Penyajian dekomposisi, pengenalan pola, abstraksi, dan algoritma menggunakan bahasa sederhana, ilustrasi, dan contoh nyata bengkel pemesinan."
    },
    {
      judul: "Aktivitas & Simulasi Interaktif",
      deskripsi: "Eksplorasi drag-and-drop urutan algoritma, pengelompokan pola, dan uji coba alternatif solusi agar murid belajar melalui pengalaman langsung."
    },
    {
      judul: "Asesmen Formatif & Umpan Balik",
      deskripsi: "Latihan soal bertahap dilengkapi kunci pembahasan langsung dan petunjuk perbaikan tanpa takut salah (berbasis Growth Mindset)."
    },
    {
      judul: "Jalur Belajar & Progres Mandiri",
      deskripsi: "Dashboard pelacak progres penyelesaian modul, status pemahaman, dan rekomendasi level lanjutan sesuai kesiapan belajar murid."
    }
  ],

  // 3. Penerapan Pendekatan TaRL & DUP
  pendekatanPedagogis: {
    tarl: {
      judul: "Teaching at the Right Level (TaRL)",
      deskripsi: "Diawali asesmen diagnostik singkat, lalu murid diarahkan ke salah satu dari 3 tingkat tantangan belajar:",
      levels: [
        { level: "Level 1 (Dasar)", fokus: "Pengenalan dan pemahaman konsep dasar melalui contoh sederhana aktivitas sehari-hari." },
        { level: "Level 2 (Menengah)", fokus: "Penerapan konsep logika terstruktur dan pemecahan masalah dengan langkah sistematis." },
        { level: "Level 3 (Lanjutan)", fokus: "Analisis masalah kompleks, evaluasi alternatif solusi, dan optimasi algoritma bersyarat." }
      ]
    },
    dup: {
      judul: "Desain Universal untuk Pembelajaran (DUP / UDL)",
      deskripsi: "Menyediakan variasi multimodal penyajian materi (teks, visual, ilustrasi simulatif) dan fleksibilitas bentuk asesmen agar setiap murid dapat memahami materi dengan cara terbaiknya."
    },
    growthMindset: {
      judul: "Pola Pikir Bertumbuh (Growth Mindset)",
      deskripsi: "Menjadikan kekeliruan saat mengerjakan kuis/simulasi sebagai kesempatan belajar dan mengulang, bukan sebagai vonis ketidakmampuan."
    }
  },

  // 4. 5 Prinsip Inovasi Pendidikan
  prinsipInovasi: [
    {
      prinsip: "Kebaruan (Novelty)",
      ringkasan: "Kursus digital mandiri yang mengintegrasikan materi bertingkat, aktivitas simulatif, dan asesmen formatif dalam satu platform web mandiri."
    },
    {
      prinsip: "Kreativitas",
      ringkasan: "Memadukan teknologi web dengan sintaks TaRL (3 level bertingkat), DUP (multimodal), dan Growth Mindset (umpan balik konstruktif)."
    },
    {
      prinsip: "Relevansi & Kontekstualitas",
      ringkasan: "Mengaitkan materi komputasi dengan prosedur membubut, identifikasi kerusakan mesin frais, dan pemecahan masalah nyata kejuruan."
    },
    {
      prinsip: "Kebermanfaatan (Usefulness)",
      ringkasan: "Memfasilitasi murid belajar sesuai ritme pribadinya; membantu guru mengelola diferensiasi kelas secara efektif dan terukur."
    },
    {
      prinsip: "Efektivitas Berbasis Bukti",
      ringkasan: "Dievaluasi melalui uji kelayakan sistem, kuesioner pengguna (target > 80% positif), dan analisis pre-test vs post-test."
    }
  ],

  // 5. Alur 5 Tahap Implementasi di SMK Negeri 2 Yogyakarta
  tahapImplementasi: [
    { tahap: "1. Persiapan & Validasi", uraian: "Penyelesaian rancangan web, pengujian navigasi, keterbacaan, dan verifikasi jaringan lab sekolah." },
    { tahap: "2. Asesmen Diagnostik", uraian: "Pengenalan alur belajar website dan pelaksanaan asesmen diagnostik singkat untuk rekomendasi level awal." },
    { tahap: "3. Eksplorasi Mandiri", uraian: "Murid mempelajari materi bertahap, mencoba simulasi, dan guru mendampingi sebagai fasilitator." },
    { tahap: "4. Penguatan & Pengayaan", uraian: "Murid yang belum tuntas diarahkan mengulang materi; murid yang tuntas melanjutkan ke tantangan lanjutan." },
    { tahap: "5. Refleksi & Umpan Balik", uraian: "Refleksi bersama mengenai manfaat Berpikir Komputasional dan pengisian kuesioner evaluasi website." }
  ],

  // 6. Rencana Evaluasi Keberhasilan
  rencanaEvaluasi: [
    { fokus: "Kelayakan & Fungsi Sistem", metode: "Pengujian fungsionalitas navigasi, input interaktif, dan akurasi skor asesmen formatif." },
    { fokus: "Pengalaman Pengguna (UX)", metode: "Kuesioner skala Likert (kemudahan, kejelasan bahasa, tampilan) dengan target sekurang-kurangnya 80% positif." },
    { fokus: "Peningkatan Hasil Belajar", metode: "Komparasi skor asesmen sebelum (pre-test) dan sesudah (post-test) penggunaan website pembelajaran." }
  ]
};

// Daftar Karya Inovasi untuk Tampilan Showcase
export const karyaInovasi = [
  inovasiUtamaLK4,
  {
    id: "inovasi-proyek-kepemimpinan",
    namaKarya: "Rancang Bangun Sistem Monitoring Real-Time KBM Berbasis Website di SMK Negeri 2 Yogyakarta",
    judulSingkat: "Sistem Monitoring KBM Sekolah",
    kategori: "Proyek Kepemimpinan & Sistem Informasi",
    sasaran: "Warga Sekolah SMK Negeri 2 Yogyakarta (Guru Piket, Manajemen, Siswa)",
    mataPelajaran: "Proyek Kepemimpinan Kelompok 3B",
    tahun: "2025/2026",
    gambar: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=700",
    deskripsiSingkat: "Digitalisasi pemantauan keterlaksanaan KBM kelas dan bengkel secara real-time untuk mempercepat rekapitulasi guru piket dan transparansi proses belajar.",
    identifikasiTantangan: [
      { nomor: "01", judul: "Pencatatan Presensi Manual", deskripsi: "Rekapitulasi kertas antar-bengkel yang luas membutuhkan waktu lama.", tag: "Efisiensi Waktu" }
    ],
    prinsipInovasi: [
      { prinsip: "Kebaruan", ringkasan: "Monitoring KBM multi-bengkel secara real-time berbasis web responsif." },
      { prinsip: "Kebermanfaatan", ringkasan: "Memangkas waktu rekapitulasi guru piket dari harian menjadi hitungan detik." }
    ]
  }
  
];

export default { inovasiUtamaLK4, karyaInovasi };
