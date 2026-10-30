import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Lightbulb, 
  ExternalLink, 
  ArrowRight, 
  Eye, 
  X,
  Award
} from "lucide-react";
import { PageHeader, InnovationCard } from "../components";
import { karyaInovasi } from "../data";

export default function KaryaInovasi() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Extract unique categories
  const categories = ["all", ...new Set(karyaInovasi.map((item) => item.kategori))];

  // Filter items
  const filteredItems = selectedCategory === "all" 
    ? karyaInovasi 
    : karyaInovasi.filter((item) => item.kategori === selectedCategory);

  // The flagship LK 4 item
  const flagshipItem = karyaInovasi[0];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Page Header */}
      <PageHeader 
        badge="Bagian IV • Desain Karya Inovatif (LK 4)"
        icon={Lightbulb}
        title="Karya Inovasi Pendidikan"
        description="Dokumentasi karya inovasi pedagogis berbasis riset dan praktik lapangan (PPL) di SMK Negeri 2 Yogyakarta, berorientasi Teaching at the Right Level (TaRL), Desain Universal untuk Pembelajaran (DUP), dan integrasi teknologi digital."
        breadcrumbs={[
          { label: "Karya Inovasi" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        
        {/* 1. HERO BANNER: KARYA UNGGULAN (LK 4) */}
        {flagshipItem && (
          <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-indigo-800/50">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Karya Inovasi Utama (Lembar Kerja 4 PPG)
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-indigo-200">
                  SMK Negeri 2 Yogyakarta • Kelas X TP 1 & X TP 3
                </span>
              </div>

              <div className="space-y-3 max-w-4xl">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  {flagshipItem.judul}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {flagshipItem.deskripsiSingkat}
                </p>
              </div>

              {/* 5 Principles of Innovation Pills */}
              <div className="pt-2">
                <span className="block text-xs uppercase tracking-wider text-indigo-300 font-bold mb-3">
                  5 Prinsip Inovasi Pendidikan yang Diimplementasikan:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="text-xs font-bold text-amber-300">1. Kebaruan</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Kursus web mandiri terintegrasi TaRL & DUP</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="text-xs font-bold text-sky-300">2. Kreativitas</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Simulasi interaktif & Growth Mindset</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="text-xs font-bold text-emerald-300">3. Relevansi</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Konteks nyata bengkel Teknik Pemesinan</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="text-xs font-bold text-purple-300">4. Kebermanfaatan</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Fleksibilitas belajar sesuai kecepatan murid</p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs">
                    <span className="text-xs font-bold text-rose-300">5. Efektivitas</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">Evaluasi pre/post test & kuesioner pengguna</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveModalItem(flagshipItem)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>Buka Uraian Lengkap LK 4</span>
                </button>
                <button
                  onClick={() => {
                    alert("Prototipe Website Pembelajaran Berpikir Komputasional siap ditautkan ke URL hosting Anda.");
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/10 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Pratinjau Prototipe Website</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* 2. DAFTAR SELURUH KARYA INOVASI */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Portofolio Praktik Baik
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
                Karya Inovasi Pembelajaran & Proyek Kepemimpinan
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 overflow-x-auto shadow-2xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-indigo-600 text-white shadow-2xs"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cat === "all" ? "Semua Karya" : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <InnovationCard 
                key={item.id} 
                item={item} 
                onSelect={(selected) => setActiveModalItem(selected)} 
              />
            ))}
          </div>
        </div>

        {/* 3. BOTTOM CTA TO RTL */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Langkah Selanjutnya
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
              Rencana Tindak Lanjut (RTL) Pasca PPG
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Rencana aksi pengembangan keprofesian berkelanjutan (PKB) guru kejuruan Informatika di sekolah penempatan.
            </p>
          </div>

          <Link
            to="/rencana-tindak-lanjut"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-200 transition-all shrink-0 hover:gap-3"
          >
            <span>Buka Rencana Tindak Lanjut</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Modal Detail Uraian LK 4 */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 text-indigo-800">
                  {activeModalItem.kategori}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
                  {activeModalItem.judul}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Sasaran: {activeModalItem.sasaran}
                </p>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <div>
                <h5 className="font-bold text-slate-900 uppercase tracking-wide">
                  Deskripsi Lengkap Karya
                </h5>
                <p className="mt-1">{activeModalItem.deskripsiSingkat}</p>
              </div>

              <div>
                <h5 className="font-bold text-rose-700 uppercase tracking-wide">
                  Identifikasi Kebutuhan & Tantangan Pembelajaran
                </h5>
                <p className="mt-1 bg-rose-50 p-3.5 rounded-2xl border border-rose-200 text-rose-950">
                  {activeModalItem.masalahYangDipecahkan}
                </p>
              </div>

              <div>
                <h5 className="font-bold text-indigo-700 uppercase tracking-wide">
                  Perumusan Gagasan & Solusi Inovatif
                </h5>
                <ul className="mt-1 list-disc list-inside space-y-1 bg-indigo-50 p-3.5 rounded-2xl border border-indigo-200 text-indigo-950">
                  {activeModalItem.solusiInovasi.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>

              {activeModalItem.prinsipInovasi && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h5 className="font-bold text-slate-900 uppercase tracking-wide text-xs">
                    Penerapan Prinsip Inovasi Pendidikan:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <strong className="text-slate-800">Kebaruan (Novelty):</strong>
                      <p className="text-slate-600">{activeModalItem.prinsipInovasi.kebaruan}</p>
                    </div>
                    <div>
                      <strong className="text-slate-800">Kreativitas:</strong>
                      <p className="text-slate-600">{activeModalItem.prinsipInovasi.kreativitas}</p>
                    </div>
                    <div>
                      <strong className="text-slate-800">Relevansi & Kontekstual:</strong>
                      <p className="text-slate-600">{activeModalItem.prinsipInovasi.relevansi}</p>
                    </div>
                    <div>
                      <strong className="text-slate-800">Kebermanfaatan:</strong>
                      <p className="text-slate-600">{activeModalItem.prinsipInovasi.kebermanfaatan}</p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <h5 className="font-bold text-emerald-700 uppercase tracking-wide">
                  Dampak Pembelajaran & Hasil Evaluasi
                </h5>
                <p className="mt-1 bg-emerald-50 p-3.5 rounded-2xl border border-emerald-200 text-emerald-950">
                  {activeModalItem.dampakHasil}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  alert(`Tautan berkas dokumen siap dihubungkan ke Google Drive / repositori tugas.`);
                }}
                className="px-5 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-xs"
              >
                Akses Berkas Artefak
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
