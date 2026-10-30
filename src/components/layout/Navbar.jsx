import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { 
  GraduationCap, 
  User, 
  BookOpen, 
  Sparkles, 
  Lightbulb, 
  Compass, 
  Menu, 
  X,
  Printer,
  ChevronRight,
  School
} from "lucide-react";
import { biodata } from "../../data/biodata";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Identifikasi Diri", path: "/", icon: User, badge: "LK 1" },
    { name: "Refleksi MK", path: "/refleksi-matakuliah", icon: BookOpen, badge: "11 MK" },
    { name: "Refleksi PPG", path: "/refleksi-ppg", icon: Sparkles, badge: "Sintesis" },
    { name: "Karya Inovasi", path: "/karya-inovasi", icon: Lightbulb, badge: "LK 4" },
    { name: "Rencana Tindak Lanjut", path: "/rencana-tindak-lanjut", icon: Compass, badge: "RTL" },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-md shadow-slate-900/5 py-2.5" 
          : "bg-white/95 backdrop-blur-md border-b border-slate-200/60 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Profile Preview */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
              </span>
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent">
                  E-Portofolio PPG
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/80">
                  UNY 2025
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                <span className="font-semibold text-slate-700">{biodata.namaLengkap.split(',')[0]}</span>
                <span className="text-slate-300">•</span>
                <span className="truncate max-w-[130px] sm:max-w-none text-slate-500">Informatika SMK N 2 Yk</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100/70 border border-slate-200/60 backdrop-blur-xs">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-white text-indigo-700 shadow-xs shadow-slate-200 font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 duration-200 ${isActive ? "text-indigo-600" : "text-slate-400 group-hover:text-slate-600"}`} />
                      <span>{item.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-medium transition-colors ${
                        isActive 
                          ? "bg-indigo-50 text-indigo-700 border border-indigo-200/60" 
                          : "bg-slate-200/60 text-slate-500 group-hover:bg-slate-200"
                      }`}>
                        {item.badge}
                      </span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Medium Screens (lg) compact nav */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-slate-600 hover:bg-slate-100"
                    }`
                  }
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Action Button: Print & Mobile Hamburger */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              title="Cetak atau Unduh Portofolio ke format PDF"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-indigo-700 bg-white hover:bg-indigo-50/60 rounded-xl border border-slate-200 hover:border-indigo-200 transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-600" />
              <span>Cetak / PDF</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 active:scale-95 transition-all focus:outline-hidden border border-slate-200/80"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-3 duration-250">
          
          <div className="p-3 mb-3 rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <School className="w-4 h-4 text-indigo-600 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">{biodata.perguruanTinggi}</span>
                <span className="text-slate-500">{biodata.sekolahPPL}</span>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white text-indigo-700 border border-indigo-200">
              NIM {biodata.nim}
            </span>
          </div>

          <div className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-500/20"
                        : "text-slate-700 hover:bg-slate-100/80"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                        <span>{item.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] px-2 py-0.5 rounded-md ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}>
                          {item.badge}
                        </span>
                        <ChevronRight className={`w-4 h-4 ${isActive ? "text-white/80" : "text-slate-300"}`} />
                      </div>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handlePrint();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Simpan Halaman sebagai PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

