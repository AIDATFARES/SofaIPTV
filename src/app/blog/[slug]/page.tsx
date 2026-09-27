import React from "react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import ArticleFAQAccordion from "@/components/blog/ArticleFAQAccordion";
import BlogOfferCard from "@/components/blog/BlogOfferCard";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<import('next').Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: 'SofaIPTV - Post Not Found' };
  }

  return {
    title: `SofaIPTV - ${post.title}`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `SofaIPTV - ${post.title}`,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: 'article',
      images: post.coverImage ? [{
        url: post.coverImage,
        alt: `${post.title} - SofaIPTV Guide`,
      }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `SofaIPTV - ${post.title}`,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

function parseArticleContent(content: string) {
  const faqMatch = content.match(/## Frequently Asked Questions([\s\S]*?)(?=\n## |$)/);
  if (!faqMatch) {
    return { beforeFaq: content, faqs: [], afterFaq: "" };
  }

  const faqBlock = faqMatch[0];
  const faqStartIndex = content.indexOf("## Frequently Asked Questions");
  const beforeFaq = content.substring(0, faqStartIndex);
  const afterFaq = content.substring(faqStartIndex + faqBlock.length);

  const faqItems: { question: string; answer: string }[] = [];
  const qBlocks = faqMatch[1].split(/\n### /).slice(1);

  for (const block of qBlocks) {
    const lines = block.trim().split("\n");
    const question = lines[0].trim();
    const answer = lines.slice(1).join("\n").trim().replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
    if (question && answer) {
      faqItems.push({ question, answer });
    }
  }

  return { beforeFaq, faqs: faqItems, afterFaq };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const { beforeFaq, faqs, afterFaq } = parseArticleContent(post.content);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": post.coverImage ? {
      "@type": "ImageObject",
      "url": `https://www.sofaiptv.site${post.coverImage}`,
      "caption": `${post.title} - SofaIPTV Guide`,
      "description": post.description,
    } : undefined,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "SofaIPTV",
      "url": "https://www.sofaiptv.site"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.sofaiptv.site/blog/${post.slug}`
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.sofaiptv.site"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.sofaiptv.site/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.sofaiptv.site/blog/${post.slug}`
      }
    ]
  };

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  const markdownComponents = {
    h1: () => null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h2: ({ node: _node, ...props }: any) => <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-black" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    h3: ({ node: _node, ...props }: any) => <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-black" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    p: ({ node: _node, ...props }: any) => <p className="mb-6 leading-relaxed text-slate-700" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ul: ({ node: _node, ...props }: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-slate-700 marker:text-indigo-600" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ol: ({ node: _node, ...props }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-slate-700 marker:text-indigo-600" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    a: ({ node: _node, ...props }: any) => <a className="text-indigo-600 hover:text-cyan-600 no-underline font-semibold transition-colors" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    blockquote: ({ node: _node, ...props }: any) => <blockquote className="border-l-4 border-indigo-600 pl-4 py-2 mb-6 italic bg-slate-50 text-slate-700 rounded-r" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    table: ({ node: _node, ...props }: any) => <div className="overflow-x-auto mb-8"><table className="w-full text-left border-collapse border border-slate-200" {...props} /></div>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    th: ({ node: _node, ...props }: any) => <th className="border-b border-slate-200 py-3 px-4 font-bold text-black bg-slate-50" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    td: ({ node: _node, ...props }: any) => <td className="border-b border-slate-100 py-3 px-4 text-slate-700" {...props} />,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    img: ({ node: _node, alt, src, ...props }: any) => (
      <span className="my-8 flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ? `${alt} - SofaIPTV Tutorial` : `${post.title} - SofaIPTV Tutorial`}
          title={alt || `${post.title} | SofaIPTV`}
          className="rounded-xl max-w-full shadow-md"
          {...props}
        />
        {alt && <span className="text-sm text-center block mt-2 text-slate-500">{alt}</span>}
      </span>
    ),
  };

  return (
    <main className="flex-grow pt-6 sm:pt-8 pb-24 px-margin-mobile md:px-margin-desktop max-w-[1024px] mx-auto w-full relative z-10 text-format-blog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Link href="/blog" className="inline-flex items-center text-indigo-600 hover:text-cyan-600 mb-8 transition-colors group font-semibold">
        <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <article className="bg-white border border-black/10 rounded-2xl p-6 md:p-12 shadow-sm">
        <header className="mb-10 text-center">
          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full font-bold text-xs mb-4 w-max border border-indigo-200">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-500 text-sm">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </header>

        {post.coverImage && (
          <div className="mb-12 rounded-2xl overflow-hidden relative w-full h-[300px] md:h-[500px] shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={`${post.title} - SofaIPTV Guide`}
              title={`${post.title} | SofaIPTV`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none text-slate-700">
          {(() => {
            const blocks = beforeFaq.split(/(?=\n## )/);
            
            if (blocks.length <= 2) {
              return (
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {beforeFaq}
                </ReactMarkdown>
              );
            }

            const firstCtaIndex = Math.min(2, blocks.length - 1);
            const secondCtaIndex = Math.max(firstCtaIndex + 1, Math.floor(blocks.length / 2));

            return blocks.map((block, index) => (
              <React.Fragment key={index}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {block}
                </ReactMarkdown>
                {index === firstCtaIndex && <BlogOfferCard />}
                {index === secondCtaIndex && index !== firstCtaIndex && <BlogOfferCard />}
              </React.Fragment>
            ));
          })()}

          {faqs.length > 0 && (
            <div className="mt-12 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-black">Frequently Asked Questions</h2>
              <ArticleFAQAccordion faqs={faqs} />
            </div>
          )}

          {afterFaq && (
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {afterFaq}
            </ReactMarkdown>
          )}
        </div>
      </article>

      {/* Related Articles Section */}
      {(() => {
        const relatedPosts = blogPosts
          .filter((p) => p.slug !== post.slug)
          .slice(0, 3);
        if (relatedPosts.length === 0) return null;
        return (
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-black mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link href={`/blog/${relPost.slug}`} key={relPost.id}>
                  <article className="rounded-2xl overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-300 h-full border border-black/10 hover:border-indigo-500/40 shadow-sm bg-white">
                    <div className="h-40 relative overflow-hidden shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={`${relPost.title} - SofaIPTV Tutorial`}
                        title={`${relPost.title} | SofaIPTV`}
                        src={relPost.coverImage || "/blog/high-quality-iptv-service.webp"}
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-grow bg-white">
                      <span className="text-xs text-indigo-600 font-bold mb-2">{relPost.category}</span>
                      <h3 className="text-base font-bold text-black mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                        {relPost.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-auto">
                        {relPost.date}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        );
      })()}
    </main>
  );
}
