import React, { useState } from "react";
import { 
  FileText, 
  ExternalLink, 
  Layers, 
  FileCheck,
  Link2,
  AlertCircle,
  Lightbulb,
  RefreshCw,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function CourseCard({ mk }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 overflow-hidden">
      
      {/* Course Header Bar */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 text-indigo-800">
                {mk.kode}
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                Semester {mk.semester} • {mk.sks} SKS
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                Ringkasan 4C Tersedia
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {mk.nama}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {mk.artefak?.tautan && (
              <a
                href={mk.artefak.tautan}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20 hover:scale-105 active:scale-95"
              >
                <FileCheck className="w-4 h-4 text-white" />
                <span>Dokumen PDF</span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-200" />
              </a>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isExpanded
                  ? "bg-slate-200 text-slate-800 hover:bg-slate-300"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              <span>{isExpanded ? "Tutup Ringkasan" : "Buka Ringkasan 4C"}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Ringkasan Konsep Utama (Highlight) */}
        {mk.refleksi4C?.concept && (
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                  Intisari Konsep Utama (Concept)
                </h4>
                <p className="text-xs sm:text-sm text-amber-950 mt-1 leading-relaxed">
                  {mk.refleksi4C.concept}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Artefak Terpilih Card */}
        {mk.artefak && (
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-indigo-600 text-white shrink-0 shadow-xs">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
                    Artefak Pembelajaran Terpilih
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {mk.artefak?.nama || "Artefak Pembelajaran Terpilih"}
                  </h4>
                  {mk.artefak?.alasan && (
                    <p className="text-xs text-slate-600 line-clamp-2">
                      <span className="font-semibold text-slate-700">Intisari Artefak:</span> {mk.artefak.alasan}
                    </p>
                  )}
                </div>
              </div>

              {mk.artefak?.tautan && (
                <a
                  href={mk.artefak.tautan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-300 hover:bg-indigo-50 hover:border-indigo-300 text-xs font-bold text-indigo-700 transition-colors shrink-0 shadow-2xs"
                >
                  <FileCheck className="w-4 h-4 text-indigo-600" />
                  <span>Buka Berkas Asli (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Expanded 4C Details & Deep Reflection */}
        {isExpanded && mk.refleksi4C && (
          <div className="pt-6 border-t border-slate-200 space-y-6 animate-in fade-in duration-200">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-600" />
                <span>Ringkasan Refleksi Model 4C (LK 2)</span>
              </h4>
              <span className="text-xs text-slate-500 font-medium">
                Untuk telaah lengkap, silakan buka lampiran berkas PDF di atas
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* 1. Connection */}
              <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-200">
                <span className="text-xs font-bold text-sky-800 uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
                  <Link2 className="w-4 h-4" /> 1. Keterkaitan Materi (Connection)
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {mk.refleksi4C.connection}
                </p>
              </div>

              {/* 2. Challenge */}
              <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200">
                <span className="text-xs font-bold text-rose-800 uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
                  <AlertCircle className="w-4 h-4" /> 2. Tantangan & Perbedaan Praktik (Challenge)
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {mk.refleksi4C.challenge}
                </p>
              </div>

              {/* 3. Concept */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
                  <Lightbulb className="w-4 h-4" /> 3. Konsep Utama yang Dipelajari (Concept)
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {mk.refleksi4C.concept}
                </p>
              </div>

              {/* 4. Change */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
                  <RefreshCw className="w-4 h-4" /> 4. Perubahan yang Dilakukan (Change)
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {mk.refleksi4C.change}
                </p>
              </div>

            </div>

            {/* Analisis Artefak Ringkas */}
            {mk.artefak?.alasan && (
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h5 className="font-bold text-xs uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4" />
                  <span>Ringkasan Telaah Artefak Pembelajaran</span>
                </h5>
                
                <div className="text-xs sm:text-sm text-slate-700 space-y-2 leading-relaxed">
                  <div>
                    <strong className="text-slate-900 block">Alasan Pemilihan Artefak:</strong>
                    <p className="mt-0.5">{mk.artefak.alasan}</p>
                  </div>
                  {mk.artefak?.bagianMendukung && (
                    <div className="pt-2 border-t border-slate-200">
                      <strong className="text-slate-900 block">Bagian Artefak yang Mendukung Refleksi:</strong>
                      <p className="mt-0.5">{mk.artefak.bagianMendukung}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
