import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import BrandLogo from "@/components/ui/BrandLogo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "SofaIPTV - #1 Premium 4K IPTV Service | 50,000+ Live Channels & VOD",
  description: "Sit back and stream with SofaIPTV. Over 50,000 live HD & 4K channels, 200,000+ movies & series, anti-freeze servers, 99.9% uptime, and instant 5-minute setup on all devices.",
  metadataBase: new URL("https://www.sofaiptv.site"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SofaIPTV - Premium 4K Live TV & VOD Streaming",
    description: "The ultimate living-room entertainment. Access 50,000+ live worldwide channels, 200,000+ movies & TV series in 4K UHD with zero buffering.",
    url: "https://www.sofaiptv.site",
    siteName: "SofaIPTV",
    images: [
      {
        url: "/sofa-og-image.webp",
        width: 1200,
        height: 630,
        alt: "SofaIPTV - Premium 4K IPTV Service with 50,000+ Live Channels",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SofaIPTV - Premium 4K Live TV & VOD Streaming",
    description: "Stream 50,000+ live channels and 200,000+ movies in 4K UHD with SofaIPTV. Anti-freeze technology, 99.9% uptime, and instant setup.",
    images: ["/sofa-og-image.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.sofaiptv.site/#organization",
      "name": "SofaIPTV",
      "url": "https://www.sofaiptv.site",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.sofaiptv.site/#logo",
        "url": "https://www.sofaiptv.site/icon.png",
        "caption": "SofaIPTV Official Brand Logo"
      },
      "image": {
        "@type": "ImageObject",
        "@id": "https://www.sofaiptv.site/#primaryimage",
        "url": "https://www.sofaiptv.site/sofa-og-image.webp",
        "width": 1200,
        "height": 630,
        "caption": "SofaIPTV 4K Ultra HD IPTV Streaming",
        "copyrightHolder": {
          "@type": "Organization",
          "name": "SofaIPTV"
        }
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.sofaiptv.site/#website",
      "url": "https://www.sofaiptv.site",
      "name": "SofaIPTV",
      "publisher": {
        "@id": "https://www.sofaiptv.site/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${geist.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-background text-on-background font-body-lg min-h-screen flex flex-col antialiased selection:bg-indigo-600 selection:text-white">
        {/* Navbar Component */}
        <Navbar />

        <div className="flex-grow pt-[116px] flex flex-col">{children}</div>

        {/* Footer */}
        <footer className="w-full mt-auto border-t border-slate-200 bg-white">
          <div className="grid max-w-[1400px] grid-cols-2 gap-x-4 gap-y-12 px-6 py-16 sm:grid-cols-4 sm:gap-x-8 sm:px-10 xl:grid-cols-[1.8fr_1fr_1fr_1fr_1fr] xl:gap-10 xl:px-12 mx-auto">
            <div className="col-span-2 sm:col-span-4 xl:col-span-1 min-w-0 max-w-[310px] space-y-4">
              <Link href="/"><BrandLogo /></Link>
              <p className="max-w-[285px] whitespace-normal break-normal text-sm leading-6 text-slate-600">
                © 2026 SofaIPTV. The premier 4K home entertainment & IPTV streaming service. All rights reserved.
              </p>
              <a href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20SofaIPTV" target="_blank" rel="noreferrer" className="flex max-w-[270px] items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.08] p-3.5 transition-colors hover:bg-emerald-500/[0.15] group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-105">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-emerald-500">Fast support</span>
                  <span className="block whitespace-nowrap text-base font-bold text-slate-950">WhatsApp</span>
                </span>
              </a>
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600"><span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> All servers online · 99.9% uptime</p>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-900"><span className="border-b-2 border-indigo-600 pb-1.5">NAVIGATION</span></p>
              <ul className="space-y-3 font-body-sm text-sm">
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/">Home</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/pricing">Pricing</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/channels">Channels</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/#how-it-works">How It Works</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/installation">Installation</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/faq">FAQ</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/blog">Blog</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-900"><span className="border-b-2 border-indigo-600 pb-1.5">SERVICE</span></p>
              <ul className="space-y-3 font-body-sm text-sm">
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/pricing">Get Started</Link></li>
                <li><a className="text-slate-600 transition-colors hover:text-indigo-600" href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20SofaIPTV" target="_blank" rel="noreferrer">WhatsApp Support</a></li>
                <li><a className="text-slate-600 transition-colors hover:text-indigo-600" href="mailto:support@sofaiptv.site">support@sofaiptv.site</a></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/channels">Global Channel Directory</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/reseller">Reseller Program</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-900"><span className="border-b-2 border-indigo-600 pb-1.5">LEGAL & TRUST</span></p>
              <ul className="space-y-3 text-sm">
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/refund-policy">Refund Policy</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/dmca">DMCA Notice</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-indigo-600" href="/installation">Setup Guides</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-900"><span className="border-b-2 border-indigo-600 pb-1.5">ACCEPTED PAYMENTS</span></p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2"><span>💳</span> Credit & Debit Card</li>
                <li className="flex items-center gap-2"><span>🅿️</span> PayPal</li>
                <li className="flex items-center gap-2"><span>₿</span> Bitcoin & Crypto</li>
                <li className="flex items-center gap-2"><span>🔒</span> 256-Bit SSL Encrypted</li>
              </ul>
            </div>
            
            <div className="col-span-2 mt-8 flex flex-col gap-6 border-t border-slate-200 pt-8 text-xs text-slate-600 sm:col-span-4 md:flex-row md:items-center md:justify-between xl:col-span-5">
              <div className="flex flex-wrap gap-3">
                <Link className="rounded-full border border-slate-200 px-4 py-2 transition-colors hover:bg-slate-100 hover:text-slate-950" href="/privacy-policy">Privacy Policy</Link>
                <Link className="rounded-full border border-slate-200 px-4 py-2 transition-colors hover:bg-slate-100 hover:text-slate-950" href="/refund-policy">Refund Policy</Link>
                <Link className="rounded-full border border-slate-200 px-4 py-2 transition-colors hover:bg-slate-100 hover:text-slate-950" href="/dmca">DMCA</Link>
              </div>
              <p className="text-slate-500">
                SofaIPTV · www.sofaiptv.site · High Speed 4K Streaming
              </p>
            </div>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  );
}
