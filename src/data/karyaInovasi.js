/**
 * DATA KARYA INOVASI PENDIDIKAN (LK 4 & ARTEFAK PPL)
 * Berisi rincian karya inovasi unggulan:
 * 1. Media Pembelajaran Berpikir Komputasional TaRL & DUP di SMK Negeri 2 Yogyakarta (LK 4)
 * 2. Sistem Monitoring Real-Time KBM SMK N 2 Yogyakarta (Proyek Kepemimpinan)
 * 3. Modul Ajar Deep Learning Vokasi (Head, Hand, Heart, Soul)
 * 4. Integrasi PSE & Teknik STOP di Laboratorium Komputer
 */

export const karyaInovasi = [
    {
      id: "inovasi-utama-tarl-dup",
      judul: "Pengembangan Media Pembelajaran Interaktif Berbasis Website pada Materi Berpikir Komputasional dengan Pendekatan TaRL dan Desain Universal untuk Pembelajaran (DUP)",
      kategori: "Media Pembelajaran Interaktif & Digital",
      sasaran: "Murid Kelas X Konsentrasi Keahlian Teknik Pemesinan (X TP 1 dan X TP 3) di SMK Negeri 2 Yogyakarta (36 murid per rombel)",
      mataPelajaran: "Informatika (Materi: Berpikir Komputasional)",
      tanggalRilis: "2025",
      gambar: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=700",
      deskripsiSingkat: "Media pembelajaran digital berbasis website menyerupai kursus online mandiri yang mengintegrasikan alur belajar fleksibel, simulasi interaktif, materi kontekstual bidang Teknik Pemesinan, serta asesmen formatif bertingkat 3 level.",
      masalahYangDipecahkan: "Berdasarkan hasil observasi dan refleksi PPL di SMK Negeri 2 Yogyakarta: Kesenjangan tingkat pemahaman logika dan kesiapan belajar murid; Rendahnya keterkaitan materi dengan kehidupan nyata dan keahlian pemesinan; Tantangan menjaga fokus belajar pada jam pelajaran siang di lab komputer; serta Kebutuhan media simulatif yang fleksibel untuk belajar mandiri.",
      solusiInovasi: [
        "Penyajian Materi Kontekstual: Mengaitkan 4 pilar (Dekomposisi, Pengenalan Pola, Abstraksi, Algoritma) dengan prosedur bengkel pemesinan dan masalah sehari-hari.",
        "Jalur Pembelajaran 3 Level (TaRL): Level 1 (Dasar), Level 2 (Menengah), dan Level 3 (Lanjutan) yang diawali dengan asesmen diagnostik awal.",
        "Aktivitas & Simulasi Interaktif (DUP): Eksplorasi drag-and-drop urutan algoritma, pengelompokan pola, serta variasi multimodal representasi (teks, visual, simulasi).",
        "Asesmen Formatif & Umpan Balik Bertahap: Kuis pada setiap materi dengan pembahasan langsung dan kesempatan mengulang berbasis Growth Mindset."
      ],
      prinsipInovasi: {
        kebaruan: "Rancangan pengalaman belajar Berpikir Komputasional menyerupai kursus digital mandiri yang menggabungkan materi terstruktur, aktivitas interaktif, asesmen bertahap, dan progres belajar dalam satu platform website.",
        kreativitas: "Mengintegrasikan teknologi website dengan prinsip DUP (variasi penyajian multimodal), prinsip TaRL (tiga level kesiapan belajar), dan Growth Mindset (umpan balik konstruktif dan revisi).",
        relevansi: "Materi dikaitkan langsung dengan konteks Teknik Pemesinan (misalnya prosedur kerja mesin bubut/frais, identifikasi pola kerusakan mesin, dan urutan kerja mekanik).",
        kebermanfaatan: "Bagi murid mempermudah pemahaman konsep abstrak dan memfasilitasi kecepatan belajar mandiri; bagi guru mendukung pelaksanaan pembelajaran berdiferensiasi.",
        efektivitas: "Dievaluasi melalui uji kelayakan fungsi, evaluasi pengalaman pengguna (kuesioner skala Likert target > 80% positif), dan evaluasi perubahan hasil belajar (pre-test vs post-test)."
      },
      dampakHasil: "Meningkatkan keterlibatan aktif dan fokus murid di lab komputer, memangkas kebingungan konsep abstrak, dan memberikan fleksibilitas belajar mandiri sesuai kesiapan masing-masing murid.",
      tautanArtefak: {
        dokumenDesain: "#",
        linkWebsite: "#",
        panduanGuru: "#"
      }
    },
    {
      id: "inovasi-proyek-kepemimpinan",
      judul: "Rancang Bangun Sistem Monitoring Real-Time Kegiatan Belajar Mengajar Berbasis Website di SMK Negeri 2 Yogyakarta",
      kategori: "Proyek Kepemimpinan & Sistem Informasi Sekolah",
      sasaran: "Guru, Manajemen Sekolah, dan Peserta Didik SMK Negeri 2 Yogyakarta",
      mataPelajaran: "Proyek Kepemimpinan (Kelompok 3B Kejuruan Informatika & Elektronika)",
      tanggalRilis: "2025",
      gambar: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=700",
      deskripsiSingkat: "Aplikasi web pemantauan keterlaksanaan KBM di ruang kelas dan laboratorium praktikum secara real-time untuk meningkatkan kedisiplinan, koordinasi guru piket, dan transparansi proses belajar.",
      masalahYangDipecahkan: "Pencatatan presensi dan keterlaksanaan KBM di bengkel dan laboratorium SMK yang luas masih bersifat manual berbasis kertas, menyebabkan keterlambatan rekapitulasi data kehadiran dan monitoring KBM.",
      solusiInovasi: [
        "Dashboard interaktif berbasis web untuk input status KBM per jam pelajaran oleh guru mata pelajaran / guru piket.",
        "Fitur monitoring kehadiran guru dan siswa secara langsung dari ruang manajemen kurikulum.",
        "Rekapitulasi otomatis log aktivitas harian kelas dan praktikum bengkel."
      ],
      prinsipInovasi: {
        kebaruan: "Digitalisasi real-time pemantauan KBM terpadu antarbengkel dan laboratorium di SMK Negeri 2 Yogyakarta.",
        kreativitas: "Pemanfaatan arsitektur web modern yang ringan dan dapat diakses dari smartphone maupun PC lab.",
        relevansi: "Solutif bagi manajemen SMK berukuran besar dengan puluhan rombongan belajar.",
        kebermanfaatan: "Mengurangi beban rekapitulasi manual petugas piket dan pimpinan sekolah.",
        efektivitas: "Mempercepat alur pelaporan presensi harian dari hitungan jam menjadi instan real-time."
      },
      dampakHasil: "Meningkatkan efisiensi pelaporan KBM sekolah hingga 70% dan memudahkan manajemen SMK Negeri 2 Yogyakarta mengoptimalkan keterlaksanaan kurikulum.",
      tautanArtefak: {
        proposalProyek: "#",
        laporanAkhir: "#"
      }
    },
    {
      id: "inovasi-modul-ajar-diferensiasi",
      judul: "Modul Ajar Pembelajaran Mendalam (Deep Learning) Berbasis Konsep Head, Hand, Heart, and Soul",
      kategori: "Perangkat Pembelajaran Vokasi",
      sasaran: "Siswa SMK Fase E Konsentrasi Kejuruan Teknik Pemesinan",
      mataPelajaran: "Informatika & Kejuruan Teknik",
      tanggalRilis: "2024",
      gambar: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=700",
      deskripsiSingkat: "Perangkat ajar komprehensif yang mengintegrasikan penalaran kognitif (Head), kecakapan psikomotorik praktikum (Hand), sikap peduli dan etika kerja (Heart), serta kesadaran makna spiritual profesi (Soul).",
      masalahYangDipecahkan: "Pembelajaran vokasi sering terjebak hanya pada keterampilan teknis mekanistik (Hand) tanpa diimbangi penalaran analitis kritis (Head) dan etika kerja profesional (Heart & Soul).",
      solusiInovasi: [
        "Penyusunan alur tujuan pembelajaran berbasis studi kasus nyata industri manufaktur dan IT.",
        "Rubrik asesmen autentik 4 dimensi kompetensi kejuruan secara terpadu.",
        "Lembar refleksi diri berkala di akhir setiap siklus praktikum lab."
      ],
      prinsipInovasi: {
        kebaruan: "Mengintegrasikan aspek 'Head, Hand, Heart, Soul' ke dalam sintaks pembelajaran kejuruan Informatika.",
        kreativitas: "Perumusan rubrik observasi yang menyeimbangkan kecakapan teknis dengan budi pekerti etika kerja.",
        relevansi: "Menjawab kebutuhan dunia kerja dan industri (DUDI) akan karakter profesional lulusan SMK.",
        kebermanfaatan: "Menjadi panduan operasional guru dalam menanamkan nilai-nilai karakter luhur.",
        efektivitas: "Meningkatkan tanggung jawab penggunaan alat lab dan kesadaran K3 siswa."
      },
      dampakHasil: "Menciptakan pembelajaran kejuruan yang humanis, bermakna, dan membekali murid dengan etos kerja profesional yang holistik.",
      tautanArtefak: {
        modulAjarPDF: "#",
        rubrikPenilaian: "#"
      }
    },
    {
      id: "inovasi-pse-lab",
      judul: "Integrasi Pembelajaran Sosial Emosional (PSE) & Teknik STOP dalam Praktikum Laboratorium Komputer",
      kategori: "Pengembangan Iklim & Budaya Positif Kelas",
      sasaran: "Murid Kelas X SMK Negeri 2 Yogyakarta",
      mataPelajaran: "Manajemen Kelas Praktikum Informatika",
      tanggalRilis: "2024",
      gambar: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=700",
      deskripsiSingkat: "Penerapan 5 Kompetensi Sosial Emosional (CASEL) dan rutinitas kesadaran penuh (Mindfulness / STOP) sebelum dan sesudah sesi praktikum komputer untuk mereduksi frustrasi logika coding.",
      masalahYangDipecahkan: "Tingginya tingkat stres, kecemasan, dan hilangnya fokus siswa saat menghadapi error algoritma atau praktikum di jam pelajaran siang.",
      solusiInovasi: [
        "Penerapan 3 menit teknik STOP (Stop, Take a breath, Observe, Proceed) saat siswa mengalami hambatan logika pemrograman.",
        "Pemberian umpan balik konstruktif berbasis Growth Mindset (memuji proses dan strategi, bukan bakat bawaan).",
        "Ruang diskusi reflektif 'Circle of Viewpoints' untuk menghargai perbedaan alternatif solusi teman sebaya."
      ],
      prinsipInovasi: {
        kebaruan: "Penerapan teknik mindfulness (STOP) di laboratorium komputer sekolah vokasi.",
        kreativitas: "Memadukan manajemen emosi dengan resolusi bug coding logika komputasi.",
        relevansi: "Sangat dibutuhkan siswa SMK yang kerap menghadapi tekanan tugas praktikum.",
        kebermanfaatan: "Menurunkan kecemasan murid dan mencegah keputusasaan saat praktikum sulit.",
        efektivitas: "Hasil observasi menunjukkan penurunan insiden frustrasi dan peningkatan daya juang (resilience) murid."
      },
      dampakHasil: "Iklim laboratorium menjadi kondusif, siswa lebih gigih (resilient) menyelesaikan masalah pemrograman, dan kolaborasi antarsiswa meningkat pesat.",
      tautanArtefak: {
        panduanPSE: "#",
        lembarObservasi: "#"
      }
    }
  ];
