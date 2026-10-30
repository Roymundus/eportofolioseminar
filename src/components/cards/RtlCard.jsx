import React from "react";
import { 
  Target, 
  CheckCircle2, 
  FileCheck2, 
  Users, 
  Clock 
} from "lucide-react";

export default function RtlCard({ item, index }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
      
      {/* Header card with timeline */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-50 via-white to-indigo-50/20 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 text-indigo-800">
              Rencana #{index + 1}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              {item.garisWaktu}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {item.kategori}
          </h3>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-100/80 text-slate-700 text-xs font-medium max-w-sm border border-slate-200/60">
          <span className="font-bold block text-slate-900 mb-0.5">Target Kunci:</span>
          {item.target}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Aksi Strategis */}
        <div>
          <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-3">
            <Target className="w-4 h-4 text-indigo-600" />
            <span>Langkah / Aksi Strategis Nyata</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {item.aksiStrategis.map((aksi, aIdx) => (
              <div 
                key={aIdx}
                className="p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-3 hover:border-indigo-200 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>{aksi}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bukti Keberhasilan & Mitra */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wide mb-1">
              <FileCheck2 className="w-4 h-4 text-emerald-600" />
              <span>Bukti / Artefak Keberhasilan</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-950 font-medium">
              {item.buktiKeberhasilan}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200">
            <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-800 uppercase tracking-wide mb-1">
              <Users className="w-4 h-4 text-indigo-600" />
              <span>Pihak Terkait & Mitra Kolaborasi</span>
            </div>
            <p className="text-xs sm:text-sm text-indigo-950 font-medium">
              {item.mitraKolaborasi}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

