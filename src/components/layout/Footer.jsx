import React from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Mail, 
  MapPin, 
  ArrowUp,
  School,
  ChevronRight
} from "lucide-react";
import { biodata } from "../../data/biodata";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 mt-28 border-t border-slate-800/80 overflow-hidden">
      
      {/* Background Aurora Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-1/4 w-[400px] h-[250px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Identity & Mission (Col 1 - 5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-white font-extrabold text-lg tracking-tight">
                  E-Portofolio Digital PPG
                </h3>
                <p className="text-xs text-indigo-300 font-medium">
                  {biodata.mataKuliahSeminar}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Dokumentasi refleksi kritis, artefak pembelajaran terkurasi, dan karya inovasi digital mahasiswa calon guru profesional bidang Pendidikan Informatika di Universitas Negeri Yogyakarta.
            </p>

            {/* Profile badge pills */}
            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <School className="w-4 h-4" />
                </div>
                <span>{biodata.perguruanTinggi}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Mitra PPL: {biodata.sekolahPPL} (Kelas X Teknik Pemesinan)</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{biodata.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Nav (Col 2 - 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase text-indigo-300">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: "1. Identifikasi Diri & Visi", path: "/" },
                { name: "2. Refleksi MK Semester I & II", path: "/refleksi-matakuliah" },
                { name: "3. Refleksi Program PPG", path: "/refleksi-ppg" },
                { name: "4. Karya Inovasi Pendidikan", path: "/karya-inovasi" },
                { name: "5. Rencana Tindak Lanjut (RTL)", path: "/rencana-tindak-lanjut" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path}
                    className="group flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors py-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-500 transition-transform group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Card & Action (Col 3 - 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase text-indigo-300">
              Validasi Mahasiswa
            </h4>
            
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                  Mahasiswa Calon Guru
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Terdaftar
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-white">{biodata.namaLengkap}</p>
                <p className="text-xs text-indigo-300 font-mono mt-0.5">NIM: {biodata.nim}</p>
                <p className="text-xs text-slate-400 mt-1">{biodata.bidangStudi}</p>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all group"
            >
              <span>Kembali ke Paling Atas</span>
              <ArrowUp className="w-3.5 h-3.5 text-indigo-400 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} <strong className="text-slate-400">{biodata.namaLengkap}</strong> — Portofolio Seminar PPG UNY.
          </p>
          <div className="flex items-center gap-2">
            <span>Didedikasikan untuk Kemajuan Pendidikan Vokasi & Informatika Indonesia</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
