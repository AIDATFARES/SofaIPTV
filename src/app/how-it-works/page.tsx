import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MonitorSmartphone, ShieldCheck, Zap, Globe2, Headphones, Tv } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SofaIPTV: How It Works - 3 Easy Steps to Instant 4K Streaming Setup",
  description:
    "Discover how SofaIPTV works. Choose your package, install on your favorite device, and start streaming 50,000+ live 4K channels and 200,000+ VODs in minutes with zero technical hassle.",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "SofaIPTV: How It Works - 3 Easy Steps to Instant 4K Streaming Setup",
    description:
      "Discover how SofaIPTV works. Choose your package, install on your favorite device, and start streaming 50,000+ live 4K channels and 200,000+ VODs in minutes with zero technical hassle.",
    url: "/how-it-works",
    type: "website",
  },
};

const steps = [
  {
    badge: "Step One",
    title: "1. Select Your Subscription Plan",
    description: (
      <>
        Choose the ideal IPTV subscription package for your household from our{" "}
        <Link href="/pricing" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">
          pricing plans
        </Link>
        . Complete secure checkout and receive your M3U playlist and Xtream Codes credentials within minutes by email or{" "}
        <Link href="/contact" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">
          WhatsApp
        </Link>
        .
      </>
    ),
    image: "/sofa-step-1-order.webp",
    imageAlt: "Step 1: Select your SofaIPTV subscription package online",
    imageTitle: "SofaIPTV Activation Step 1 - Choose Plan",
    align: "left" as const,
  },
  {
    badge: "Step Two",
    title: "2. Fast Device Installation",
    description: (
      <>
        Follow our simple{" "}
        <Link href="/installation" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">
          IPTV installation guide
        </Link>{" "}
        to configure SofaIPTV on your Smart TV, Firestick, Android device, iOS, or PC in under 5 minutes.
      </>
    ),
    image: "/sofa-step-2-setup.webp",
    imageAlt: "Step 2: Install your preferred IPTV app on Smart TV or Firestick",
    imageTitle: "SofaIPTV Activation Step 2 - Install Player",
    align: "right" as const,
  },
  {
    badge: "Step Three",
    title: "3. Sit Back & Stream 4K IPTV",
    description: (
      <>
        Stream live sports in 60fps, 50,000+ live television channels, and 200,000+ on-demand movies &amp; series directly from our complete{" "}
        <Link href="/channels" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">
          channels catalog
        </Link>{" "}
        with zero buffering.
      </>
    ),
    image: "/sofa-step-3-watch.webp",
    imageAlt: "Step 3: Sit back and stream 50,000+ live 4K channels and VOD on SofaIPTV",
    imageTitle: "SofaIPTV Activation Step 3 - Stream 4K IPTV",
    align: "left" as const,
  },
];

const features = [
  {
    icon: Tv,
    title: "Premium SofaIPTV Subscriptions",
    description:
      "Experience uninterrupted 4K and FHD streaming. Choose from 3, 6, or 12-month packages with unlimited access to our live TV and VOD entertainment library.",
    link: "/pricing",
  },
  {
    icon: Globe2,
    title: "50,000+ Channels & 200,000+ VODs",
    description:
      "Unlock over 50,000 live worldwide channels and 200,000+ on-demand movies and complete series for the ultimate cord-cutting experience.",
    link: "/channels",
  },
  {
    icon: MonitorSmartphone,
    title: "Live TV & TV Guide (EPG)",
    description:
      "Enjoy synchronized TV guide (EPG) schedules, catch-up replay, and live sports broadcasting at smooth 60FPS on any device.",
    link: "/installation",
  },
];

