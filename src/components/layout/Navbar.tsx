"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 flex flex-col ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg shadow-indigo-950/5"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      {/* Promotional Top Bar */}
      <div className="w-full bg-gradient-to-r from-indigo-700 via-indigo-600 to-cyan-600 text-white py-2 overflow-hidden flex items-center shadow-sm">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-2 px-8 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
              🛋️ SofaIPTV Special Offer: Stream in 4K UHD with a <span className="font-extrabold underline uppercase tracking-widest text-cyan-300">Free Trial</span>! 
              <a 
                href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20SofaIPTV." 
                target="_blank" 
                rel="noreferrer"
                className="inline-block ml-2 bg-white text-indigo-700 px-3.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider hover:bg-cyan-300 hover:text-slate-950 transition-colors shadow-sm"
              >
                Claim Trial
              </a>
            </span>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[1480px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between relative">
        
        {/* LOGO */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group shrink-0 z-20">
          <BrandLogo />
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex relative z-10 items-center gap-6 xl:gap-8 px-6 text-sm font-semibold">
          <Link href="/" onClick={handleLogoClick} className="text-slate-700 hover:text-indigo-600 transition-colors duration-200">
            Home
          </Link>
          <Link href="/pricing" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200">
            Pricing
          </Link>
          <Link href="/channels" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 whitespace-nowrap">
            Channels List
          </Link>
          <Link href="/how-it-works" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 whitespace-nowrap">
            How It Works
          </Link>
          <Link href="/installation" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 whitespace-nowrap">
            Setup Guide
          </Link>
          <Link href="/blog" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 whitespace-nowrap">
            Blog
          </Link>
          <Link href="/reseller" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 whitespace-nowrap">
            Reseller
          </Link>
          <Link href="/contact" className="text-slate-700 hover:text-indigo-600 transition-colors duration-200 whitespace-nowrap">
            Contact
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 z-20">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20SofaIPTV."
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 transition-all duration-300 shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40"
          >
            Get Started
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-800 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors z-20"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-700">
            <Link href="/" onClick={handleLogoClick} className="hover:text-indigo-600 py-1">Home</Link>
            <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-600 py-1">Pricing</Link>
            <Link href="/channels" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-600 py-1">Channels List</Link>
            <Link href="/how-it-works" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-600 py-1">How It Works</Link>
            <Link href="/installation" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-600 py-1">Setup Guide</Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-600 py-1">Blog</Link>
            <Link href="/reseller" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-600 py-1">Reseller</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-600 py-1">Contact</Link>
          </nav>
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a
              href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20SofaIPTV."
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-3 rounded-full text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 shadow-md"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
