"use client";

import { useEffect, useRef, useState } from "react";
import { Tv, Film, ShieldCheck, Zap, Headphones } from "lucide-react";

export default function TopFeatureBar() {
  const stats = [
    { value: 7, label: "Years in IPTV Streaming", prefix: "", suffix: " Years" },
    { value: 9500, label: "Active IPTV Subscribers", prefix: "+", suffix: "" },
    { value: 200000, label: "Movies & Series (VOD)", prefix: "+", suffix: "" },
    { value: 50000, label: "Live IPTV Channels", prefix: "+", suffix: "" },
  ];

  const highlights = [
    {
      icon: Tv,
      title: "50,000+ Live Channels",
      desc: "150+ Countries & Regions",
    },
    {
      icon: Film,
      title: "200,000+ VOD Titles",
      desc: "4K & FHD On Demand",
    },
    {
      icon: ShieldCheck,
      title: "Anti-Freeze v8.2",
      desc: "99.9% Reliable Uptime",
    },
    {
      icon: Zap,
      title: "Ultra HD & 60 FPS",
      desc: "Live Sports & PPV Events",
    },
    {
      icon: Headphones,
      title: "24/7 Priority Support",
      desc: "Instant WhatsApp Help",
    },
  ];

  return (
    <section className="bg-white border-y border-black/10 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 border-b border-black/[0.08] py-10 text-center sm:grid-cols-4 sm:gap-4 sm:py-12">
          {stats.map((stat) => (
            <div key={stat.label} className="transition-all duration-300">
              <AnimatedStat {...stat} />
              <span className="mt-1 block text-sm font-medium text-slate-700">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 py-6 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/90 border border-black/10 rounded-xl p-3.5 sm:p-4 flex items-center gap-3.5 hover:border-indigo-500/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 group-hover:scale-110 transition-transform shrink-0">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-black leading-tight truncate">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-slate-600 truncate mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AnimatedStat({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const duration = 1200;
    const startedAt = performance.now();
    let frameId = 0;
    const element = ref.current;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const currentCount = Math.round(value * eased);
      element.textContent = `${prefix}${currentCount.toLocaleString()}${suffix}`;
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value, prefix, suffix]);

  return <span className="block text-3xl font-extrabold tracking-tight text-black sm:text-4xl" ref={ref}>{prefix}0{suffix}</span>;
}
