"use client";

import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Mail } from "lucide-react";

export default function BlogPageContent() {
  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  return (
    <main className="flex-grow pt-6 sm:pt-8 pb-24 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full relative z-10">
      {/* Header */}
      <header className="mb-10 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
          SOFAIPTV KNOWLEDGE BASE &amp; TUTORIALS
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-black mb-4">SofaIPTV Guides, Tutorials &amp; Streaming Tips</h1>
        <p className="text-slate-600 text-base md:text-lg max-w-2xl">
          Master your IPTV setup with expert player configuration guides, device installation walkthroughs, buffer-free optimization tips, and the latest streaming insights.
        </p>
      </header>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mb-24">
          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="bg-white border border-black/10 rounded-2xl overflow-hidden flex flex-col md:flex-row group cursor-pointer transition-all duration-500 shadow-md hover:shadow-xl hover:border-indigo-500/40">
              <div className="md:w-3/5 h-64 md:h-96 relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  alt={`${featuredPost.title} - SofaIPTV Tutorial`}
                  title={`${featuredPost.title} | SofaIPTV`}
                  src={featuredPost.coverImage || ""}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/80 opacity-60"></div>
              </div>
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center z-10 relative bg-white">
                <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full font-bold text-xs mb-4 w-max border border-indigo-200">
                  {featuredPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 group-hover:text-indigo-600 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 text-sm md:text-base mb-6 line-clamp-3 leading-relaxed">
                  {featuredPost.description}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <span className="text-black font-bold text-sm">Read Article</span>
                  <ArrowRight className="text-indigo-600 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {gridPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id}>
            <article className="bg-white border border-black/10 rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-2 transition-transform duration-300 h-full shadow-sm hover:shadow-lg hover:border-indigo-500/30">
              <div className="h-48 relative overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={`${post.title} - SofaIPTV Guide`}
                  title={`${post.title} | SofaIPTV`}
                  src={post.coverImage || ""}
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 bg-white/95 backdrop-blur-md text-black rounded-full text-xs font-bold border border-black/10">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white">
                <h3 className="font-bold text-lg text-black mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-auto text-slate-400 text-xs font-semibold pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span>{post.date}</span>
                  <span className="text-indigo-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-bold">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl border border-indigo-500/20">
        <div className="relative z-10 max-w-2xl mx-auto">
          <Mail className="w-10 h-10 text-cyan-400 mb-4 mx-auto" />
          <h2 className="text-3xl font-black mb-4">Stay Updated with SofaIPTV Insights</h2>
          <p className="text-indigo-100/80 text-sm md:text-base mb-8 leading-relaxed">
            Subscribe to receive expert streaming tutorials, server updates, and exclusive SofaIPTV subscription discounts delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:border-cyan-400 w-full sm:w-96 transition-all"
              placeholder="Enter your email address"
              type="email"
            />
            <button
              className="bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-bold text-sm px-8 py-3.5 rounded-full whitespace-nowrap shadow-lg transition-all"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
