import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "1. What is SofaIPTV?",
    answer: (
      <>
        SofaIPTV is a premium IPTV streaming service offering 50,000+ live television channels, 200,000+ on-demand movies and complete series, and live sports in pristine 4K and FHD quality. Discover our{" "}
        <Link
          href="/channels"
          className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
        >
          live TV channels
        </Link>{" "}
        and flexible{" "}
        <a
          href="#pricing"
          className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
        >
          subscription plans
        </a>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "2. Do I need a subscription to use SofaIPTV?",
    answer: (
      <>
        Yes, an active subscription is required. However, we offer a dedicated{" "}
        <a
          href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20SofaIPTV."
          target="_blank"
          rel="noreferrer"
          className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
        >
          free trial
        </a>{" "}
        so you can test stream stability and channel variety before choosing one of our{" "}
        <a
          href="#pricing"
          className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
        >
          subscription plans
        </a>
        .
      </>
    ),
  },
  {
    id: 3,
    question: "3. What devices are compatible with SofaIPTV?",
    answer: (
      <>
        SofaIPTV is engineered for all devices: Amazon Firestick, Android TV, Google TV, Samsung & LG Smart TVs, Apple TV, iOS, Windows, Mac, and popular players like TiviMate and IPTV Smarters. Follow our simple{" "}
        <Link
          href="/installation"
          className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
        >
          installation guides
        </Link>{" "}
        to get started.
      </>
    ),
  },
  {
    id: 4,
    question: "4. Can I stream on multiple devices simultaneously?",
    answer: (
      <>
        Yes, we support multi-device streaming! You can configure 1, 2, or 3 simultaneous connections when selecting your{" "}
        <a
          href="#pricing"
          className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
        >
          SofaIPTV subscription plan
        </a>
        , making it perfect for the entire household.
      </>
    ),
  },
  {
    id: 5,
    question: "5. Can I watch live sports on SofaIPTV?",
    answer: (
      <>
        Absolutely. SofaIPTV broadcasts all major international leagues (Premier League, UEFA Champions League, La Liga, Serie A, NFL, NBA, Formula 1, UFC, and PPV events) at 60fps with zero buffering. Explore our{" "}
        <Link
          href="/channels"
          className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
        >
          sports channels directory
        </Link>
        .
      </>
    ),
  },
  {
    id: 6,
    question: "6. What payment methods are accepted?",
    answer: (
      <>
        We accept Credit & Debit Cards, PayPal, and leading Cryptocurrencies (Bitcoin, USDT) through 256-bit encrypted gateways. Contact our{" "}
        <Link
          href="/contact"
          className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
        >
          support team
        </Link>{" "}
        for any custom payment inquiries.
      </>
    ),
  },
  {
    id: 7,
    question: "7. What kind of content is included in SofaIPTV?",
    answer: (
      <>
        You receive over 50,000 live worldwide channels and 200,000+ on-demand movies &amp; TV series, complete with multi-day Electronic Program Guide (EPG) schedules and Catch-Up TV. Learn more in our{" "}
        <Link
          href="/blog"
          className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
        >
          expert IPTV guides
        </Link>
        .
      </>
    ),
  },
  {
    id: 8,
    question: "8. Do I need a VPN to use SofaIPTV?",
    answer: (
      <>
        A VPN is not mandatory because our servers use secure HTTPS streams. However, if your ISP throttles streaming bandwidth during peak sports hours, a VPN can help maintain maximum speeds. Visit our{" "}
        <Link
          href="/faq"
          className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
        >
          FAQ knowledge base
        </Link>{" "}
        for optimization tips.
      </>
    ),
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-white text-slate-950 relative z-10 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
            GOT QUESTIONS? WE&apos;VE GOT ANSWERS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight animate-fade-up">
            SofaIPTV Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-5 leading-relaxed max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Find clear answers to common questions about our SofaIPTV service, including{" "}
            <a
              href="#pricing"
              className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
            >
              IPTV subscriptions
            </a>
            ,{" "}
            <Link
              href="/installation"
              className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
            >
              supported streaming devices
            </Link>
            , Anti-Freeze 4K streaming quality, and fast activation. Need further assistance? Our{" "}
            <Link
              href="/contact"
              className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
            >
              24/7 technical team
            </Link>{" "}
            is always ready to help.
          </p>
        </div>

        {/* 2-Column FAQ Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-[1140px] mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md hover:border-indigo-400 transition-colors animate-fade-up"
              style={{ animationDelay: `${0.2 + (index * 0.05)}s`, animationFillMode: 'both' }}
            >
              {/* Header Banner */}
              <div className="bg-slate-50 border-b border-slate-100 px-5 py-4 flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
                <h3 className="text-base sm:text-lg font-bold text-slate-950 leading-snug">
                  {faq.question}
                </h3>
              </div>

              {/* Answer Content */}
              <div className="p-5 sm:p-6 text-sm sm:text-base text-slate-600 leading-relaxed flex-1 bg-white">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA to Knowledge Base */}
        <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-indigo-600/25 hover:scale-105"
          >
            <span>View Complete FAQ Knowledge Base</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
