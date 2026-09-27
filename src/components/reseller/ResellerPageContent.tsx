"use client";

import { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Headphones,
  Server,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Zap,
} from "lucide-react";

type CreditPlan = {
  id: string;
  credits: number;
  price: number;
  oldPrice?: number;
  popular?: boolean;
  bestValue?: boolean;
};

const creditPlans: CreditPlan[] = [
  {
    id: "100-credits",
    credits: 100,
    price: 399,
  },
  {
    id: "200-credits",
    credits: 200,
    price: 799,
    popular: true,
  },
  {
    id: "300-credits",
    credits: 300,
    price: 1199,
    bestValue: true,
  },
  {
    id: "400-credits",
    credits: 400,
    price: 1599,
  },
  {
    id: "500-credits",
    credits: 500,
    price: 1999,
  },
];

const planFeatures = [
  "Each credit hour equals 1 month",
  "Free Trials Everyday",
  "Customize bouquets & channel packages",
  "Pay As You Go - Instant Top-Up",
  "Credits Never Expire",
  "24/7 dedicated reseller support",
  "Create unlimited Sub-Resellers",
];

const advantages = [
  {
    icon: ShoppingCart,
    title: "COMPATIBLE WITH ALL DEVICES",
    description:
      "Our SofaIPTV service is compatible with all devices: Smart TVs, Android devices, MAG, Apple TV, Firestick & more.",
  },
  {
    icon: Server,
    title: "EFFICIENT 4K SERVERS",
    description:
      "We operate high-capacity, load-balanced European & North American servers with Anti-Freeze v8.2 technology and 99.9% uptime.",
  },
  {
    icon: Headphones,
    title: "EXPERT RESELLER SUPPORT",
    description:
      "Our dedicated technical support team is available 24/7 on WhatsApp to assist your business with any setup or query.",
  },
  {
    icon: Zap,
    title: "FULL CONTROL PANEL",
    description:
      "Manage customer lines, edit channels, generate unlimited free test accounts, and create sub-resellers effortlessly.",
  },
];

const resellerFaqs = [
  {
    question: "DOES THE CONTROL PANEL EXPIRE?",
    answer:
      "No, your SofaIPTV reseller control panel does not expire. Once activated, your panel remains active permanently, and your credits never expire.",
  },
  {
    question: "CAN I RENEW A SUBSCRIPTION?",
    answer:
      "Yes! You can easily extend or renew any client subscription directly from your Xtream reseller panel with a single click.",
  },
  {
    question: "CAN I CHANGE A SUBSCRIPTION FROM ONE DEVICE TO ANOTHER?",
    answer:
      "Absolutely. You can modify lines, switch device types, or update M3U playlists and Xtream Codes parameters at any time inside your dashboard.",
  },
  {
    question: "WHAT IF THE SUBSCRIPTION DOES NOT WORK FOR MY CLIENT?",
    answer:
      "Our expert support team is available 7 days a week to assist you with fast client setup, line diagnostics, and troubleshooting.",
  },
  {
    question: "HOW DO I SELL IPTV SUBSCRIPTIONS?",
    answer:
      "You can sell IPTV subscriptions through your website, social media channels, local network, or direct clients. You set your own retail prices and keep 100% of your profit margin.",
  },
  {
    question: "DOES YOUR IPTV SERVER SUPPORT ALL DEVICES?",
    answer:
      "Yes! Our servers support Smart TVs (Samsung, LG), Android TV/Boxes, Amazon Firestick, MAG boxes, Formuler, Enigma2, iOS, Windows, Mac, and Apple TV.",
  },
  {
    question: "HOW CAN I ACTIVATE A MAG BOX?",
    answer:
      "Inside your reseller panel, select 'Add MAG Device', enter the client's MAC address (00:1A:79:XX:XX:XX), and assign their subscription package instantly.",
  },
  {
    question: "CAN I PAUSE OR STOP A SUBSCRIPTION?",
    answer:
      "Yes, you have complete authority to disable, pause, modify, or extend customer lines whenever necessary directly from your control panel.",
  },
  {
    question: "WHAT IF A STREAM STARTS BUFFERING?",
    answer:
      "Our servers feature automatic load balancing and anti-freeze technology with 99.9% uptime. If a client experiences buffering, you can switch line servers or adjust stream codecs in the panel.",
  },
  {
    question: "HOW DO I CREATE A PANEL FOR A SUB-RESELLER?",
    answer:
      "Inside your master panel, navigate to 'Sub-Reseller Management', create a new account username/password, and assign credit balance from your account.",
  },
];

