import React from "react";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Flame, 
  Heart, 
  Quote, 
  Award,
  FileCheck,
  ExternalLink,
  Target,
  Compass,
  Users,
  Layers,
  Smile,
  BookOpen,
  Wrench,
  Clock
} from "lucide-react";
import { PageHeader } from "../components";
import { refleksiMenyeluruh } from "../data";

export default function RefleksiPPG() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* Page Header */}
      <PageHeader 
        badge="Bagian III • Lembar Kerja 3 (LK 3)"
        icon={Sparkles}
        title="Refleksi Pengalaman Belajar Selama Mengikuti PPG"
        description="Dokumentasi refleksi autentik pengalaman perkuliahan di LPTK UNY dan praktik mengajar (PPL) di SMK Negeri 2 Yogyakarta, disusun berdasarkan Lembar Kerja 3 (LK 3) menggunakan bahasa yang mengalir dan membumi."
        breadcrumbs={[
          { label: "Refleksi Program PPG (LK 3)" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        
        {/* 1. KARTU PENGANTAR UTAMA (LK 3) & TOMBOL DOWNLOAD PDF */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl shadow-slate-900/5 border border-slate-200/90 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  <Award className="w-3.5 h-3.5" />
                  Lembar Kerja Resmi PPG
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                  SMK Negeri 2 Yogyakarta • Kelas X Teknik Pemesinan
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {refleksiMenyeluruh.judul}
              </h2>
            </div>

            {refleksiMenyeluruh.berkasAsliPdf && (
              <a
                href={refleksiMenyeluruh.berkasAsliPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                <FileCheck className="w-4 h-4 text-white" />
                <span>Buka Berkas Asli LK 3 (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-200" />
              </a>
            )}
          </div>

          <div className="pt-6">
            <p className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              {refleksiMenyeluruh.pengantar}
            </p>
          </div>
        </div>

        {/* 2. PERTANYAAN 1 LK 3: BAGAIMANA SEHARUSNYA PENDIDIKAN DI INDONESIA? */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-xs uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Pertanyaan 1 • Lembar Kerja 3</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {refleksiMenyeluruh.visiPendidikanIndonesia.pertanyaan}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {refleksiMenyeluruh.visiPendidikanIndonesia.deskripsiUmum}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {refleksiMenyeluruh.visiPendidikanIndonesia.prinsipUtama.map((prinsip, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-b from-slate-50 to-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                      #{prinsip.nomor}
                    </span>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/70">
                      Prinsip Utama
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {prinsip.judul}
                  </h4>

                  <div className="p-3 rounded-xl bg-indigo-50/60 border border-indigo-100 text-xs font-semibold text-indigo-900">
                    💡 {prinsip.poinPenting}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prinsip.uraian}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-500">
                  Konteks: SMK Negeri 2 Yogyakarta (Kelas X TP 1 & X TP 3)
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. PERTANYAAN 2 LK 3: APA SAJA YANG DAPAT DILAKUKAN UNTUK MENJADI GURU PROFESIONAL? */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-xs uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Pertanyaan 2 • Lembar Kerja 3</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {refleksiMenyeluruh.langkahGuruProfesional.pertanyaan}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {refleksiMenyeluruh.langkahGuruProfesional.deskripsiUmum}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {refleksiMenyeluruh.langkahGuruProfesional.langkahKonkret.map((langkah, idx) => {
              const icons = [BookOpen, Smile, Wrench];
              const IconComp = icons[idx % icons.length];

              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600 block">
                        Langkah #{langkah.nomor}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 leading-snug">
                        {langkah.judul}
                      </h4>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] font-medium text-slate-700">
                      🎯 {langkah.fokus}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {langkah.uraian}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-indigo-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Komitmen Aksi Teruji</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. MOMEN TITIK BALIK (CRITICAL INCIDENT: MESIN BUBUT DI SMK NEGERI 2 YOGYAKARTA) */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-indigo-900/60">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30">
                <Flame className="w-5 h-5" />
              </span>
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
                Momen Titik Balik di Lapangan (Critical Incident)
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {refleksiMenyeluruh.criticalIncident.judul}
            </h3>

            <div className="relative pl-6 border-l-4 border-amber-400 py-2 bg-white/5 rounded-r-2xl p-4">
              <Quote className="w-8 h-8 text-amber-400/30 absolute -top-3 -left-3 pointer-events-none" />
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                "{refleksiMenyeluruh.criticalIncident.cerita}"
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 flex items-center gap-3">
              <Heart className="w-5 h-5 text-rose-400 shrink-0" />
              <p className="text-xs sm:text-sm text-slate-200">
                Bukti nyata bahwa mengajar murid SMK bukan sekadar bicara rumus di depan papan tulis, melainkan bagaimana kita bisa menyambungkannya dengan dunia kejuruan yang mereka tekuni setiap hari.
              </p>
            </div>
          </div>
        </div>

        {/* 5. KOMPARASI SUDUT PANDANG: DULU VS SEKARANG */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
              Perubahan Pola Pikir
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Dulu vs Sekarang: Cara Pandang Saya Sebagai Guru
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Perbedaan nyata cara pandang saya sebelum menempuh PPG dan setelah terjun mengajar langsung di SMK Negeri 2 Yogyakarta:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {refleksiMenyeluruh.perubahanMindset.map((item, idx) => (
              <div 
                key={idx}
                className="rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="bg-gradient-to-r from-slate-100 to-indigo-50/40 p-4 border-b border-slate-200 flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {item.aspek}
                  </h4>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white text-indigo-700 border border-slate-200">
                    Poin #{idx + 1}
                  </span>
                </div>

                <div className="p-6 space-y-4 bg-white">
                  {/* Dulu */}
                  <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-wide mb-1">
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Dulu (Sebelum PPG)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-rose-950 leading-relaxed">
                      {item.sebelum}
                    </p>
                  </div>

                  {/* Sekarang */}
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wide mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Sekarang (Setelah Praktik Mengajar)</span>
                    </div>
                    <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
                      {item.sesudah}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. RENCANA TINDAK LANJUT AWAL KARIR (3 PRIORITAS 1-3 TAHUN LK 3) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/90 space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Indikator Rencana Tindak Lanjut • Lembar Kerja 3</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Tiga Hal Utama Saat Memulai Karir Sebagai Guru (Tahun 1 - 3)
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {refleksiMenyeluruh.tigaRencanaAwal.pengantar}
            </p>
          </div>

          <div className="space-y-4">
            {refleksiMenyeluruh.tigaRencanaAwal.prioritas.map((p, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-indigo-300 hover:bg-white transition-all duration-200 flex flex-col md:flex-row md:items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  0{p.nomor}
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-slate-900">
                    {p.judul}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.uraian}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. BOTTOM NAVIGATION CTA */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
              Langkah Selanjutnya
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              Karya Inovasi Pendidikan (LK 4)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Pengembangan Media Pembelajaran Berbasis Website Berpikir Komputasional (TaRL & DUP) di SMK Negeri 2 Yogyakarta.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/karya-inovasi"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-200 transition-all hover:gap-3"
            >
              <span>Buka Karya Inovasi (LK 4)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/rencana-tindak-lanjut"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors"
            >
              <span>Matriks RTL</span>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
