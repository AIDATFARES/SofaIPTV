import type { Metadata } from "next";
import BlogPageContent from "@/components/blog/BlogPageContent";

export const metadata: Metadata = {
  title: "SofaIPTV Blog - Expert IPTV Guides, Tutorials, App Reviews & Streaming Tips",
  description:
    "In-depth IPTV tutorials, player app reviews, troubleshooting guides, and expert cord-cutting tips from SofaIPTV. Learn how to maximize your 4K streaming performance and eliminate buffering.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "SofaIPTV Blog - Expert IPTV Guides, Tutorials, App Reviews & Streaming Tips",
    description:
      "In-depth IPTV tutorials, player app reviews, troubleshooting guides, and expert cord-cutting tips from SofaIPTV. Learn how to maximize your 4K streaming performance and eliminate buffering.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
