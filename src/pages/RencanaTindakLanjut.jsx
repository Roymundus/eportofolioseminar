import React from "react";
import { Link } from "react-router-dom";
import { 
  Compass, 
  Printer, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Calendar,
  CheckCircle2,
  Users,
  Target,
  Clock,
  Zap,
  BookOpen
} from "lucide-react";
import { PageHeader, RtlCard } from "../components";
import { rencanaTindakLanjut, biodata } from "../data";

export default function RencanaTindakLanjut() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* 1. Page Header */}
      <PageHeader 
        badge="Bagian V • Rencana Masa Depan & PKB"
        icon={Compass}
        title="Rencana Tindak Lanjut (RTL)"
        description="Ringkasan peta jalan aksi Pengembangan Keprofesian Berkelanjutan (PKB) berprinsip SMART untuk tiga tahun pertama pasca kelulusan Program PPG Calon Guru UNY."
        breadcrumbs={[
          { label: "Rencana Tindak Lanjut (RTL)" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-10">
        
        {/* 2. Principles Card & Quick Actions */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-900/5 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              <Sparkles className="w-3.5 h-3.5" />
              Landasan Rencana Tindak Lanjut
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Prinsip SMART dalam Pengembangan Diri Pendidik
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {rencanaTindakLanjut.prinsipDasar}
            </p>
          </div>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-lg transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <Printer className="w-4 h-4 text-indigo-400" />
            <span>Cetak / Simpan RTL (PDF)</span>
          </button>
        </div>

        {/* 3. SMART Framework Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3.5 text-center">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-indigo-300 transition-colors">
            <span className="text-lg font-black text-indigo-600">S</span>
            <span className="block text-xs font-bold text-slate-900 mt-0.5">Specific</span>
            <span className="text-[11px] text-slate-500">Jelas & terarah pada TaRL & DUP</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-indigo-300 transition-colors">
            <span className="text-lg font-black text-blue-600">M</span>
            <span className="block text-xs font-bold text-slate-900 mt-0.5">Measurable</span>
            <span className="text-[11px] text-slate-500">Terukur hasil asesmen & UX</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-indigo-300 transition-colors">
            <span className="text-lg font-black text-emerald-600">A</span>
            <span className="block text-xs font-bold text-slate-900 mt-0.5">Achievable</span>
            <span className="text-[11px] text-slate-500">Realistis dicapai bertahap</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-indigo-300 transition-colors">
            <span className="text-lg font-black text-amber-600">R</span>
            <span className="block text-xs font-bold text-slate-900 mt-0.5">Relevant</span>
            <span className="text-[11px] text-slate-500">Sesuai kebutuhan vokasi murid</span>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-indigo-300 transition-colors col-span-2 sm:col-span-1">
            <span className="text-lg font-black text-purple-600">T</span>
            <span className="block text-xs font-bold text-slate-900 mt-0.5">Time-bound</span>
            <span className="text-[11px] text-slate-500">Target 3 tahun terstruktur</span>
          </div>
        </div>

        {/* 4. Matriks RTL Cards (Tahun 1, Tahun 2, Tahun 3) */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
              Peta Jalan 3 Tahun Awal Karir
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Matriks Rencana Tindak Lanjut Terstruktur
            </h3>
          </div>

          <div className="space-y-6">
            {rencanaTindakLanjut.matriksRTL.map((item, idx) => (
              <RtlCard key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>

        {/* 5. Ikrar & Lembar Pengesahan Resmi */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-2xl border-2 border-indigo-100 relative overflow-hidden">
          
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex p-3 rounded-2xl bg-gradient-to-tr from-indigo-500 to-blue-600 text-white shadow-md shadow-indigo-500/20">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-widest text-indigo-600">
                Dokumen Pernyataan Sikap Pendidik
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-tight">
                Ikrar Komitmen Guru Profesional
              </h3>
            </div>

            <blockquote className="text-sm sm:text-base text-slate-700 italic font-serif leading-relaxed px-5 py-4 bg-indigo-50/40 rounded-2xl border border-indigo-100">
              "{rencanaTindakLanjut.janjiKomitmen.teks}"
            </blockquote>

            {/* Signature Area */}
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-8 max-w-xl mx-auto">
              <div className="text-center sm:text-left space-y-1">
                <p>Mengetahui,</p>
                <p className="font-bold text-slate-900">Dosen Pembimbing / Penguji Seminar</p>
                <div className="h-16 flex items-end">
                  <p className="font-bold text-slate-900 pt-8 border-b border-slate-400 min-w-44 text-center">
                    ( .................................................. )
                  </p>
                </div>
                <p className="text-[11px] text-slate-400">NIP. .........................................</p>
              </div>

              <div className="text-center sm:text-right space-y-1">
                <p>{biodata.domisili}, {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <p className="font-bold text-slate-900">Calon Guru Profesional,</p>
                <div className="h-16 flex items-end justify-center sm:justify-end">
                  <p className="font-bold text-slate-900 pt-8 border-b border-slate-400 min-w-44 text-center">
                    {biodata.namaLengkap}
                  </p>
                </div>
                <p className="text-[11px] text-slate-500 font-mono">NIM. {biodata.nim}</p>
              </div>
            </div>

          </div>
        </div>

        {/* 6. Back to Home CTA */}
        <div className="text-center pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            <span>Kembali ke Halaman Identifikasi Diri</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

    </div>
  );
}
