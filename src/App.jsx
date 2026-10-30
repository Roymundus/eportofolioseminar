import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Footer, ScrollToTop, ErrorBoundary } from "./components";

// Pages
import IdentifikasiDiri from "./pages/IdentifikasiDiri";
import RefleksiMataKuliah from "./pages/RefleksiMataKuliah";
import RefleksiPPG from "./pages/RefleksiPPG";
import KaryaInovasi from "./pages/KaryaInovasi";
import RencanaTindakLanjut from "./pages/RencanaTindakLanjut";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
        <ScrollToTop />
        <Navbar />
        
        <main className="grow">
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<IdentifikasiDiri />} />
              <Route path="/refleksi-matakuliah" element={<RefleksiMataKuliah />} />
              <Route path="/refleksi-ppg" element={<RefleksiPPG />} />
              <Route path="/karya-inovasi" element={<KaryaInovasi />} />
              <Route path="/rencana-tindak-lanjut" element={<RencanaTindakLanjut />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ErrorBoundary>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
