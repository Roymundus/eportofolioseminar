/**
 * CENTRAL DATA HUB - E-PORTOFOLIO PPG
 * File ini menggabungkan seluruh modul data yang telah dipisah rapi per topik/halaman.
 * 
 * Ingin mengubah data? Buka file spesifik berikut:
 * - src/data/biodata.js            -> Profil, NIM, Visi Indonesia & Guru, 5 Komitmen Aksi
 * - src/data/mataKuliah.js          -> 11 MK Semester 1 & 2 (Model 4C & Analisis Artefak)
 * - src/data/refleksiPPG.js         -> Perjalanan PPG, Mindset Shift, Critical Incident
 * - src/data/karyaInovasi.js        -> Desain Karya Inovatif (LK 4) & Proyek PPL
 * - src/data/rencanaTindakLanjut.js -> Matriks RTL SMART & Ikrar Guru
 */

import { biodata } from "./biodata.js";
import { mataKuliahSemester1, mataKuliahSemester2 } from "./mataKuliah.js";
import { refleksiMenyeluruh } from "./refleksiPPG.js";
import { karyaInovasi } from "./karyaInovasi.js";
import { rencanaTindakLanjut } from "./rencanaTindakLanjut.js";

// Ekspor individual agar halaman dapat mengimpor data spesifik
export {
  biodata,
  mataKuliahSemester1,
  mataKuliahSemester2,
  refleksiMenyeluruh,
  karyaInovasi,
  rencanaTindakLanjut
};

// Objek gabungan kompatibilitas penuh (backward-compatible)
export const portfolioData = {
  biodata,
  mataKuliahSemester1,
  mataKuliahSemester2,
  refleksiMenyeluruh,
  karyaInovasi,
  rencanaTindakLanjut
};

export default portfolioData;

