import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home, Sparkles } from "lucide-react";

export default function PageHeader({ 
  badge, 
  title, 
  description, 
  icon: Icon,
  breadcrumbs = []
}) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950/90 to-slate-900 text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8 border-b border-indigo-950/60 shadow-inner">
      
      {/* Background Lighting & Radial Glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-10 left-1/3 w-[350px] h-[250px] bg-blue-500/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Modern Breadcrumb Pills */}
        <nav className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-indigo-200/90 mb-6 font-medium shadow-2xs">
          <Link to="/" className="hover:text-white flex items-center gap-1.5 transition-colors">
            <Home className="w-3.5 h-3.5 text-indigo-300" />
            <span>Beranda</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-indigo-400/50" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-semibold truncate max-w-[200px] sm:max-w-none">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Header content */}
        <div className="space-y-4 max-w-4xl">
          {badge && (
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-purple-500/20 text-indigo-200 border border-indigo-400/30 backdrop-blur-md shadow-xs">
                {Icon ? <Icon className="w-4 h-4 text-indigo-300" /> : <Sparkles className="w-4 h-4 text-indigo-300" />}
                <span>{badge}</span>
              </span>
            </div>
          )}
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h1>

          {description && (
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
              {description}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

