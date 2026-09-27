import { Tv, Box, Laptop } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DeviceSupport() {
  return (
    <section className="py-24 bg-slate-50 text-black relative z-10 border-y border-black/10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3 block">
            MULTI-DEVICE IPTV COMPATIBILITY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            Stream SofaIPTV Seamlessly on{" "}
            <Link
              href="/installation"
              className="text-indigo-600 hover:text-cyan-600 transition-colors"
            >
              All Your Favorite Devices
            </Link>
          </h2>
        </div>

        {/* Center Image Display */}
        <div className="relative mx-auto max-w-[800px] mb-16 group">
          {/* Subtle background glow for the image */}
          <div className="absolute inset-0 bg-indigo-500/10 blur-[80px] rounded-full scale-90 -z-10 group-hover:bg-indigo-500/20 transition-all duration-700"></div>
          
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/sofa-devices-banner.webp"
              alt="Multi-device IPTV streaming compatibility on Smart TVs, Firestick, PC and Mobile with SofaIPTV"
              title="SofaIPTV Multi-Device Streaming Compatibility"
              width={1200}
              height={500}
              sizes="(max-width: 1024px) 100vw, 800px"
              className="w-full aspect-[21/9] sm:aspect-[2.5/1] object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* 3-Column Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="relative bg-white rounded-2xl p-8 border-y border-r border-slate-200 border-l-4 border-l-indigo-600 shadow-lg hover:shadow-xl hover:border-indigo-200 hover:border-l-indigo-600 transition-all duration-300 group overflow-hidden">
            <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Tv className="h-6 w-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">
              Smart TVs, Android Boxes &amp; Firestick
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              SofaIPTV delivers high-performance streaming across Amazon Fire TV Stick, Google TV, Samsung Tizen, LG webOS, and Android TV boxes. Follow our step-by-step{" "}
              <Link
                href="/installation"
                className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors"
              >
                installation guide
              </Link>{" "}
              for rapid, zero-hassle activation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-2xl p-8 border-y border-r border-slate-200 border-l-4 border-l-indigo-600 shadow-lg hover:shadow-xl hover:border-indigo-200 hover:border-l-indigo-600 transition-all duration-300 group overflow-hidden">
            <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Box className="h-6 w-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">
              MAG Boxes &amp; Dedicated Hardware
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Experience native hardware portal streaming on your MAG box or Formuler device. Provide your device MAC address during order setup, and we instantly configure your high-speed SofaIPTV portal for immediate access to our{" "}
              <Link
                href="/channels"
                className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors"
              >
                full VOD library
              </Link>
              .
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white rounded-2xl p-8 border-y border-r border-slate-200 border-l-4 border-l-indigo-600 shadow-lg hover:shadow-xl hover:border-indigo-200 hover:border-l-indigo-600 transition-all duration-300 group overflow-hidden">
            <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Laptop className="h-6 w-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">
              Smartphones, Tablets, Mac &amp; Windows PC
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Never miss a live match or movie night while away from your living room. SofaIPTV streams smoothly on iOS, Android smartphones, iPads, and PCs using top{" "}
              <Link
                href="/installation"
                className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors"
              >
                IPTV players
              </Link>{" "}
              such as TiviMate, IPTV Smarters Pro, and XCIPTV.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
