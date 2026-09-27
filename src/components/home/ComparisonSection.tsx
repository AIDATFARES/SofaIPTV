import Link from "next/link";

export default function ComparisonSection() {
  return (
    <section className="bg-white text-slate-950 relative z-10 border-b border-slate-200 overflow-hidden py-20">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
            SOFAIPTV VS CABLE &amp; GENERIC IPTV
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Why SofaIPTV is the Smarter IPTV Subscription Choice
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Cut the cord without compromising quality. SofaIPTV combines 50,000+ live television channels, a massive 200,000+ on-demand library, and rock-solid anti-freeze server architecture—delivering premium entertainment at a fraction of traditional cable prices.
          </p>
        </div>

        <div className="max-w-[1080px] mx-auto overflow-x-auto pb-4 px-4 sm:px-0">
          <div className="min-w-[800px] bg-white rounded-2xl shadow-xl border-2 border-indigo-600 overflow-hidden relative flex">
            
            {/* Side Design Element (Internal Link) */}
            <Link 
              href="/how-it-works"
              className="w-14 bg-gradient-to-b from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 transition-colors flex items-center justify-center group cursor-pointer shrink-0 border-r border-indigo-700/20 shadow-[inset_-4px_0_10px_rgba(0,0,0,0.1)]"
              title="Learn How SofaIPTV Works"
            >
              <span className="-rotate-90 text-white font-black tracking-[0.2em] uppercase whitespace-nowrap text-xs sm:text-sm group-hover:scale-110 transition-transform">
                How It Works
              </span>
            </Link>

            <div className="flex-grow">
              {/* Table Header */}
              <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200">
                <div className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider">Feature</div>
                <div className="p-6 text-sm font-black text-indigo-600 uppercase tracking-wider text-center border-x border-slate-200 bg-indigo-50/60">SofaIPTV</div>
                <div className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider text-center">Cable / Satellite</div>
                <div className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider text-center border-l border-slate-200">Generic IPTV</div>
              </div>

              {/* Table Rows */}
              {[
                { feature: "Monthly Cost", sofa: "From $4.2/mo", cable: "$80-$200/mo", other: "$10-$30/mo (unreliable)" },
                { feature: "Live Channels", sofa: "50,000+", cable: "200-500", other: "5,000-15,000" },
                { feature: "4K Streaming", sofa: "✓ Native 4K & 60fps", cable: "Limited", other: "Rarely stable" },
                { feature: "VOD Library", sofa: "200,000+ titles", cable: "Add-on cost", other: "Varies wildly" },
                { feature: "Server Uptime", sofa: "99.9% guaranteed", cable: "99%", other: "60-85%" },
                { feature: "Buffering", sofa: "Zero — Anti-freeze v8.2", cable: "Rare", other: "Common at peak hours" },
                { feature: "Setup Time", sofa: "5 minutes", cable: "Technician visit", other: "Varies" },
                { feature: "Contract", sofa: "No contract", cable: "12-24 months", other: "Sometimes" },
                { feature: "Multi-Screen", sofa: "✓ Included", cable: "Extra cost", other: "Limited" },
                { feature: "Free Trial", sofa: "✓ Available", cable: "No", other: "Rare" },
              ].map((row, idx) => (
                <div key={idx} className={`grid grid-cols-4 border-b border-slate-100 hover:bg-slate-50 transition-colors ${idx === 9 ? 'border-b-0' : ''}`}>
                  <div className="p-5 text-sm font-bold text-slate-800 flex items-center">{row.feature}</div>
                  <div className="p-5 text-sm font-extrabold text-indigo-950 text-center flex items-center justify-center border-x border-slate-100 bg-indigo-50/40">
                    {row.sofa}
                  </div>
                  <div className="p-5 text-sm font-medium text-slate-500 text-center flex items-center justify-center">
                    {row.cable}
                  </div>
                  <div className="p-5 text-sm font-medium text-slate-500 text-center flex items-center justify-center border-l border-slate-100">
                    {row.other}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-indigo-600/30 hover:from-indigo-500 hover:to-cyan-500 transition-all hover:scale-105"
          >
            Choose Your SofaIPTV Plan →
          </a>
        </div>
      </div>
    </section>
  );
}