export default function ResellerPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOrderPanel = (plan?: CreditPlan) => {
    const message = plan
      ? `Hello! I would like to order the SofaIPTV Reseller Panel with ${plan.credits} Credits for $${plan.price}.`
      : `Hello! I am interested in becoming a SofaIPTV Reseller and would like to request panel access.`;
    window.open(
      `https://wa.me/213552069874?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleFreeTrial = () => {
    const message = `Hello! I am interested in testing a SofaIPTV Reseller Panel free trial demo account.`;
    window.open(
      `https://wa.me/213552069874?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative overflow-hidden bg-white pt-8 sm:pt-10 pb-16 sm:pb-20 lg:pb-24 text-format-marketing">
      {/* Background radial gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/15 via-white to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* HERO SECTION */}
        <header className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-50/50 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-indigo-600 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            SofaIPTV Reseller Program
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-black">
            <span className="block text-black">Become a SofaIPTV Reseller</span>
            <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">Build High-Margin Recurring Income.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
            Launch your own profitable IPTV streaming business with SofaIPTV&apos;s industry-leading Xtream Codes reseller panel. Issue instant client trials, activate subscriptions, manage sub-resellers, set your own pricing, and keep 100% of your profits.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={handleFreeTrial}
              className="rounded-full bg-indigo-600 px-8 py-3.5 text-base font-bold text-white shadow-[0_0_25px_rgba(79,70,229,0.35)] transition-all duration-300 hover:bg-indigo-700 hover:shadow-[0_0_35px_rgba(79,70,229,0.5)] active:scale-[0.98]"
            >
              Request Reseller Demo Panel
            </button>
          </div>
        </header>

        {/* OUR RESELLER PLANS */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight">
              <span className="block text-black">Wholesale IPTV Credits</span>
              <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">SofaIPTV Reseller Packages.</span>
            </h2>
            <p className="mt-3 text-base font-bold text-slate-600">
              Tier-1 server infrastructure, zero credit expiration, and industry-leading profit margins.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 items-stretch">
            {creditPlans.map((plan) => (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-3xl bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-4 border-indigo-600 shadow-[0_10px_40px_rgba(79,70,229,0.25)] scale-102 z-10"
                    : plan.bestValue
                    ? "border-4 border-cyan-500 shadow-[0_10px_40px_rgba(6,182,212,0.2)] z-10"
                    : "border-2 border-slate-100"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md">
                    Most Popular
                  </span>
                )}
                {plan.bestValue && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-600 px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-md">
                    Best Value
                  </span>
                )}

                <div className="text-center">
                  <span className="text-xs font-black uppercase tracking-widest text-indigo-600">
                    SOFAIPTV 4K
                  </span>
                  <h3 className="mt-1 text-2xl font-black text-black">
                    {plan.credits} Credits
                  </h3>
                </div>

                <div className="my-5 rounded-2xl bg-slate-50 border border-slate-100 py-4 text-center">
                  <span className="text-4xl font-black text-indigo-600">
                    ${plan.price}
                  </span>
                </div>

                <ul className="flex-grow space-y-3 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-600">
                  {planFeatures.map((feature) => (
                    <li className="flex items-center gap-2" key={feature}>
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => handleOrderPanel(plan)}
                  className="mt-6 w-full rounded-2xl bg-indigo-600 py-3.5 text-sm font-extrabold text-white shadow-[0_4px_15px_rgba(79,70,229,0.3)] transition-all duration-300 hover:bg-indigo-700 hover:shadow-[0_6px_20px_rgba(79,70,229,0.4)] active:scale-[0.98]"
                >
                  Order Panel
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* ADVANTAGES */}
        <div className="mt-28">
          <h2 className="text-center text-3xl sm:text-4xl font-black leading-tight tracking-tight">
            <span className="block text-black">Why Partner With Us?</span>
            <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">SofaIPTV Reseller Advantages.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center p-6 rounded-2xl border border-black/10 bg-white shadow-lg hover:border-indigo-500/40 hover:shadow-xl transition-all"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-5">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-5 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-28 max-w-4xl">
          <h2 className="text-center text-3xl sm:text-4xl font-black leading-tight tracking-tight">
            <span className="block text-black">Frequently Asked Questions</span>
            <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">About SofaIPTV Reselling.</span>
          </h2>

          <div className="mt-10 space-y-3">
            {resellerFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-colors hover:border-indigo-500/30"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left font-bold text-black transition-colors hover:bg-slate-50"
                  >
                    <span className="text-sm sm:text-base tracking-wide uppercase font-extrabold flex items-center gap-3">
                      <span className="text-indigo-600">▶</span>
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-indigo-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-slate-500" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="border-t border-black/10 bg-white px-6 py-4 text-sm text-slate-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={() => handleOrderPanel()}
              className="rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 px-10 py-4 text-base font-extrabold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all duration-300 hover:from-indigo-500 hover:to-cyan-400 hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] active:scale-[0.98]"
            >
              Apply for SofaIPTV Reseller Panel
            </button>
          </div>
        </div>

        {/* TRUST BADGE */}
        <div className="mt-16 flex items-center justify-center gap-2 text-xs font-semibold text-slate-600">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          <span>Official SofaIPTV Xtream Codes Reseller Panel — 99.9% Server Uptime</span>
        </div>
      </div>
    </section>
  );
}
