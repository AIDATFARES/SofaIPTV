import { Monitor, Globe2, Tv, Headphones } from "lucide-react";

export default function ChannelCategories() {
  const features = [
    {
      icon: Monitor,
      title: "Multi-Device Compatibility",
      desc: "SofaIPTV connects seamlessly on Firestick, Smart TVs, Android boxes, Apple TV, iOS, Windows, and MAG devices.",
    },
    {
      icon: Globe2,
      title: "Global IPTV Channels & VOD",
      desc: "Access 50,000+ worldwide live television channels and 200,000+ on-demand titles powered by dedicated high-bandwidth server clusters.",
    },
    {
      icon: Tv,
      title: "Anti-Freeze 4K & FHD 60FPS",
      desc: "Stream buffer-free sports, pay-per-view broadcasts, and cinematic movies with advanced anti-freeze server stabilization.",
    },
    {
      icon: Headphones,
      title: "24/7 Dedicated Support",
      desc: "Our human technical team assists you with setup, playlist activation, and player configuration round the clock via WhatsApp.",
    },
  ];

  return (
    <section className="relative z-10 bg-white py-16 text-black sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        
        {/* Heading above Feature Box */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-indigo-600"></span>
            <span className="text-indigo-600 text-sm font-bold tracking-[0.2em] uppercase">Premium IPTV Features</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-500"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight leading-tight animate-fade-up">
            Sit Back &amp; Relax with <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">SofaIPTV — Premium 4K Streaming Made Simple.</span>
          </h2>
        </div>

        {/* Indigo / Cyan Gradient Feature Box */}
        <div 
          className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 rounded-2xl md:rounded-3xl p-8 md:p-12 mb-20 shadow-[0_15px_50px_rgba(79,70,229,0.25)] border border-indigo-500/20 animate-fade-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-sm text-cyan-400">
                    <Icon className="w-8 h-8" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-indigo-100/80 text-[14px] leading-relaxed max-w-[280px] mx-auto font-normal">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
