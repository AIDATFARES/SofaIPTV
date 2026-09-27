import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import Link from "next/link";
import TopFeatureBar from "@/components/home/TopFeatureBar";
import BrandMarquee from "@/components/home/BrandMarquee";
import MovieStrips from "@/components/home/MovieStrips";
import ChannelCategories from "@/components/home/ChannelCategories";
import DeviceSupport from "@/components/home/DeviceSupport";
import ComparisonSection from "@/components/home/ComparisonSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import LatestArticlesSection from "@/components/home/LatestArticlesSection";
import SupportCtaSection from "@/components/home/SupportCtaSection";

export const metadata: Metadata = {
  title: "SofaIPTV - #1 Premium 4K IPTV Service | 50,000+ Live Channels & 200,000+ VODs",
  description: "Sit back and stream with SofaIPTV. Access 50,000+ live HD/4K channels, 200,000+ movies & series, anti-freeze 10.0 technology, and instant 5-minute activation on all devices. Claim your free trial today!",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex-col flex min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition & Brand Marquee */}
      <BrandMarquee />
      <TopFeatureBar />
      <MovieStrips />
      <BrandMarquee 
        imagesFolder="channel2" 
        images={[
          "sofa-sports-mls-inter-miami.webp",
          "sofa-sports-laliga-el-clasico.webp",
          "sofa-sports-al-toreo-culture.webp",
          "sofa-sports-ligue-1-football.webp",
          "sofa-sports-uefa-champions-league.webp",
          "sofa-sports-nba-playoffs-basketball.webp",
          "sofa-sports-tennis-atp-champions.webp",
          "sofa-sports-bundesliga-soccer.webp",
          "sofa-sports-serie-a-calcio.webp",
          "sofa-sports-combat-ufc-boxing.webp",
          "sofa-sports-formula-1-gp.webp",
          "sofa-sports-nfl-american-football.webp",
          "sofa-sports-premier-league-soccer.webp",
          "sofa-sports-world-cricket-rugby.webp",
          "sofa-sports-pga-golf-tour.webp"
        ]}
        cardClassName="flex-shrink-0 w-[140px] h-[200px] md:w-[200px] md:h-[280px] relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white hover:border-indigo-500/60 transition-all duration-300 group"
        imageClassName="object-cover rounded-xl"
      />

      {/* Channel & Installation Quick Links */}
      <div className="w-full bg-white py-6 px-4 text-center border-t border-slate-100 relative z-20">
        <p className="text-center text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
          Explore our complete lineup in the <Link prefetch={false} className="font-semibold text-indigo-600 hover:text-cyan-600" href="/channels">SofaIPTV Global Channel List</Link> or follow our quick <Link prefetch={false} className="font-semibold text-indigo-600 hover:text-cyan-600" href="/installation">SofaIPTV Installation Guide</Link> for rapid 5-minute activation.
        </p>
      </div>

      <PricingSection />
      <ChannelCategories />

      {/* Device Support & How It Works */}
      <ComparisonSection />
      <DeviceSupport />
      
      {/* Device Logos Marquee */}
      <div className="w-full bg-white border-t border-slate-100 pt-12 pb-6 relative z-10">
        <h3 className="text-center text-sm font-bold tracking-widest text-slate-400 uppercase mb-8">SofaIPTV Stream Compatibility Across All Your Devices</h3>
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
          cardClassName="flex-shrink-0 w-[160px] h-[80px] md:w-[220px] md:h-[100px] relative bg-white border border-slate-200 rounded-2xl p-4 md:p-6 hover:border-indigo-300 transition-all duration-300 shadow-md flex items-center justify-center"
          imageClassName="object-contain drop-shadow-sm"
        />
      </div>

      <HowItWorksSection />

      {/* Info & Articles */}
      <FAQSection />
      <LatestArticlesSection />

      {/* Social Proof & Conversion */}
      <SupportCtaSection />
    </main>
  );
}
