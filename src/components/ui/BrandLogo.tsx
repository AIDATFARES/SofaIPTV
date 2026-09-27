import React from "react";

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${compact ? "scale-90" : ""}`}>
      {/* Icon: Sleek Modern Sofa with Streaming Play Symbol */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-cyan-500 p-0.5 shadow-md shadow-indigo-500/25 transition-transform hover:scale-105">
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950/80 backdrop-blur-sm">
          <svg
            className="h-5 w-5 text-cyan-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Modern Sofa Outline */}
            <path d="M4 11V8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3" />
            <path d="M3 13a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z" />
            <path d="M6 19v2" />
            <path d="M18 19v2" />
            {/* Play Button Inside */}
            <polygon points="10,12 10,16 14,14" fill="currentColor" stroke="none" />
          </svg>
        </div>
        {/* Live Indicator Dot */}
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
        </span>
      </div>

      {/* Typography: SOFA IPTV */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className="text-xl font-black uppercase tracking-tight text-slate-950 font-display-lg">
            SOFA
          </span>
          <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-xl font-black uppercase tracking-tight text-transparent">
            IPTV
          </span>
          <span className="rounded bg-indigo-600/10 px-1 py-0.5 text-[9px] font-black uppercase tracking-widest text-indigo-600 border border-indigo-500/20">
            4K
          </span>
        </div>
        <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-400">
          PREMIUM STREAMING
        </span>
      </div>
    </div>
  );
}
