"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, CircleHelp, Clock3, CreditCard, HelpCircle, Mail, MessageCircle, MonitorPlay, Send, Settings2, UserRound } from "lucide-react";

type Category = "About SofaIPTV" | "Setup & streaming" | "Plans & access" | "Payments & support";

type FAQItem = {
  category: Category;
  question: string;
  answer: React.ReactNode;
};

const categories: { label: Category; icon: typeof CircleHelp }[] = [
  { label: "About SofaIPTV", icon: CircleHelp },
  { label: "Setup & streaming", icon: Settings2 },
  { label: "Plans & access", icon: UserRound },
  { label: "Payments & support", icon: CreditCard },
];

const faqs: FAQItem[] = [
  {
    category: "About SofaIPTV",
    question: "1. What is SofaIPTV?",
    answer: (
      <>
        SofaIPTV is a premium home entertainment IPTV service that delivers over 50,000 live worldwide TV channels, 200,000+ VOD movies &amp; series, and major sports in crystal-clear 4K and Full HD. Check out our{" "}
        <Link href="/channels" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">live TV channels</Link> and{" "}
        <Link href="/pricing" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">IPTV subscription plans</Link>.
      </>
    ),
  },
  {
    category: "About SofaIPTV",
    question: "2. Is SofaIPTV authorized?",
    answer: (
      <>
        SofaIPTV is intended to be used in accordance with applicable laws, local regulations, and our service terms. Please ensure that the content you access and the way you use the service are permitted in your jurisdiction.
      </>
    ),
  },
  {
    category: "About SofaIPTV",
    question: "3. What channels and content are included with SofaIPTV?",
    answer: (
      <>
        SofaIPTV includes an extensive selection of live channels covering football, basketball, combat sports, world news, cinema, and kids entertainment, along with a daily-updated VOD catalog of movies and series. Browse our <Link href="/channels" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">full channels catalog</Link>.
      </>
    ),
  },
  {
    category: "About SofaIPTV",
    question: "4. Can I watch live sports and PPV events on SofaIPTV?",
    answer: (
      <>
        Yes! SofaIPTV includes all premium live sports channels and PPV events: Premier League, Champions League, UFC, Boxing, NFL, NBA, Formula 1, and more in 60FPS. Explore our <Link href="/channels" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">live sports section</Link>.
      </>
    ),
  },
  {
    category: "About SofaIPTV",
    question: "5. Which devices can I use with SofaIPTV?",
    answer: (
      <>
        SofaIPTV works with compatible IPTV apps on Smart TVs (Samsung, LG), Android TV, Amazon Firestick, Apple TV, iPhone, Android phones, MAG boxes, and PC/Mac. Follow our <Link href="/installation" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">installation guides</Link> to get started.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "1. How do I install SofaIPTV on my device?",
    answer: (
      <>
        Start by installing a compatible player like IPTV Smarters Pro, TiviMate, or IBO Player. Enter the Xtream Codes or M3U credentials from your welcome email. View our step-by-step <Link href="/installation" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">installation guides</Link> for detailed walkthroughs.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "2. Can I use SofaIPTV on a Smart TV?",
    answer: (
      <>
        Yes, SofaIPTV runs perfectly on Samsung, LG, Sony, Philips, and Hisense Smart TVs using recommended apps like IBO Player, Smart IPTV, or IPTV Smarters Pro.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "3. What internet speed do I need for smooth SofaIPTV streaming?",
    answer: (
      <>
        For reliable playback, we recommend at least 15 Mbps for Full HD and 30 Mbps for 4K Ultra HD. Ethernet or 5 GHz Wi-Fi is recommended for optimal stability.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "4. Why is my stream buffering or freezing?",
    answer: (
      <>
        Restart your IPTV app and Wi-Fi router. If buffering persists, ensure no background downloads are consuming your bandwidth or <Link href="/contact" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">contact support on WhatsApp</Link> for an instant server-side line reset.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "5. Do I need a VPN to use SofaIPTV?",
    answer: (
      <>
        A VPN is not strictly required because our streams are fully encrypted. However, if your ISP throttles streaming traffic during live sports, a VPN can help bypass restrictions. Contact our <Link href="/contact" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">support team</Link> for advice.
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "1. Are there any hidden fees or contracts with SofaIPTV?",
    answer: (
      <>
        Never! No contracts, no automatic lock-ins, and zero hidden fees. Choose an <Link href="/pricing" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">IPTV subscription plan</Link> with transparent pricing and instant delivery.
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "2. Can I use SofaIPTV on multiple devices?",
    answer: (
      <>
        Yes! We offer single-device and multi-connection packages. Select your preferred device count directly on our <Link href="/pricing" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">pricing page</Link>.
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "3. What are SofaIPTV M3U and Xtream Codes details?",
    answer: (
      <>
        Your welcome email includes both secure M3U playlist URLs and Xtream Codes API credentials (Server URL, Username, and Password) for convenient login on any IPTV app.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "1. Does SofaIPTV offer a free trial?",
    answer: (
      <>
        Yes, we offer a <a href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20SofaIPTV." target="_blank" rel="noreferrer" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">free trial</a> so you can verify our channels and stream stability before subscribing.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "2. Which payment methods does SofaIPTV accept?",
    answer: (
      <>
        We accept Credit/Debit Cards, PayPal, Crypto (Bitcoin, USDT), and Instant Bank Transfers. For help with payment options, message our <Link href="/contact" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">support team</Link>.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "3. How long does activation take after I purchase a plan?",
    answer: (
      <>
        Activation is fast and automated! Your credentials are sent to your email and WhatsApp within 5 to 20 minutes following payment confirmation.
      </>
    ),
  },
];

export default function FaqPageContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("About SofaIPTV");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleFaqs = faqs.filter((faq) => faq.category === activeCategory);

  function selectCategory(category: Category) {
    setActiveCategory(category);
    setActiveIndex(null);
  }

  function sendSupportMessage(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "General support").trim();
    const message = String(formData.get("message") || "").trim();
    const text = encodeURIComponent(`Hello SofaIPTV support,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`);
    window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="flex-grow px-4 sm:px-6 pb-20 pt-6 sm:pt-8 bg-white">
      <div className="mx-auto max-w-[1140px]">
        <header className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">SofaIPTV Help Center &amp; FAQ</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-tight">
            SofaIPTV Frequently Asked Questions<br />
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              (Knowledge Base &amp; FAQ)
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-700">
            Get expert answers to common questions regarding SofaIPTV{" "}
            <Link href="/pricing" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">subscriptions</Link>,{" "}
            <Link href="/installation" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">supported devices</Link>, buffer-free 4K streaming quality, payments, and instant activation. If you need direct assistance, our{" "}
            <Link href="/contact" className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors">support team</Link> is available 24/7.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[250px_minmax(0,1fr)] md:gap-10">
          <aside aria-label="FAQ categories" className="md:sticky md:top-28 md:self-start">
            <div className="rounded-2xl border border-black/10 bg-white p-3 shadow-sm">
              <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
                {categories.map(({ label, icon: Icon }) => {
                  const isSelected = activeCategory === label;
                  return (
                    <button
                      aria-pressed={isSelected}
                      className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all md:w-full ${
                        isSelected
                          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                          : "text-slate-600 hover:bg-slate-50 hover:text-black"
                      }`}
                      key={label}
                      onClick={() => selectCategory(label)}
                      type="button"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <section aria-live="polite" className="space-y-4">
            <div className="mb-5 flex items-center gap-3">
              <MonitorPlay className="h-5 w-5 text-indigo-600" />
              <h2 className="text-xl font-bold text-black">{activeCategory}</h2>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {visibleFaqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                const contentId = `faq-${activeCategory.replaceAll(" ", "-").toLowerCase()}-${index}`;

                return (
                  <article className="flex flex-col rounded-2xl overflow-hidden border border-black/10 bg-white shadow-md hover:border-indigo-500/40 transition-colors" key={faq.question}>
                    {/* Header Banner */}
                    <div className="bg-slate-50 border-b border-black/10 px-5 py-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
                        <h3 className="text-base sm:text-lg font-bold text-black leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <button
                        aria-controls={contentId}
                        aria-expanded={isOpen}
                        className="text-slate-600 hover:text-black transition-colors"
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                        type="button"
                      >
                        <ChevronDown className={`h-5 w-5 shrink-0 text-indigo-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>

                    {/* Answer Content */}
                    <div className="p-5 sm:p-6 text-sm sm:text-base text-slate-700 leading-relaxed flex-1 bg-white" id={contentId}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>

        <section className="mt-20 border-t border-black/10 pt-16 sm:pt-20">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black">Get in Touch with SofaIPTV Support</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Our dedicated technical specialists are available 24/7 to ensure you have a seamless 4K streaming experience. Send us a message and we&apos;ll reply quickly.</p>
          </header>
          <div className="mt-10 grid gap-8 xl:grid-cols-[278px_minmax(0,1fr)] xl:gap-10">
            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              <a className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-black/10 bg-white p-5 text-center transition-colors hover:border-indigo-500/50 shadow-sm" href="mailto:support@sofaiptv.site">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600"><Mail className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-black">Email Us</span>
                <span className="mt-2 block text-xs leading-5 text-slate-600">For general inquiries and setup questions.</span>
                <span className="mt-3 block text-xs font-semibold text-indigo-600">support@sofaiptv.site</span>
              </a>
              <a className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-black/10 bg-white p-5 text-center transition-colors hover:border-emerald-500/50 shadow-sm" href="https://wa.me/213552069874?text=Hello%20SofaIPTV%20support%2C%20I%20need%20help." rel="noreferrer" target="_blank">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600"><MessageCircle className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-black">WhatsApp Support</span>
                <span className="mt-2 block text-xs leading-5 text-slate-600">Fastest channel for instant technical activation.</span>
                <span className="mt-3 block text-xs font-semibold text-emerald-600">Start Chat →</span>
              </a>
              <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-black/10 bg-white p-5 text-center shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5 text-slate-700"><Clock3 className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-black">Response Time</span>
                <span className="mt-2 block text-xs leading-5 text-slate-600">We typically reply within <strong className="text-black">5 minutes</strong> on WhatsApp.</span>
              </div>
            </div>

            <div className="rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-md">
              <h3 className="text-xl font-bold text-black">Send SofaIPTV a Message</h3>
              <form action={sendSupportMessage} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-xs font-semibold text-slate-600">Name<input className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3.5 py-3 text-sm text-black outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-500" name="name" placeholder="John Doe" required /></label>
                  <label className="block text-xs font-semibold text-slate-600">Email address<input className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3.5 py-3 text-sm text-black outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-500" name="email" placeholder="john@example.com" required type="email" /></label>
                </div>
                <label className="block text-xs font-semibold text-slate-600">Subject<input className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3.5 py-3 text-sm text-black outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-500" name="subject" placeholder="How can we help?" /></label>
                <label className="block text-xs font-semibold text-slate-600">Message<textarea className="mt-2 min-h-32 w-full resize-y rounded-xl border border-black/10 bg-white px-3.5 py-3 text-sm text-black outline-none transition-colors placeholder:text-slate-400 focus:border-indigo-500" name="message" placeholder="Describe your question or issue..." required /></label>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0" type="submit"><Send className="h-4 w-4" />Send message via WhatsApp</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
