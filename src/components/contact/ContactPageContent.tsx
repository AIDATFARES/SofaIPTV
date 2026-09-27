"use client";

import { Mail, MessageCircle, ArrowRight, Clock, Send } from "lucide-react";

export default function ContactPageContent() {
  return (
    <main className="flex-grow pt-6 sm:pt-8 pb-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full relative z-10">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-50/50 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-indigo-600">SofaIPTV Customer Support</span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
          <span className="block text-black">Contact SofaIPTV:</span>
          <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">24/7 Dedicated Support.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-6 text-slate-600">
          Have questions about our SofaIPTV subscription packages, channel lineup, or device setup? Our dedicated technical specialists are online 24/7 to guarantee your seamless 4K streaming experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg lg:gap-xl">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-md">
          <div className="glass-panel rounded-2xl p-lg flex flex-col items-center text-center bg-white border border-black/10 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-md text-indigo-600">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-xs font-bold">Email Us</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-md text-slate-600">For billing, inquiries, and general support.</p>
            <a
              className="text-indigo-600 font-semibold hover:text-cyan-600 transition-colors"
              href="mailto:support@sofaiptv.site"
            >
              support@sofaiptv.site
            </a>
          </div>

          <div className="glass-panel rounded-2xl p-lg flex flex-col items-center text-center bg-white border border-black/10 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-md text-emerald-600">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-xs font-bold">WhatsApp Support</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-md text-slate-600">
              Fastest response time (&lt; 5 minutes) for instant activation &amp; technical help.
            </p>
            <a
              className="text-emerald-600 font-bold hover:text-emerald-500 transition-colors flex items-center gap-xs"
              href="https://wa.me/213552069874?text=Hello,%20I%20need%20support%20for%20SofaIPTV."
              target="_blank"
              rel="noreferrer"
            >
              Start Chat <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="glass-panel rounded-2xl p-lg flex flex-col items-center text-center bg-white border border-black/10 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-md text-slate-700">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-xs font-bold">Response Time</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-slate-600">
              WhatsApp: <strong className="text-black">Under 5 minutes</strong><br />
              Email: <strong className="text-black">Under 2 hours</strong>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8">
          <div className="glass-panel rounded-2xl p-lg md:p-xl h-full bg-white border border-black/10 shadow-md">
            <h2 className="font-title-md text-xl font-bold text-black mb-lg border-b border-black/10 pb-sm">
              Send SofaIPTV a Direct Message
            </h2>
            <form 
              className="flex flex-col gap-md" 
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
                const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
                const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value || "SofaIPTV Support";
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";
                const text = encodeURIComponent(`Hello SofaIPTV support,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`);
                window.open(`https://wa.me/213552069874?text=${text}`, "_blank", "noopener,noreferrer");
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="bg-slate-50 border border-black/10 focus:border-indigo-500 rounded-xl px-4 py-3 text-black placeholder:text-slate-400 focus:outline-none transition-all"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="bg-slate-50 border border-black/10 focus:border-indigo-500 rounded-xl px-4 py-3 text-black placeholder:text-slate-400 focus:outline-none transition-all"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="bg-slate-50 border border-black/10 focus:border-indigo-500 rounded-xl px-4 py-3 text-black placeholder:text-slate-400 focus:outline-none transition-all"
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-xs">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="bg-slate-50 border border-black/10 focus:border-indigo-500 rounded-xl px-4 py-3 text-black placeholder:text-slate-400 focus:outline-none transition-all resize-none"
                  id="message"
                  name="message"
                  placeholder="Describe your issue, device type, or question in detail..."
                  required
                  rows={6}
                ></textarea>
              </div>

              <div className="mt-sm flex justify-end">
                <button
                  className="px-8 py-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5"
                  type="submit"
                >
                  <span>Send Message via WhatsApp</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
