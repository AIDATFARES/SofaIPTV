"use client";

import { Apple, Box, HelpCircle, Monitor, Satellite, Smartphone, Tv } from "lucide-react";
import { useState } from "react";

const devices = [
  { id: "smart-tv", label: "Smart TV", icon: Monitor, title: "Smart TV Setup (Samsung, LG, Sony, etc.)", app: "Smart IPTV, IBO Player or IPTV Smarters", note: "Samsung TVs commonly use IBO Player or Smart IPTV, while LG TVs can use IPTV Smarters Pro or SS IPTV." },
  { id: "firestick", label: "Firestick", icon: Tv, title: "Firestick Setup", app: "IPTV Smarters Pro or TiviMate", note: "Install your preferred IPTV player using Downloader or the Amazon Appstore, then sign in with the details from your welcome email." },
  { id: "android", label: "Android", icon: Smartphone, title: "Android TV & Phone Setup", app: "IPTV Smarters Pro or TiviMate", note: "Download your player from Google Play and use your supplied playlist details to sign in." },
  { id: "ios", label: "iOS", icon: Apple, title: "iPhone, iPad & Apple TV Setup", app: "IPTV Smarters Player or GSE Smart IPTV", note: "Install a compatible player from the App Store and enter the credentials from your welcome email." },
  { id: "mag", label: "MAG Box", icon: Box, title: "MAG Box Setup", app: "Portal URL", note: "Send your MAG device MAC address to support so we can activate your portal before setup." },
  { id: "enigma", label: "Enigma2", icon: Satellite, title: "Enigma2 Setup", app: "XtreamTV or E-Channelizer", note: "Use a compatible Enigma2 plugin and add the playlist details supplied with your subscription." },
];

const faqs = [
  { question: "1. How do I install SofaIPTV on a Smart TV?", answer: "Install a compatible player such as IBO Player, Smart IPTV, or IPTV Smarters from your TV's app store, then add the M3U URL or Xtream credentials from your welcome email." },
  { question: "2. Where do I find my M3U URL and login credentials?", answer: "Your M3U URL and Xtream Codes login are included in the welcome email sent after activation. You can also contact our WhatsApp support team 24/7 if you need them resent." },
  { question: "3. How can I reduce buffering?", answer: "Use a stable internet connection (at least 25 Mbps for 4K), connect via Ethernet cable or 5 GHz Wi-Fi, and restart your router periodically." },
  { question: "4. How do I set up SofaIPTV using Xtream Codes API?", answer: "Choose Xtream Codes API in your player (like IPTV Smarters or TiviMate) and enter the server URL, username, and password from your welcome email." },
  { question: "5. Can I connect using a MAC address (Portal URL)?", answer: "Yes. MAG boxes and compatible STB portal devices can be activated using their MAC address. Send it to our WhatsApp support team for instant activation." },
];

export default function DeviceSetupGuide() {
  const [activeDevice, setActiveDevice] = useState("smart-tv");
  const device = devices.find((item) => item.id === activeDevice) ?? devices[0];
  const DeviceIcon = device.icon;

  return (
    <section className="mb-16 md:mb-[100px]">
      <header className="mx-auto mb-9 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">SofaIPTV Device Setup Instructions</h2>
        <p className="mt-3 text-base text-slate-600">Select your streaming hardware below to view clear, step-by-step SofaIPTV configuration tutorials.</p>
      </header>

      <div className="mb-7 flex flex-wrap justify-center gap-2">
        {devices.map((item) => {
          const Icon = item.icon;
          const active = item.id === activeDevice;
          return (
            <button 
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${active ? "border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" : "border-black/15 bg-white text-slate-600 hover:border-indigo-500/60 hover:text-black hover:bg-indigo-50/50"}`} 
              key={item.id} 
              onClick={() => setActiveDevice(item.id)} 
              type="button"
            >
              <Icon className="h-4 w-4" />{item.label}
            </button>
          );
        })}
      </div>

      <article className="mx-auto max-w-[1000px] rounded-3xl border-2 border-indigo-500/30 bg-white p-6 sm:p-10 shadow-xl overflow-hidden">
        
        {/* Device Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-b border-slate-100 pb-6 mb-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shrink-0">
            <DeviceIcon className="h-8 w-8" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-black sm:text-3xl">{device.title}</h3>
            <p className="mt-1 text-slate-500 font-medium">Follow these steps to configure your {device.label} for SofaIPTV streaming.</p>
          </div>
        </div>
        
        {/* Important Note */}
        {device.note && (
          <div className="mb-8 rounded-2xl border border-indigo-200 bg-indigo-50/50 p-5 flex items-start gap-4">
            <HelpCircle className="h-6 w-6 text-indigo-600 shrink-0" />
            <div>
              <h4 className="font-bold text-black mb-1">Important Note</h4>
              <p className="text-sm leading-relaxed text-slate-700">{device.note}</p>
            </div>
          </div>
        )}

        {/* Steps Grid */}
        <div className="space-y-6">
          <SetupStep 
            number="1" 
            title="1. Install Your Chosen IPTV App"
          >
            Navigate to your device&apos;s app store or use Downloader, search for <strong>{device.app}</strong>, and install the application directly onto your hardware.
          </SetupStep>
          
          <SetupStep 
            number="2" 
            title="2. Enter SofaIPTV Credentials"
          >
            Open your IPTV application, select &ldquo;Add User&rdquo; or Xtream Codes API, and input the server URL, username, and password sent in your SofaIPTV welcome email or WhatsApp message.
            <div className="mt-4">
              <CodeLine label="M3U URL" text="Use the secure playlist URL from your welcome email" />
            </div>
          </SetupStep>
          
          <SetupStep 
            number="3" 
            title="3. Sit Back &amp; Stream 4K IPTV"
          >
            Save your settings and let the app synchronize the channels and EPG guide. You now have immediate access to 50,000+ live TV channels and 200,000+ movies &amp; series in crystal-clear 4K UHD!
          </SetupStep>
        </div>
      </article>

      <div className="mx-auto mt-20 max-w-[1000px]">
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-black sm:text-4xl">SofaIPTV Installation FAQ</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <div className="flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:border-indigo-200 transition-colors" key={faq.question}>
              <div className="bg-slate-50 border-b border-slate-100 px-5 py-4 flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
                <h3 className="text-base sm:text-lg font-bold text-black leading-snug">
                  {faq.question}
                </h3>
              </div>
              <div className="p-5 text-sm text-slate-700 leading-relaxed bg-white flex-1">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SetupStep({ children, number, title }: { children: React.ReactNode; number: string; title: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm hover:border-indigo-300 transition-colors">
      <div className="flex flex-1 gap-5 items-start">
         <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-lg font-extrabold text-white shadow-md">
           {number}
         </span>
         <div className="flex-1 mt-1">
           <h4 className="text-lg font-bold text-black sm:text-xl">{title}</h4>
           <div className="mt-3 text-sm leading-relaxed text-slate-600">
             {children}
           </div>
         </div>
      </div>
    </div>
  );
}

function CodeLine({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 font-mono text-xs text-slate-700 break-all">
      <span className="font-bold text-indigo-600 mr-2">{label}:</span> 
      {text}
    </div>
  );
}
