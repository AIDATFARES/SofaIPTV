import type { Metadata } from "next";
import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata: Metadata = {
  title: "SofaIPTV Reseller Program - High-Margin IPTV Business Panel & Wholesale Credits",
  description:
    "Start your IPTV business with SofaIPTV. Access the official Xtream Codes reseller panel with custom credit packages, sub-reseller management, unlimited free test trials, and 24/7 dedicated support.",
  alternates: {
    canonical: "/reseller",
  },
  openGraph: {
    title: "SofaIPTV Reseller Program - High-Margin IPTV Business Panel & Wholesale Credits",
    description:
      "Start your IPTV business with SofaIPTV. Access the official Xtream Codes reseller panel with custom credit packages, sub-reseller management, unlimited free test trials, and 24/7 dedicated support.",
    url: "/reseller",
    type: "website",
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow">
      <ResellerPageContent />
    </main>
  );
}
