import type { Metadata } from "next";
import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata: Metadata = {
  title: "SofaIPTV Pricing Plans - Affordable 4K Subscriptions with 7-Day Guarantee",
  description:
    "Explore SofaIPTV subscription plans starting at just $14.99/mo. 50,000+ live channels, 200,000+ VODs, 4K 60FPS sports, zero buffering, and 7-day money-back guarantee. Instant activation.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "SofaIPTV Pricing Plans - Affordable 4K Subscriptions",
    description:
      "Explore SofaIPTV subscription plans starting at just $14.99/mo. 50,000+ live channels, 200,000+ VODs, and 7-day money-back guarantee.",
    url: "/pricing",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <main className="flex-grow">
      <PricingPageContent />
    </main>
  );
}
