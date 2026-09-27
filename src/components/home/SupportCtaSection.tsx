import { Mail, MessageSquare } from "lucide-react";

export default function SupportCtaSection() {
  return (
    <section className="border-t border-black/10 bg-white px-5 py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div
        className="relative z-10 mx-auto flex max-w-[565px] flex-col gap-8 rounded-[22px] border border-black/10 bg-white p-8 shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <div className="max-w-[310px]">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-600">
            <MessageSquare className="h-5 w-5" />
          </span>
          <h2 className="mt-5 text-3xl font-black uppercase italic leading-[0.9] tracking-tight text-black sm:text-4xl">
            <span className="block">Have An IPTV</span>
            <span className="block bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Question?</span>
          </h2>
          <p className="mt-4 text-sm leading-5 text-slate-600">
            Our SofaIPTV support specialists are online 24/7 with under 5-minute response times on WhatsApp. Real streaming experts ready to assist you right now.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2.5 sm:w-40">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:bg-emerald-500 hover:scale-105"
            href="https://wa.me/213552069874?text=Hello%2C%20I%20have%20a%20question%20about%20SofaIPTV."
            rel="noreferrer"
            target="_blank"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Ask on WhatsApp
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wide text-black transition-all hover:border-indigo-500/30 hover:bg-indigo-50/50 hover:scale-105"
            href="mailto:support@sofaiptv.site"
          >
            <Mail className="h-3.5 w-3.5" />
            Send email
          </a>
        </div>
      </div>
    </section>
  );
}
