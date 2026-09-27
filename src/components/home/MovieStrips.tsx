import Image from "next/image";
import Link from "next/link";

export default function MovieStrips() {
  const channelImages = [
    {
      src: "sofa-vod-prime-video-4k.webp",
      alt: "Stream Amazon Prime Video movies and originals in 4K with SofaIPTV",
      title: "SofaIPTV 4K Streaming - Prime Video"
    },
    {
      src: "sofa-vod-hbo-max-series.webp",
      alt: "Watch HBO Max exclusive series and on-demand movies on SofaIPTV",
      title: "SofaIPTV 4K VOD - HBO Max"
    },
    {
      src: "sofa-vod-netflix-cinema.webp",
      alt: "Stream Netflix movies, documentaries, and full boxsets on SofaIPTV",
      title: "SofaIPTV 4K Streaming - Netflix"
    },
    {
      src: "sofa-vod-hulu-original-shows.webp",
      alt: "Watch Hulu original series and trending entertainment on SofaIPTV",
      title: "SofaIPTV 4K Streaming - Hulu"
    },
    {
      src: "sofa-vod-apple-tv-plus-4k.webp",
      alt: "Stream Apple TV+ originals and 4K cinema productions on SofaIPTV",
      title: "SofaIPTV 4K Streaming - Apple TV+"
    },
    {
      src: "sofa-vod-disney-plus-family.webp",
      alt: "Watch Disney+ family animations and blockbusters in 4K on SofaIPTV",
      title: "SofaIPTV 4K Streaming - Disney+"
    }
  ];

  return (
    <section className="w-full overflow-hidden bg-white py-16 relative flex flex-col gap-6">
      {/* Section Header */}
      <div className="text-center mb-8 px-4 z-20">
        <span className="inline-block py-1 px-4 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 text-xs font-bold tracking-widest uppercase mb-4">
          Massive IPTV Entertainment Library
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">
          THE ULTIMATE <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">4K IPTV &amp; VOD</span> EXPERIENCE
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base mb-8">
          Immerse yourself in SofaIPTV&apos;s curated library of 200,000+ on-demand movies and full TV series. Stream the newest cinema releases, binge-worthy dramas, and timeless classics in pristine 4K UHD and Full HD—accessible anytime, on any device.
        </p>
        <Link 
          href="/channels"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-indigo-600 text-indigo-600 text-sm md:text-base font-semibold bg-indigo-50/50 hover:bg-indigo-600 hover:text-white transition-all duration-300 gap-2 shadow-sm"
        >
          Explore SofaIPTV Channels &amp; VOD <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      {/* Top Strip (Right to Left) */}
      <div className="relative flex w-max items-center">
        <div className="flex gap-4 md:gap-6 px-2 md:px-3 animate-marquee" style={{ animationDuration: '30s' }}>
          {[...channelImages, ...channelImages, ...channelImages, ...channelImages, ...channelImages].map((item, i) => (
            <div key={i} className="flex-shrink-0 w-[140px] h-[200px] md:w-[200px] md:h-[300px] relative rounded-xl overflow-hidden shadow-2xl border border-black/5 hover:scale-105 hover:border-indigo-500/30 hover:z-10 transition-all duration-300">
              <Image 
                src={`/channel/${item.src}`} 
                alt={item.alt} 
                title={item.title}
                fill 
                sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 200px" 
                className="object-cover" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}
