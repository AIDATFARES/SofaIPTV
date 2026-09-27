import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SofaIPTV Privacy Policy - Official Data Protection & Privacy Information",
  description:
    "Learn how SofaIPTV safeguards your personal data, secure payment processing, device encryption, and user privacy rights across all our services.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "SofaIPTV Privacy Policy - Official Data Protection & Privacy Information",
    description:
      "Learn how SofaIPTV safeguards your personal data, secure payment processing, device encryption, and user privacy rights across all our services.",
    url: "/privacy-policy",
    type: "website",
  },
};

const sections = [
  {
    title: "1. Data We Collect",
    content: [
      <>We collect personal data that you voluntarily provide when you subscribe to our SofaIPTV service, request information about our products or services, or <Link className="font-semibold text-indigo-600 hover:text-cyan-600" href="/contact">contact us</Link>. The personal data we collect may include the following:</>,
    ],
    items: [
      "Contact information: Your email address, which we use for account creation, credential delivery, and communication.",
      "Payment data: Information required to process a purchase, such as your payment method. Payment details are processed and stored securely by our payment processor. We recommend reviewing that processor's privacy policy.",
      "Device and connection information: When you access our service, we may automatically collect your IP address and device details, including device type and operating system. This information helps us maintain service performance and security.",
    ],
  },
  {
    title: "2. How We Use Your Data",
    content: ["We use the information we collect to:"],
    items: [
      "Provide and manage your account, including keeping your subscription active.",
      "Process transactions and bill you for the services you purchase.",
      "Send administrative information, including account notices, service updates, and policy changes.",
      "Protect our services by helping prevent unauthorized access, fraud, and security threats such as DDoS attacks.",
    ],
  },
  {
    title: "3. Legal Bases for Processing",
    content: ["We process your personal information using one or more of the following legal bases:"],
    items: [
      "Consent: You have given us clear permission to use your personal information for a specific purpose.",
      "Legitimate interests: Processing is necessary for legitimate business purposes, such as delivering our services and preventing fraudulent activity.",
      "Performance of a contract: Processing is necessary to provide the services covered by our agreement with you.",
    ],
  },
  {
    title: "4. Data Retention",
    content: ["We retain personal information only for as long as necessary to fulfil the purposes described in this policy, unless a longer retention period is required or permitted by law for tax, accounting, or other legal obligations."],
  },
  {
    title: "5. Cookies & Tracking Technologies",
    content: ["We may use cookies and similar technologies to collect or store information. These are primarily functional cookies that are essential for the website and client area to operate effectively. We do not use intrusive advertising tracking cookies."],
  },
  {
    title: "6. Third-Party Services",
    content: ["We may share data with third-party vendors, service providers, or agents that perform services for us or on our behalf and need the information to carry out their duties. These may include:"],
    items: [
      "Payment gateways, which process payments securely.",
      "Analytics providers, which help us improve our services. Information shared with these providers is typically anonymized and aggregated.",
    ],
  },
  {
    title: "7. Data Security",
    content: ["We use appropriate technical and organizational security measures to protect the confidentiality of the personal information we process. However, no internet transmission or storage system can be guaranteed to be completely secure."],
  },
  {
    title: "8. Your Data Protection Rights",
    content: ["Your rights may depend on your location. Subject to applicable law, you may have the right to:"],
    items: [
      "Access and request copies of your personal information.",
      "Request correction of inaccurate or incomplete information.",
      "Request erasure of your personal information in certain circumstances.",
      "Opt out of marketing and promotional communications at any time.",
    ],
    after: <>To exercise any of these rights, please <Link className="font-semibold text-indigo-600 hover:text-cyan-600" href="/contact">contact our support team</Link>.</>,
  },
  {
    title: "9. Children's Privacy",
    content: ["Our services are not intended for anyone under the age of 18. We do not knowingly collect personal information from children under 18."],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-grow px-5 pb-20 pt-6 sm:px-8 sm:pt-8 text-format-legal">
      <article className="mx-auto max-w-4xl">
        <header className="border-b border-black/10 pb-10 text-center mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-50/50 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-indigo-600">Legal information</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="block text-black">Privacy &amp; Data Protection</span>
            <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">Official Policy.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-600">Last updated: 2026</p>
        </header>

        <div className="mt-10 space-y-10 text-base leading-7 text-on-surface-variant">
          <p>Welcome to SofaIPTV. We are committed to protecting your personal information and respecting your privacy. If you have questions or concerns about this policy or our data practices, please <Link className="font-semibold text-indigo-600 hover:text-cyan-600" href="/contact">contact our support team</Link>.</p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-black">{section.title}</h2>
              {section.content.map((paragraph, index) => <p className="mt-4" key={index}>{paragraph}</p>)}
              {section.items && <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-indigo-600">{section.items.map((item, index) => <li key={index}>{item}</li>)}</ul>}
              {section.after && <p className="mt-4">{section.after}</p>}
            </section>
          ))}
          <section>
            <h2 className="text-2xl font-bold text-black">10. Contact Us</h2>
            <p className="mt-4">If you would like to discuss this policy or our handling of your personal information, please contact our <Link className="font-semibold text-indigo-600 hover:text-cyan-600" href="/contact">support team</Link>.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
