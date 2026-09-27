import Link from 'next/link';
import { Tv, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function BlogOfferCard() {
  return (
    <div className="my-8 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 border border-indigo-500/30 shadow-xl relative overflow-hidden group text-white">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-indigo-500/20 border border-indigo-500/30 text-cyan-300 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Premium Offer
            </span>
            <span className="text-indigo-200 text-sm font-semibold tracking-wider">SOFAIPTV 4K</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
            Upgrade to SofaIPTV Premium 4K
          </h3>
          <p className="text-slate-300 mb-4 text-base md:text-lg">
            Experience buffer-free entertainment with 50,000+ live channels and 200,000+ on-demand movies &amp; series in pristine 4K.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 md:mb-0">
            <li className="flex items-center text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
              <span>4K &amp; Full HD Quality</span>
            </li>
            <li className="flex items-center text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
              <span>Anti-Freeze v8.2 Tech</span>
            </li>
            <li className="flex items-center text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
              <span>All Devices Supported</span>
            </li>
            <li className="flex items-center text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
              <span>Instant 5-Min Activation</span>
            </li>
          </ul>
        </div>
        
        <div className="w-full md:w-auto shrink-0 flex flex-col items-center">
          <div className="mb-4 text-center">
            <span className="text-sm text-slate-400 block mb-1">Starting at</span>
            <div className="text-4xl font-extrabold text-white flex items-end justify-center">
              $14.99<span className="text-lg text-slate-400 font-normal ml-1">/mo</span>
            </div>
          </div>
          <Link 
            href="/pricing"
            className="w-full md:w-auto flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1 group/btn"
          >
            <Tv className="w-5 h-5 mr-2" />
            Get SofaIPTV Plan
            <ChevronRight className="w-5 h-5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
          <p className="text-xs text-slate-400 mt-3 text-center">7-Day Money-Back Guarantee</p>
        </div>
      </div>
    </div>
  );
}
