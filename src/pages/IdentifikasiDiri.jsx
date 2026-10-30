import React from "react";
import { Link } from "react-router-dom";
import { 
  User, 
  Sparkles, 
  Heart, 
  Lightbulb, 
  ShieldCheck, 
  Target, 
  BookOpen, 
  GraduationCap, 
  MapPin, 
  Mail, 
  ArrowRight, 
  School, 
  Award, 
  CheckCircle2, 
  Cpu, 
  Quote,
  FileCheck
} from "lucide-react";
import { biodata } from "../data";

export default function IdentifikasiDiri() {
  // Icon mapping for core values
  const iconMap = {
    Heart: { icon: Heart, color: "text-rose-500", bg: "bg-rose-50", border: "border-rose-100" },
    Sparkles: { icon: Sparkles, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
    Lightbulb: { icon: Lightbulb, color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-100" },
    ShieldCheck: { icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
      {/* 1. HERO SECTION & BIODATA (LK 1) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white pt-16 pb-28 px-4 sm:px-6 lg:px-8 border-b border-indigo-950/80">
        
        {/* Animated glowing mesh orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[350px] bg-blue-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#4338ca_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Bio info */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/10 text-indigo-200 border border-white/15 backdrop-blur-md shadow-xs">
                  <GraduationCap className="w-4 h-4 text-indigo-300" />
                  <span>Portofolio Seminar PPG • Identifikasi Diri (LK 1)</span>
                </span>
                
                {biodata.dokumenLK1 && (
                  <a
                    href={biodata.dokumenLK1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 transition-colors"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-indigo-300" />
                    <span>Lihat Berkas LK 1 (PDF)</span>
                  </a>
                )}
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                  {biodata.namaLengkap}
                </h1>
                <p className="text-base sm:text-xl text-indigo-200/90 font-medium max-w-2xl leading-relaxed">
                  {biodata.tagline}
                </p>
              </div>

              {/* Badges Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-200">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/20 shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-bold">NIM Mahasiswa</span>
                    <span className="text-sm font-bold text-white font-mono">{biodata.nim}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-200">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/20 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-bold">Bidang Keahlian</span>
                    <span className="text-sm font-bold text-white truncate block">{biodata.bidangStudi}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-200">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/20 shrink-0">
                    <School className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-bold">LPTK & Sekolah PPL</span>
                    <span className="text-sm font-bold text-white block">{biodata.perguruanTinggi}</span>
                    <span className="text-xs text-indigo-300 font-medium">{biodata.sekolahPPL}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-200">
                  <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/20 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-slate-400 font-bold">Program Studi</span>
                    <span className="text-sm font-bold text-white block">{biodata.program}</span>
                    <span className="text-xs text-indigo-300 font-medium">{biodata.gelombang}</span>
                  </div>
                </div>

              </div>

              {/* Context Pill */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  {biodata.domisili}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  {biodata.email}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  {biodata.kelasPPL}
                </span>
              </div>
            </div>

            {/* Right: Profile Photo */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 group-hover:blur-2xl transition duration-500" />
                <div className="relative w-64 h-84 sm:w-72 sm:h-96 rounded-3xl overflow-hidden bg-slate-900 border-2 border-white/30 shadow-2xl">
                  <img 
                    src={biodata.fotoProfil} 
                    alt={biodata.namaLengkap} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="text-[11px] uppercase tracking-widest text-indigo-300 font-extrabold">Calon Guru Profesional</span>
                    <h3 className="text-lg font-bold leading-tight mt-0.5">{biodata.namaLengkap}</h3>
                    <p className="text-xs text-slate-300 font-mono mt-0.5">NIM: {biodata.nim}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. VISI PENDIDIKAN & VISI CALON GURU (DUAL CARDS - OTENTIK LK 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Visi Pendidikan di Indonesia */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-900/5 border border-slate-200/80 hover:border-rose-300 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 border border-rose-200 text-rose-600 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                  Visi Pendidikan Indonesia
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Visi Pribadi untuk Pendidikan di Indonesia
                </h3>
              </div>

              <div className="relative pl-5 border-l-4 border-rose-500 py-1 bg-rose-50/50 rounded-r-2xl">
                <Quote className="w-6 h-6 text-rose-300 absolute -top-2 -left-3 pointer-events-none opacity-40" />
                <blockquote className="text-slate-800 text-base sm:text-lg leading-relaxed italic font-serif">
                  "{biodata.visiPendidikanIndonesia}"
                </blockquote>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Pendidikan harus relevan dengan dinamika era digital, menghapus sekat kesenjangan, serta menghubungkan konsep teoritis dengan pengalaman dunia nyata agar murid merasakan manfaat nyata dari setiap materi yang dipelajari.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-rose-700 font-bold">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span>Pendidikan Kontekstual & Memerdekakan Kodrat Murid</span>
            </div>
          </div>

          {/* Visi Diri Sebagai Calon Guru */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-900/5 border border-slate-200/80 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 text-indigo-600 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Visi Pendidik Abad 21
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Visi Pribadi sebagai Calon Guru
                </h3>
              </div>

              <div className="relative pl-5 border-l-4 border-indigo-600 py-1 bg-indigo-50/50 rounded-r-2xl">
                <Quote className="w-6 h-6 text-indigo-300 absolute -top-2 -left-3 pointer-events-none opacity-40" />
                <blockquote className="text-slate-800 text-base sm:text-lg leading-relaxed italic font-serif">
                  "{biodata.visiCalonGuru}"
                </blockquote>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Menjadi pamong yang tidak hanya mentransfer pengetahuan, melainkan mendampingi, menginspirasi, serta menghadirkan ruang eksplorasi di mana murid berani berpendapat, bertanya, dan bangkit dari kesalahan.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-indigo-700 font-bold">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Guru Inspiratif, Adaptif IPTEK, dan Pembelajar Sepanjang Hayat</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. KOMITMEN AKSI MENCAPAI VISI (OTENTIK LK 1 - 5 PILAR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-slate-200/90 relative overflow-hidden">
          
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
              Langkah Konkret LK 1
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Hal yang Dilakukan untuk Mencapai Visi
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Lima pilar aksi strategis yang menjadi panduan operasional dalam praktik pembelajaran dan pengembangan diri:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {biodata.misiPribadi.map((misi, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 text-white font-extrabold flex items-center justify-center text-sm shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                    0{index + 1}
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">
                    Pilar Aksi #{index + 1}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {misi}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-indigo-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Komitmen Terlaksana</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. NILAI-NILAI UTAMA (CORE VALUES) */}
      <section className="bg-gradient-to-b from-slate-100/70 via-slate-50 to-white py-20 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
              Fondasi Karakter Calon Guru
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Nilai-Nilai Dasar Pendidik
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Prinsip etis dan pedagogis yang melandasi setiap interaksi dan rancangan pembelajaran di SMK Negeri 2 Yogyakarta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {biodata.nilaiNilaiUtama.map((nilai, idx) => {
              const config = iconMap[nilai.icon] || iconMap.Heart;
              const IconComponent = config.icon;

              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-7 shadow-sm border border-slate-200/90 hover:shadow-xl hover:border-indigo-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className={`w-13 h-13 rounded-2xl ${config.bg} border ${config.border} ${config.color} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                      {nilai.judul}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {nilai.deskripsi}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-bold text-indigo-600 flex items-center gap-1">
                    <span>Prinsip #{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. BOTTOM NAVIGATION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">
              Langkah Selanjutnya
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              Refleksi Pengalaman Belajar Mata Kuliah (LK 2)
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Dokumentasi ringkasan refleksi 11 mata kuliah model 4C beserta akses berkas dokumen PDF.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/refleksi-matakuliah"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-indigo-200 transition-all hover:gap-3"
            >
              <span>Buka Refleksi MK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/karya-inovasi"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-colors"
            >
              <span>Karya Inovasi (LK 4)</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
