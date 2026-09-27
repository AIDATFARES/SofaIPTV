import type { Metadata } from "next";
import ContactPageContent from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "SofaIPTV Support - 24/7 Live Customer Service & Instant WhatsApp Assistance",
  description:
    "Need help? Contact the SofaIPTV support team. Available 24/7 via WhatsApp and email for instant account activation, playlist setup, line diagnostics, and questions. Response in under 5 minutes.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "SofaIPTV Support - 24/7 Live Customer Service & Instant WhatsApp Assistance",
    description:
      "Need help? Contact the SofaIPTV support team. Available 24/7 via WhatsApp and email for instant account activation, playlist setup, line diagnostics, and questions. Response in under 5 minutes.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
