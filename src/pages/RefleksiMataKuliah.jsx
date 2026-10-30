import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  HelpCircle, 
  Search,
  Link2,
  AlertCircle,
  Lightbulb,
  RefreshCw,
  ArrowRight,
  FileCheck
} from "lucide-react";
import { PageHeader, CourseCard } from "../components";
import { mataKuliahSemester1, mataKuliahSemester2 } from "../data";

export default function RefleksiMataKuliah() {
  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'sem1' | 'sem2'
  const [searchQuery, setSearchQuery] = useState("");
  const [show4CGuide, setShow4CGuide] = useState(false);

  // Filter courses based on active tab
  const tabFiltered = 
    activeTab === "sem1" 
      ? mataKuliahSemester1 
      : activeTab === "sem2" 
      ? mataKuliahSemester2 
      : [...mataKuliahSemester1, ...mataKuliahSemester2];

  // Filter by search query
  const displayedCourses = tabFiltered.filter((mk) => 
    mk.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mk.kode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (mk.artefak?.nama && mk.artefak.nama.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Page Header */}
      <PageHeader 
        badge="Bagian II • Ringkasan Refleksi Mata Kuliah"
        icon={BookOpen}
        title="Refleksi Pengalaman Belajar Mata Kuliah (LK 2)"
        description="Dokumentasi ringkasan refleksi 11 mata kuliah Semester I dan II berbasis Model 4C (Connection, Challenge, Concept, Change). Setiap mata kuliah dilengkapi lampiran tautan langsung menuju berkas dokumen PDF lengkap."
        breadcrumbs={[
          { label: "Refleksi Mata Kuliah" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-8">
        
        {/* Navigation Tabs, Search & Controls */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl shadow-slate-900/5 border border-slate-200/90 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl w-full lg:w-auto overflow-x-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "all"
                  ? "bg-white text-indigo-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Semua Semester ({mataKuliahSemester1.length + mataKuliahSemester2.length} MK)
            </button>
            <button
              onClick={() => setActiveTab("sem1")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "sem1"
                  ? "bg-white text-indigo-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Semester I ({mataKuliahSemester1.length} MK)
            </button>
            <button
              onClick={() => setActiveTab("sem2")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === "sem2"
                  ? "bg-white text-indigo-700 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Semester II ({mataKuliahSemester2.length} MK)
            </button>
          </div>

          {/* Search bar & Guide toggle */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input 
                type="text"
                placeholder="Cari mata kuliah / artefak..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs rounded-2xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-slate-50 font-medium"
              />
            </div>

            <button
              onClick={() => setShow4CGuide(!show4CGuide)}
              className="flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-2xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition-colors w-full sm:w-auto justify-center shrink-0"
            >
              <HelpCircle className="w-4 h-4 text-indigo-600" />
              <span>{show4CGuide ? "Tutup Panduan" : "Panduan Model 4C"}</span>
            </button>
          </div>

        </div>

        {/* Collapsible 4C Guide Banner */}
        {show4CGuide && (
          <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl animate-in slide-in-from-top-4 duration-200 border border-indigo-900/60">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs uppercase tracking-widest text-indigo-300 font-extrabold">
                Instrumen Refleksi Resmi PPG (LK 2)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Mengenal Kerangka Refleksi Model 4C
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Di website ini disajikan ringkasan intisari dari 4 pilar keterhubungan dan artefak pembelajaran. Dokumen telaah lengkap dapat diunduh langsung pada setiap kartu:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                <span className="text-xs font-bold text-sky-300 tracking-wider flex items-center gap-1.5">
                  <Link2 className="w-4 h-4" /> 1. CONNECTION
                </span>
                <h4 className="text-sm font-bold text-white mt-1">Keterkaitan Peran</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Bagaimana materi perkuliahan terkait dengan peran nyata saya sebagai calon guru profesional.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                <span className="text-xs font-bold text-rose-300 tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" /> 2. CHALLENGE
                </span>
                <h4 className="text-sm font-bold text-white mt-1">Tantangan & Perbedaan</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Materi perkuliahan yang berbeda atau membantah kebiasaan/praktik kaku yang selama ini dilakukan.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                <span className="text-xs font-bold text-amber-300 tracking-wider flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4" /> 3. CONCEPT
                </span>
                <h4 className="text-sm font-bold text-white mt-1">Konsep Kunci</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Prinsip esensial dan teori utama yang wajib dikuasai dan diimplementasikan dalam pembelajaran.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                <span className="text-xs font-bold text-emerald-300 tracking-wider flex items-center gap-1.5">
                  <RefreshCw className="w-4 h-4" /> 4. CHANGE
                </span>
                <h4 className="text-sm font-bold text-white mt-1">Rencana Perubahan</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Komitmen transformasi konkret pada pola pikir dan praktik keguruan di masa mendatang.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Courses List using Modular CourseCard Component */}
        <div className="space-y-8">
          {displayedCourses.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-3xl border border-slate-200 text-slate-500">
              Tidak ditemukan mata kuliah dengan kata kunci "{searchQuery}".
            </div>
          ) : (
            displayedCourses.map((mk) => (
              <CourseCard key={mk.id} mk={mk} />
            ))
          )}
        </div>

        {/* Bottom CTA to Next Page */}
        <div className="mt-12 p-8 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Langkah Selanjutnya
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
              Refleksi Pengalaman Belajar Selama Program PPG
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Cerita perjalanan belajar, perubahan cara pandang saat mengajar di SMK Negeri 2 Yogyakarta, dan momen paling berkesan di kelas.
            </p>
          </div>

          <Link
            to="/refleksi-ppg"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-200 transition-all shrink-0 hover:gap-3"
          >
            <span>Buka Refleksi Program PPG</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

    </div>
  );
}