const benefits = [
  { icon: ShieldCheck, text: "Secure & encrypted checkout" },
  { icon: Zap, text: "Instant automated delivery in 5 minutes" },
  { icon: Headphones, text: "24/7 dedicated human support" },
  { icon: MonitorSmartphone, text: "Works on all smart devices" },
  { icon: Globe2, text: "150+ countries covered" },
  { icon: Check, text: "No contracts or hidden fees" },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-white pt-8 sm:pt-10 pb-16 sm:pb-20 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/60 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-50/50 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-600">
            SIMPLE 3-STEP SETUP
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            <span className="text-black">How SofaIPTV Works:</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">3 Steps to 4K Streaming</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
            Setting up your{" "}
            <Link href="/pricing" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">
              SofaIPTV subscription
            </Link>{" "}
            takes just 5 minutes. Choose your plan, connect your favorite IPTV player, and start streaming live TV and 200,000+ VOD titles buffer-free.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white font-bold px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(79,70,229,0.3)] hover:bg-indigo-700 hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)] transition-all"
            >
              View Plans <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/installation"
              className="inline-flex items-center justify-center gap-2 border border-indigo-200 bg-white text-indigo-600 font-bold px-8 py-3.5 rounded-full hover:bg-indigo-50 transition-all"
            >
              Installation Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Steps */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[960px] px-6 relative">
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-indigo-200 hidden md:block" />

          {steps.map((step, i) => (
            <div key={i} className={`relative ${i < steps.length - 1 ? "mb-20" : ""}`}>
              <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
                <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                  {step.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
                <div
                  className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 ${
                    step.align === "right" ? "order-1 md:order-2" : ""
                  }`}
                >
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>

                <div
                  className={`overflow-hidden rounded-2xl border border-slate-100 shadow-sm ${
                    step.align === "right" ? "order-2 md:order-1" : ""
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    title={step.imageTitle}
                    width={600}
                    height={380}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started Showcase */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-100">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
              Getting Started with <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">SofaIPTV</span> Is Simple
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Experience the future of television with reliable 4K IPTV streaming. Watch{" "}
              <Link href="/channels" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">
                live TV channels
              </Link>
              , global sports, and on-demand entertainment anywhere, anytime.
            </p>
          </div>

          <div className="space-y-16 max-w-[1080px] mx-auto">
            {/* Feature Block 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <Image
                  src="/sofa-getting-started-1.webp"
                  alt="Complete SofaIPTV Subscription Experience - 4K Streams with Anti-Freeze"
                  title="SofaIPTV 4K Ultra HD Subscription Overview"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                  <Link href="/pricing" className="hover:text-indigo-600 transition-colors">
                    Complete SofaIPTV Subscription Experience
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Enjoy uninterrupted IPTV 4K and FHD streaming backed by our Anti-Freeze v8.2 technology. Choose from 3, 6, or 12-month packages and experience continuous entertainment with full access to our{" "}
                  <Link href="/channels" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">
                    streaming library
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Feature Block 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                  <Link href="/channels" className="hover:text-indigo-600 transition-colors">
                    50,000+ Live Channels &amp; 200,000+ VODs on All Devices
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Unlock a world of entertainment with over{" "}
                  <Link href="/channels" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">
                    50,000 live channels and 200,000+ films &amp; series
                  </Link>{" "}
                  for the ultimate viewing experience. Check out our{" "}
                  <Link href="/pricing" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">
                    subscription plans
                  </Link>{" "}
                  to start watching immediately.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm order-1 md:order-2">
                <Image
                  src="/sofa-getting-started-2.webp"
                  alt="50,000+ Live Channels & 200,000+ VODs on all smart devices with SofaIPTV"
                  title="SofaIPTV Live Channels and On-Demand Catalog"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Feature Block 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <Image
                  src="/sofa-getting-started-3.webp"
                  alt="Live TV and TV Guide EPG on SofaIPTV with catch-up playback"
                  title="SofaIPTV Electronic Program Guide (EPG) Feature"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                  <Link href="/installation" className="hover:text-indigo-600 transition-colors">
                    Live TV with Synchronized TV Guide (EPG) &amp; Replay
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  With SofaIPTV you get access to an interactive TV guide (EPG), Live TV, and catchup replay options. Read our{" "}
                  <Link href="/installation" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">
                    IPTV setup guide
                  </Link>{" "}
                  or explore our{" "}
                  <Link href="/faq" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">
                    FAQ support
                  </Link>{" "}
                  for complete device instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#f8fafc] border-y border-slate-100">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black uppercase">
              Stream on Your <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Terms</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Enjoy high quality IPTV streaming with SofaIPTV. Watch{" "}
              <Link href="/channels" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">
                live TV channels
              </Link>
              , movies, and sports anytime, anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={i}
                  href={feature.link}
                  className="group flex flex-col rounded-2xl bg-white p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-black">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 flex-grow">
                    {feature.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-black text-black mb-10 uppercase">
            Why Choose <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">SofaIPTV</span>?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-indigo-600 shrink-0" strokeWidth={2.5} />
                  <span className="text-sm font-bold text-black">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase">
            Ready to Start Streaming with SofaIPTV?
          </h2>
          <p className="mt-4 text-lg text-indigo-100/90 font-medium">
            Join thousands of satisfied cord-cutters. Get instant access to 50,000+ live channels and 200,000+ VOD movies and series.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20SofaIPTV."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:from-indigo-400 hover:to-cyan-400 transition-all"
            >
              Get Free Trial <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
