import type { Metadata } from "next";
import FaqPageContent from "@/components/faq/FaqPageContent";

export const metadata: Metadata = {
  title: "SofaIPTV FAQ - Answers to Subscriptions, Devices, Free Trials & Streaming Quality",
  description:
    "Find quick answers to common questions about SofaIPTV: subscription plans, multi-device support, 4K picture quality, anti-freeze technology, payment methods, and 24/7 customer support.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "SofaIPTV FAQ - Answers to Subscriptions, Devices, Free Trials & Streaming Quality",
    description:
      "Find quick answers to common questions about SofaIPTV: subscription plans, multi-device support, 4K picture quality, anti-freeze technology, payment methods, and 24/7 customer support.",
    url: "/faq",
    type: "website",
  },
};

export default function FaqPage() {
  return <FaqPageContent />;
}
