import React from "react";
import { 
  Eye, 
  FileText, 
  ExternalLink, 
  TrendingUp 
} from "lucide-react";

export default function InnovationCard({ item, onSelect }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Image Banner */}
        <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-800">
          <img 
            src={item.gambar} 
            alt={item.judul}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
          
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white shadow-md">
              {item.kategori}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-xs text-indigo-300 font-semibold block mb-0.5">
              {item.sasaran}
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-sm">
              {item.judul}
            </h4>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-8 space-y-5">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {item.deskripsiSingkat}
          </p>

          {/* Problems and Solutions */}
          <div className="space-y-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs text-rose-950 leading-relaxed">
              <strong className="block font-bold text-rose-700 uppercase tracking-wide mb-0.5">
                Tantangan / Kebutuhan Awal:
              </strong>
              {item.masalahYangDipecahkan}
            </div>

            <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs text-indigo-950 leading-relaxed">
              <strong className="block font-bold text-indigo-700 uppercase tracking-wide mb-1">
                Fitur & Solusi Inovasi:
              </strong>
              <ul className="space-y-1 list-disc list-inside text-indigo-900">
                {item.solusiInovasi.map((sol, sIdx) => (
                  <li key={sIdx}>{sol}</li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950">
              <div className="flex items-center gap-1.5 font-bold text-emerald-700 uppercase tracking-wide mb-0.5">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Dampak Keberhasilan:</span>
              </div>
              <p>{item.dampakHasil}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
        <button
          onClick={() => onSelect(item)}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold transition-colors shadow-xs"
        >
          <Eye className="w-4 h-4" />
          <span>Detail Uraian & Artefak</span>
        </button>

        <button
          onClick={() => {
            alert(`Tautan berkas artefak untuk '${item.judul}' siap dihubungkan ke Google Drive Anda.`);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
        >
          <FileText className="w-4 h-4" />
          <span>Lihat Dokumen</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>

    </div>
  );
}

