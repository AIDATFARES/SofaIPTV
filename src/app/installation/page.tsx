import type { Metadata } from "next";
import Link from "next/link";
import DeviceSetupGuide from "@/components/installation/DeviceSetupGuide";
import BrandMarquee from "@/components/home/BrandMarquee";
import { Clock3, Download, Headphones, Link2, Monitor, PlayCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "SofaIPTV Installation Guide - Easy 3-Step Setup for Firestick, Smart TV, Android & iOS",
  description:
    "Step-by-step setup instructions for SofaIPTV. Learn how to configure your IPTV subscription on Amazon Firestick, Samsung & LG Smart TVs, Android boxes, Apple TV, MAG, and Windows/Mac in under 5 minutes.",
  alternates: {
    canonical: "/installation",
  },
  openGraph: {
    title: "SofaIPTV Installation Guide - Fast 3-Step Setup",
    description:
      "Configure SofaIPTV on any Smart TV, Firestick, Android box, or Apple device in under 5 minutes with our step-by-step guides.",
    url: "/installation",
    type: "website",
  },
};

export default function Installation() {
  return (
    <main className="mx-auto w-full max-w-[1440px] flex-grow px-5 pb-20 pt-6 sm:px-8 sm:pt-8 md:px-12 text-format-technical">
      <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
        <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-50/50 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-indigo-600">SofaIPTV Installation Guide</span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
          <span className="block text-black">How to Install SofaIPTV</span>
          <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">On Any Device in 5 Minutes.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-6 text-slate-600">Follow our comprehensive step-by-step setup guides to configure SofaIPTV on Smart TVs, Amazon Firestick, Android devices, Apple iOS, MAG boxes, and PC.</p>
        <p className="mx-auto mt-2 max-w-2xl text-base leading-6 text-slate-600">Ready to stream? Choose your <Link className="font-semibold text-indigo-600 hover:text-cyan-600" href="/pricing">SofaIPTV Subscription Plan</Link> or preview our full <Link className="font-semibold text-indigo-600 hover:text-cyan-600" href="/channels">SofaIPTV Channel Lineup</Link> before you begin.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-x-9 gap-y-4 text-sm font-semibold text-slate-700">
          <span className="inline-flex items-center gap-2"><Monitor className="h-4 w-4 text-indigo-600" />15+ Devices Supported</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-cyan-600" />5–10 Minutes Setup</span>
          <span className="inline-flex items-center gap-2"><Headphones className="h-4 w-4 text-indigo-600" />24/7 Setup Support</span>
        </div>
      </header>

      <section className="mb-20 border-y border-black/[0.07] bg-slate-50/50 py-14 sm:mb-24 sm:py-16">
        <div className="mx-auto max-w-[1000px] px-5">
          <header className="mx-auto mb-10 max-w-[560px] text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-black">Quick 3-Step SofaIPTV Setup Guide</h2>
            <p className="mt-3 text-slate-600">Activate your IPTV subscription effortlessly with three simple steps.</p>
          </header>
          <div className="grid gap-8 md:grid-cols-3">
            <QuickStartCard icon={Download} step="1" title="Download IPTV Player">Download and install a compatible IPTV player such as IPTV Smarters Pro, TiviMate, XCIPTV, or IBO Player from your device app store.</QuickStartCard>
            <QuickStartCard icon={Link2} step="2" title="Input Credentials">Enter your SofaIPTV Xtream Codes credentials or M3U playlist URL, delivered immediately to your email or WhatsApp upon order.</QuickStartCard>
            <QuickStartCard icon={PlayCircle} step="3" title="Stream 4K IPTV">Sit back and enjoy instant, buffer-free streaming across 50,000+ live HD and 4K channels, live sports, and 200,000+ VODs.</QuickStartCard>
          </div>

          {/* Apps Platform Logos Banner */}
          <div className="mt-16 border-t border-black/[0.05] pt-12">
            <h3 className="text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">Supported on all your favorite devices</h3>
            <BrandMarquee 
              imagesFolder="devices" 
              images={[
                "sofa-device-amazon-fire-tv-stick.webp",
                "sofa-device-apple-tv-4k.webp",
                "sofa-device-hisense-smart-tv.webp",
                "sofa-device-iptv-smarters-app.webp",
                "sofa-device-lg-smart-tv.webp",
                "sofa-device-nvidia-shield-pro.webp",
                "sofa-device-android-tv-box.webp",
                "sofa-device-sony-bravia-tv.webp",
                "sofa-device-smart-tv-media-box.webp",
                "sofa-device-windows-mac-pc.webp",
                "sofa-device-xbox-playstation-console.webp"
              ]}
              cardClassName="flex-shrink-0 w-[160px] h-[80px] md:w-[220px] md:h-[100px] relative bg-white border border-slate-200 rounded-2xl p-4 md:p-6 hover:border-indigo-300 transition-all duration-300 shadow-sm flex items-center justify-center"
              imageClassName="object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </section>

      <DeviceSetupGuide />

      <section className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-black">Need Help Installing SofaIPTV?</h2>
        <p className="mt-2 text-slate-600">Our dedicated technical support team is online 24/7 on WhatsApp to assist you with device configuration and activation.</p>
        <Link className="mt-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-50 px-7 py-3 font-semibold text-indigo-700 transition-colors hover:bg-indigo-100" href="/contact">
          Contact SofaIPTV Technical Support
        </Link>
      </section>
    </main>
  );
}

function QuickStartCard({ children, icon: Icon, step, title }: { children: React.ReactNode; icon: typeof Download; step: string; title: string }) {
  return (
    <article className="flex flex-col rounded-2xl border-2 border-indigo-500/20 bg-white overflow-hidden shadow-lg hover:border-indigo-500 hover:-translate-y-1 transition-all duration-300">
      <div className="p-7 text-center flex-1 flex flex-col items-center">
        <Icon className="h-10 w-10 text-indigo-600 mb-5" strokeWidth={1.5} />
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-sm font-extrabold text-white shadow-md mb-3">{step}</span>
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{children}</p>
      </div>
    </article>
  );
}
