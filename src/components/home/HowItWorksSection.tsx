import Image from "next/image";
import Link from "next/link";

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white text-black relative z-10 border-b border-black/10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
            FAST &amp; SEAMLESS ACTIVATION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            How to Activate Your{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              SofaIPTV Subscription in 3 Simple Steps
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Getting started with SofaIPTV is effortless. Follow our straightforward 3-step setup to unlock instant access to over 50,000 live channels and 200,000+ VOD movies and series on any compatible device.
          </p>
        </div>

        {/* Timeline Steps Container */}
        <div className="relative max-w-[960px] mx-auto mb-20">
          {/* Vertical Dashed Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-indigo-200 hidden md:block" />

          {/* STEP 1 */}
          <div className="relative mb-16 md:mb-20">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                Step One
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg relative border border-slate-200">
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                  <a
                    href="#pricing"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    1. Select Your SofaIPTV Subscription Plan
                  </a>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Browse our flexible IPTV subscription packages and choose the plan that suits your home entertainment setup. As soon as your order is confirmed, our automated system delivers your M3U playlist and Xtream Codes credentials directly via email or{" "}
                  <Link
                    href="/contact"
                    className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors"
                  >
                    WhatsApp
                  </Link>
                  .
                </p>
              </div>

              {/* Right Image */}
              <div className="overflow-hidden rounded-2xl bg-black/5 border border-black/10 shadow-xl">
                <Image
                  src="/sofa-step-1-order.webp"
                  alt="Step 1: Select your SofaIPTV subscription package online"
                  title="SofaIPTV Activation Step 1 - Choose Plan"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative mb-16 md:mb-20">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                Step Two
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Image */}
              <div className="overflow-hidden rounded-2xl bg-black/5 border border-black/10 shadow-xl order-2 md:order-1">
                <Image
                  src="/sofa-step-2-setup.webp"
                  alt="Step 2: Install your preferred IPTV app on Smart TV or Firestick"
                  title="SofaIPTV Activation Step 2 - Install Player"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg relative border border-slate-200 order-1 md:order-2">
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                  <Link
                    href="/installation"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    2. Connect Your Preferred IPTV Player
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Follow our step-by-step{" "}
                  <Link
                    href="/installation"
                    className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors"
                  >
                    IPTV installation tutorials
                  </Link>{" "}
                  to configure your favorite IPTV player—such as IPTV Smarters Pro, TiviMate, or XCIPTV—on Smart TVs, Amazon Firestick, Android boxes, iOS, and PC.
                </p>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative">
            {/* Step Badge */}
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                Step Three
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
              {/* Left Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg relative border border-slate-200">
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                  <Link
                    href="/channels"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    3. Sit Back &amp; Stream 4K IPTV Without Buffering
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Enter your credentials and start watching immediately. Explore 50,000+ live HD and 4K channels, global sports events, and a massive 200,000+ VOD library with our complete{" "}
                  <Link
                    href="/channels"
                    className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors"
                  >
                    channels lineup
                  </Link>
                  , backed by high-speed Anti-Freeze v8.2 servers.
                </p>
              </div>

              {/* Right Image */}
              <div className="overflow-hidden rounded-2xl bg-black/5 border border-black/10 shadow-xl">
                <Image
                  src="/sofa-step-3-watch.webp"
                  alt="Step 3: Sit back and stream 50,000+ live 4K channels and VOD on SofaIPTV"
                  title="SofaIPTV Activation Step 3 - Stream 4K IPTV"
                  width={600}
                  height={380}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
