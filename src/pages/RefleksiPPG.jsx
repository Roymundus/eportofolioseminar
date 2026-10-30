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
  School,
  Building2,
  Cpu,
  BookOpen,
  Smile,
  Wrench,
  Clock,
  Lightbulb,
  Check,
  Zap,
  Gamepad2
} from "lucide-react";
import { PageHeader } from "../components";
import { refleksiMenyeluruh } from "../data";

const iconMap = {
  School,
  Building2,
  Users,
  Cpu
};

export default function RefleksiPPG() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* 1. Page Header */}
      <PageHeader 
        badge="Bagian III • Lembar Kerja 3 (LK 3)"
        icon={Sparkles}
        title="Ringkasan Refleksi Pengalaman Belajar PPG"
        description="Ringkasan intisari refleksi autentik selama perkuliahan di LPTK UNY dan PPL di SMK Negeri 2 Yogyakarta berdasarkan naskah revisi Lembar Kerja 3 (LK 3). Disajikan padat, interaktif, dan langsung pada esensi."
        breadcrumbs={[
          { label: "Refleksi Program PPG (LK 3)" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-10">
        
        {/* 2. Ringkasan Eksekutif & Dokumen Asli Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-900/5 border border-slate-200/90 relative overflow-hidden">
          
          {/* Top Bar: Title & Direct PDF Action */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  <Award className="w-3.5 h-3.5" />
                  Lembar Kerja 3 Resmi
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  Ringkasan Refleksi Singkat
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
                {refleksiMenyeluruh.judul}
              </h2>
            </div>

            {refleksiMenyeluruh.berkasAsliPdf && (
              <a
                href={refleksiMenyeluruh.berkasAsliPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95 shrink-0"
              >
                <FileCheck className="w-4 h-4 text-white" />
                <span>Buka Berkas Asli LK 3 (PDF)</span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-200" />
              </a>
            )}
          </div>

          {/* Quick Context Chips */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 py-6">
            {refleksiMenyeluruh.ringkasanKonteks.map((item, idx) => {
              const IconComp = iconMap[item.icon] || School;
              return (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block truncate">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 block truncate">
                      {item.nilai}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Philosophy Highlight */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-50/80 via-blue-50/50 to-slate-50 border border-indigo-100">
            <div className="flex items-start gap-3.5">
              <Lightbulb className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                <strong className="text-slate-900 font-bold block mb-1">Intisari Refleksi:</strong>
                {refleksiMenyeluruh.pengantar}
              </p>
            </div>
          </div>

        </div>

        {/* 3. PERTANYAAN 1 LK 3: BAGAIMANA SEHARUSNYA PENDIDIKAN DI INDONESIA? */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-xs uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Pertanyaan 1 • Lembar Kerja 3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {refleksiMenyeluruh.visiPendidikanIndonesia.pertanyaan}
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium sm:text-right max-w-xs">
              {refleksiMenyeluruh.visiPendidikanIndonesia.deskripsiRingkas}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {refleksiMenyeluruh.visiPendidikanIndonesia.prinsipUtama.map((prinsip, idx) => (
              <div 
                key={idx}
                className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-50 to-white border border-slate-200/90 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-xl bg-indigo-600 text-white font-extrabold text-xs shadow-xs">
                      Prinsip #{prinsip.nomor}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      Otentik LK 3
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {prinsip.judul}
                  </h4>

                  {/* Core Takeaway Banner */}
                  <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-900">
                    "{prinsip.intiPesan}"
                  </div>

                  {/* Fakta vs Solusi Split */}
                  <div className="space-y-2.5 pt-1 text-xs">
                    <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-100 text-rose-950">
                      <strong className="block text-rose-700 font-bold uppercase tracking-wide text-[10px] mb-0.5">
                        Kondisi di Lapangan:
                      </strong>
                      <span>{prinsip.faktaLapangan}</span>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-emerald-950">
                      <strong className="block text-emerald-700 font-bold uppercase tracking-wide text-[10px] mb-0.5">
                        Solusi Konkret:
                      </strong>
                      <span>{prinsip.solusiKonkret}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {prinsip.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-0.5 rounded-lg text-[10px] font-semibold bg-slate-100 text-slate-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PERTANYAAN 2 LK 3: TIGA LANGKAH MENJADI GURU PROFESIONAL */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-xs uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>Pertanyaan 2 • Lembar Kerja 3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {refleksiMenyeluruh.langkahGuruProfesional.pertanyaan}
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium sm:text-right max-w-xs">
              {refleksiMenyeluruh.langkahGuruProfesional.deskripsiRingkas}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {refleksiMenyeluruh.langkahGuruProfesional.langkahKonkret.map((langkah, idx) => {
              const icons = [BookOpen, Smile, Wrench];
              const IconComp = icons[idx % icons.length];

              return (
                <div 
                  key={idx}
                  className="rounded-3xl p-6 bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        Langkah {langkah.nomor}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug">
                      {langkah.judul}
                    </h4>

                    {/* Tantangan vs Solusi */}
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-100 text-rose-950">
                        <strong className="block text-rose-700 font-bold uppercase tracking-wide text-[10px] mb-0.5">
                          Tantangan:
                        </strong>
                        <p>{langkah.tantangan}</p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-indigo-950">
                        <strong className="block text-indigo-700 font-bold uppercase tracking-wide text-[10px] mb-0.5">
                          Aksi & Solusi:
                        </strong>
                        <p>{langkah.solusi}</p>
                      </div>

                      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-900 font-semibold text-[11px] flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{langkah.hasil}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-5 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                    {langkah.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded-md text-[9px] font-semibold bg-slate-100 text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. MOMEN BERKESAN: SIASAT JAM SIANG DI SMK NEGERI 2 YOGYAKARTA */}
        <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white p-7 sm:p-12 shadow-2xl relative overflow-hidden border border-indigo-900/60">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  <Gamepad2 className="w-4 h-4" />
                </span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-300">
                  Pengalaman Nyata Mengajar Jam Siang di Lab
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {refleksiMenyeluruh.criticalIncident.konteks}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {refleksiMenyeluruh.criticalIncident.judul}
            </h3>

            {/* Quote Popout */}
            <div className="relative pl-6 sm:pl-8 border-l-4 border-amber-400 py-3 bg-white/5 rounded-r-2xl p-4 sm:p-6 backdrop-blur-xs">
              <Quote className="w-7 h-7 text-amber-400/40 absolute top-2 left-2 pointer-events-none" />
              <blockquote className="text-base sm:text-lg lg:text-xl font-bold text-amber-200 italic font-serif">
                "{refleksiMenyeluruh.criticalIncident.kutipanKunci}"
              </blockquote>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-2">
                {refleksiMenyeluruh.criticalIncident.ceritaRingkas}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 flex items-center gap-3">
              <Heart className="w-5 h-5 text-rose-400 shrink-0" />
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                <strong className="text-white">Refleksi Kunci:</strong> {refleksiMenyeluruh.criticalIncident.pelajaranPenting}
              </p>
            </div>
          </div>
        </section>

        {/* 6. PERUBAHAN SUDUT PANDANG: DULU VS SEKARANG */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
              Perubahan Pola Pikir
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Dulu vs Sekarang: Cara Pandang Saya Sebagai Guru
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Ringkasan perubahan sudut pandang sebelum mengikuti Program PPG dibanding setelah melaksanakan PPL di sekolah:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {refleksiMenyeluruh.perubahanMindset.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl border border-slate-200/90 hover:border-indigo-300 hover:shadow-md transition-all duration-200 space-y-3 bg-white"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {item.aspek}
                  </h4>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    Poin #{idx + 1}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-slate-600 bg-rose-50/50 p-2.5 rounded-xl border border-rose-100">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-rose-700 block font-semibold text-[10px] uppercase">Dulu:</strong>
                      <span>{item.sebelum}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-slate-800 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-emerald-700 block font-semibold text-[10px] uppercase">Sekarang:</strong>
                      <span>{item.sesudah}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. INDIKATOR RENCANA TINDAK LANJUT AWAL KARIR (3 PRIORITAS TAHUN 1 - 3) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Indikator RTL • Lembar Kerja 3</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {refleksiMenyeluruh.tigaRencanaAwal.pertanyaan}
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium max-w-xs sm:text-right">
              {refleksiMenyeluruh.tigaRencanaAwal.pengantar}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            {refleksiMenyeluruh.tigaRencanaAwal.prioritas.map((p, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/90 hover:border-indigo-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                      {p.nomor}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800">
                      Prioritas {idx + 1}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 leading-snug">
                    {p.judul}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.aksi}
                  </p>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-700">
                    <strong className="text-indigo-700 block font-bold mb-0.5">Rencana Tahapan:</strong>
                    {p.fokusTahun}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-indigo-700 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 shrink-0" />
                  <span>{p.target}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. BOTTOM NAVIGATION CTA */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
              Langkah Selanjutnya
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              Karya Inovasi Pendidikan (LK 4)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Media Pembelajaran Web Interaktif Berpikir Komputasional (TaRL & DUP) di SMK Negeri 2 Yogyakarta.
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
        </section>

      </div>

    </div>
  );
}
