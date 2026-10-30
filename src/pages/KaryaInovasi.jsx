import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Lightbulb, 
  ExternalLink, 
  ArrowRight, 
  FileCheck,
  CheckCircle2, 
  Layers, 
  Compass, 
  Target, 
  Users, 
  Sparkles, 
  Zap, 
  Award,
  Check,
  Clock,
  BarChart3,
  Monitor,
  Wrench,
  BookOpen
} from "lucide-react";
import { PageHeader } from "../components";
import { inovasiUtamaLK4, karyaInovasi } from "../data/karyaInovasi";

export default function KaryaInovasi() {
  const [activeTab, setActiveTab] = useState("lk4"); // 'lk4' | 'semua'

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* 1. Page Header */}
      <PageHeader 
        badge="Bagian IV • Desain Karya Inovatif (LK 4)"
        icon={Lightbulb}
        title="Karya Inovasi Pendidikan"
        description="Ringkasan intisari penyusunan desain karya inovasi media pembelajaran berbasis website dengan pendekatan TaRL dan DUP di SMK Negeri 2 Yogyakarta, disusun berdasarkan Lembar Kerja 4 (LK 4)."
        breadcrumbs={[
          { label: "Karya Inovasi (LK 4)" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        
        {/* 2. HERO BANNER: KARYA UNGGULAN (LK 4) */}
        <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-indigo-800/50">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  Karya Inovasi Utama (Lembar Kerja 4 PPG)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-indigo-200">
                  SMK Negeri 2 Yogyakarta • Kelas X Teknik Pemesinan
                </span>
              </div>

              {/* Direct PDF and Prototype Actions */}
              <div className="flex flex-wrap items-center gap-2.5">
                {inovasiUtamaLK4.berkasAsliPdf && (
                  <a
                    href={inovasiUtamaLK4.berkasAsliPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all hover:scale-105 active:scale-95"
                  >
                    <FileCheck className="w-4 h-4 text-amber-300" />
                    <span>Buka Berkas Asli LK 4 (PDF)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                  </a>
                )}
                {inovasiUtamaLK4.linkPrototipe && (
                  <a
                    href={inovasiUtamaLK4.linkPrototipe}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
                  >
                    <Monitor className="w-4 h-4 text-white" />
                    <span>Uji Coba Prototipe Web</span>
                    <ExternalLink className="w-3.5 h-3.5 text-indigo-200" />
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-3 max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                Identitas Desain Karya Inovatif
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug">
                {inovasiUtamaLK4.namaKarya}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Media pembelajaran digital berbasis website mandiri yang mengintegrasikan alur belajar fleksibel, simulasi interaktif, materi kontekstual bidang Teknik Pemesinan, serta asesmen formatif bertingkat 3 level (TaRL dan DUP).
              </p>
            </div>

            {/* Quick Context Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Sasaran Murid</span>
                <span className="text-xs font-bold text-white mt-0.5 block">X TP 1 & X TP 3 (72 Siswa)</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Pendekatan Ajar</span>
                <span className="text-xs font-bold text-white mt-0.5 block">TaRL (3 Level) & DUP</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Materi Pembelajaran</span>
                <span className="text-xs font-bold text-white mt-0.5 block">Berpikir Komputasional</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Target Evaluasi UX</span>
                <span className="text-xs font-bold text-emerald-300 mt-0.5 block">&gt; 80% Tanggapan Positif</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3. INDIKATOR 1: IDENTIFIKASI KEBUTUHAN & TANTANGAN (4 KARTU) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-xs uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Indikator 1 • Identifikasi Kebutuhan & Tantangan Pembelajaran</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              4 Tantangan Nyata di Kelas X Teknik Pemesinan SMK Negeri 2 Yogyakarta
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Berdasarkan observasi dan pengalaman PPL Informatika pada rombel 36 murid:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
            {inovasiUtamaLK4.identifikasiTantangan.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-indigo-300 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                      {item.nomor}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 text-indigo-700">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {item.judul}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. INDIKATOR 2: GAGASAN SOLUSI & 4 KOMPONEN TERINTEGRASI */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-xs uppercase tracking-wider">
              <Layers className="w-4 h-4" />
              <span>Indikator 2 • Perumusan Gagasan & Komponen Inovasi</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Struktur Media Website Pembelajaran Mandiri
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Website dirancang menyerupai kursus digital dengan 4 komponen utama yang saling terhubung:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
            {inovasiUtamaLK4.komponenWebsite.map((komp, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-indigo-50/40 to-white border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all duration-200 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  <span className="text-[10px] font-bold text-indigo-700 uppercase">Fitur #{idx + 1}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {komp.judul}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {komp.deskripsi}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PENERAPAN TaRL & DUP (DUAL CARD) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* TaRL: 3 Tingkat Belajar (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-5">
            <div className="space-y-1">
              <span className="text-[11px] font-extrabold text-indigo-600 uppercase tracking-wider">
                Diferensiasi Kesiapan Belajar
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                {inovasiUtamaLK4.pendekatanPedagogis.tarl.judul}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {inovasiUtamaLK4.pendekatanPedagogis.tarl.deskripsi}
              </p>
            </div>

            <div className="space-y-3">
              {inovasiUtamaLK4.pendekatanPedagogis.tarl.levels.map((lvl, lIdx) => (
                <div key={lIdx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <span className={`px-2.5 py-1 rounded-xl text-xs font-bold shrink-0 ${
                    lIdx === 0 ? "bg-sky-100 text-sky-800" :
                    lIdx === 1 ? "bg-indigo-100 text-indigo-800" : "bg-purple-100 text-purple-800"
                  }`}>
                    {lvl.level}
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed mt-0.5">
                    {lvl.fokus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DUP & Growth Mindset (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-indigo-50/60 to-white rounded-3xl p-6 sm:p-8 shadow-sm border border-indigo-100 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-extrabold text-indigo-600 uppercase tracking-wider">
                  Prinsip Aksesibilitas Multimodal
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  {inovasiUtamaLK4.pendekatanPedagogis.dup.judul}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {inovasiUtamaLK4.pendekatanPedagogis.dup.deskripsi}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-indigo-100 shadow-2xs space-y-1">
                <strong className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{inovasiUtamaLK4.pendekatanPedagogis.growthMindset.judul}</span>
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {inovasiUtamaLK4.pendekatanPedagogis.growthMindset.deskripsi}
                </p>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500 font-medium">
              ✓ Mengakomodasi beragam gaya belajar murid vokasi di lab komputer.
            </div>
          </div>

        </section>

        {/* 6. INDIKATOR 3: 5 PRINSIP INOVASI PENDIDIKAN */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-indigo-600 font-extrabold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Indikator 3 • 5 Prinsip Karya Inovasi Pendidikan Resmi</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Karakteristik & Nilai Unggul Produk Inovasi
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 pt-1">
            {inovasiUtamaLK4.prinsipInovasi.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-indigo-300 hover:bg-white hover:shadow-sm transition-all duration-200 space-y-2"
              >
                <span className="text-xs font-bold text-indigo-700 block">
                  #{idx + 1} {item.prinsip}
                </span>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {item.ringkasan}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. INDIKATOR 4 & 5: ALUR IMPLEMENTASI & EVALUASI KEBERHASILAN */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Alur 5 Tahap Implementasi (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-extrabold text-indigo-600 uppercase tracking-wider">
                Indikator 4 • Alur Pelaksanaan
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                5 Tahapan Implementasi di SMK Negeri 2 Yogyakarta
              </h4>
            </div>

            <div className="space-y-2.5 pt-1">
              {inovasiUtamaLK4.tahapImplementasi.map((t, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <strong className="text-xs font-bold text-slate-900 block">{t.tahap}</strong>
                    <p className="text-xs text-slate-600 leading-relaxed">{t.uraian}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rencana Evaluasi Keberhasilan (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-extrabold text-indigo-600 uppercase tracking-wider">
                Indikator 5 • Pengukuran Keberhasilan
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                3 Pendekatan Evaluasi Berbasis Bukti
              </h4>
            </div>

            <div className="space-y-3 pt-1">
              {inovasiUtamaLK4.rencanaEvaluasi.map((ev, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <span className="text-xs font-bold text-indigo-700 flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5" />
                    <span>{ev.fokus}</span>
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ev.metode}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium">
              💡 <strong>Klaim Efektivitas:</strong> Disusun berdasarkan data riil uji coba pre-test/post-test dan kuesioner pengguna, bukan sekadar asumsi awal.
            </div>
          </div>

        </section>

        {/* 8. KARYA INOVASI PENDIDIKAN LAINNYA DI SMK NEGERI 2 YOGYAKARTA */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
                Portofolio Pelengkap
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Karya Inovasi Terkait Selama PPL & PPG
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Proyek Kepemimpinan & Perangkat Pembelajaran Vokasi
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
            {karyaInovasi.slice(1).map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-indigo-300 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-indigo-100 text-indigo-800">
                    {item.kategori}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.namaKarya}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.deskripsiSingkat}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                  <span>Sasaran: {item.sasaran}</span>
                  <span className="font-bold text-indigo-600">{item.tahun}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. BOTTOM NAVIGATION CTA */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
              Langkah Selanjutnya
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              Rencana Tindak Lanjut (RTL)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Peta jalan aksi 3 tahun pasca kelulusan PPG berorientasi Pengembangan Keprofesian Berkelanjutan (PKB) berprinsip SMART.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/rencana-tindak-lanjut"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-200 transition-all hover:gap-3"
            >
              <span>Buka Rencana Tindak Lanjut (RTL)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>

    </div>
  );
}
