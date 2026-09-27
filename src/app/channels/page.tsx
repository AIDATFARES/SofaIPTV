import type { Metadata } from "next";
import ChannelsPageContent from "@/components/channels/ChannelsPageContent";

export const metadata: Metadata = {
  title: "SofaIPTV Channels & VOD - Complete 50,000+ 4K Channel List & Movie Directory",
  description:
    "Browse the full SofaIPTV channel lineup. Over 50,000 live worldwide channels and 200,000+ movies & series across 150+ countries. Live sports, PPV, cinema, kids, and international packages in 4K UHD.",
  alternates: {
    canonical: "/channels",
  },
  openGraph: {
    title: "SofaIPTV Channels & VOD - Complete 50,000+ 4K Channel List",
    description:
      "Browse the full SofaIPTV channel lineup: 50,000+ live HD/4K channels and 200,000+ VOD movies & series with anti-freeze streaming technology.",
    url: "/channels",
    type: "website",
  },
};

export default function ChannelsPage() {
  return <ChannelsPageContent />;
}
