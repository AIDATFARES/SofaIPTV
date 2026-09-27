import { Monitor, Laptop, Smartphone, Tablet, Tv } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-8 md:pt-10 pb-16 md:pb-20 flex items-center justify-center bg-slate-950 overflow-hidden text-center">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/sofa-hero-family.webp"
          alt="Family enjoying buffer-free 4K television on SofaIPTV"
          title="SofaIPTV - #1 Living Room 4K IPTV Streaming Service"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
        <div className="absolute bottom-0 inset-x-0 h-16 md:h-24 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 flex flex-col items-center gap-6">

        {/* Top Tag */}
        <div className="inline-flex items-center border border-indigo-500/40 rounded-full px-4 py-1.5 backdrop-blur-md bg-indigo-950/50 shadow-lg shadow-indigo-500/10">
          <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-bold text-cyan-300 tracking-widest uppercase">
            TRUSTED BY 160,000+ STREAMERS WORLDWIDE · 99.9% UPTIME
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black tracking-tight leading-[1] text-white uppercase drop-shadow-2xl mt-4">
          SIT BACK &amp; STREAM WITH<br />
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">SOFAIPTV</span> PREMIUM 4K
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-2xl mt-2 drop-shadow-lg">
          Experience next-generation IPTV streaming with 50,000+ live HD and 4K channels plus 200,000+ on-demand movies and series. Engineered with anti-freeze server technology, 99.9% uptime, and instant 5-minute activation across all your favorite devices.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-8 justify-center w-full sm:w-auto">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20SofaIPTV."
            target="_blank"
            rel="noreferrer"
            className="py-4 px-8 text-sm sm:text-base font-bold text-white rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center tracking-wider hover:scale-105 shadow-lg shadow-indigo-600/30"
          >
            GET 12 MONTHS — 2 MONTHS FREE →
          </a>
          <a
            href="#pricing"
            className="py-4 px-8 text-sm sm:text-base font-bold text-white rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center tracking-wider hover:scale-105"
          >
            EXPLORE IPTV PLANS →
          </a>
        </div>

        {/* Bottom Icons */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-slate-300 mt-4">
          <div className="flex flex-col items-center gap-2 group hover:text-cyan-400 transition-colors cursor-pointer">
            <Tv className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.4]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Smart TV</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-cyan-400 transition-colors cursor-pointer">
            <Laptop className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.4]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Laptop / PC</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-cyan-400 transition-colors cursor-pointer">
            <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.4]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Android & Firestick</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-cyan-400 transition-colors cursor-pointer">
            <Tablet className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.4]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">iOS & Apple TV</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-cyan-400 transition-colors cursor-pointer">
            <Monitor className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.4]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Windows / Mac</span>
          </div>
        </div>

      </div>
    </section>
  );
}
