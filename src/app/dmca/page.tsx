import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SofaIPTV DMCA Notice & Legal Disclaimer - Compliance & Copyright Policy",
  description:
    "Read the official SofaIPTV DMCA notice, copyright compliance policies, terms of service limitations, and intellectual property takedown request procedures.",
  alternates: {
    canonical: "/dmca",
  },
  openGraph: {
    title: "SofaIPTV DMCA Notice & Legal Disclaimer - Compliance & Copyright Policy",
    description:
      "Read the official SofaIPTV DMCA notice, copyright compliance policies, terms of service limitations, and intellectual property takedown request procedures.",
    url: "/dmca",
    type: "website",
  },
};

const sections = [
  {
    title: "No Legal Advice",
    content: [
      "Nothing presented on this website or in our communications serves as legal or compliance counsel. If you have questions about IPTV legality in your jurisdiction, consult a qualified attorney.",
    ],
  },
  {
    title: "Content Ownership and Hosting",
    content: [
      "SofaIPTV does not possess, manage, upload, store, or distribute copyrighted materials. All streams available via your account are sourced from external third parties on the public internet. Mentions of channels, logos, or trademarks are solely for identification purposes and are owned by their respective entities.",
    ],
  },
  {
    title: "Availability and Service Changes",
    content: [
      <>Channel and VOD options may vary in availability, quality (including 4K/FHD/HD), features, plans, and <Link className="font-semibold text-indigo-600 hover:text-cyan-600" href="/pricing">pricing</Link>, and can be modified or removed by region without prior notification. We do not assure the availability of any particular <Link className="font-semibold text-indigo-600 hover:text-cyan-600" href="/channels">channel</Link>, event, or title.</>,
    ],
  },
  {
    title: "User Responsibility and Compliance",
    content: [
      "You are entirely accountable for your account usage and for following all relevant local laws and regulations. Avoid any actions with the service that could infringe on third-party rights. If you are uncertain about the legality of your usage, obtain independent legal counsel prior to proceeding.",
    ],
  },
  {
    title: "Third‑Party Links and Services",
    content: [
      "Our site could have links to third-party websites, applications, or services. We do not oversee and are not responsible for the content, policies, or practices of these third-party entities. Utilizing third-party services is at your own risk.",
    ],
  },
  {
    title: "No Warranties",
    content: [
      "THE SERVICE AND WEBSITE ARE OFFERED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. THIS INCLUDES, BUT IS NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON‑INFRINGEMENT. We do not guarantee uninterrupted, error-free, or secure operation.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "SofaIPTV, its owners, affiliates, employees, and agents shall not be liable to the fullest extent permitted by law for any indirect, incidental, special, exemplary, or punitive damages, or for loss of data, profits, or goodwill connected to your use of the site or service.",
    ],
  },
  {
    title: "Indemnification",
    content: [
      "You agree to defend, indemnify, and shield SofaIPTV from any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) related to your use of the service or any infringement of this disclaimer or applicable law.",
    ],
  },
  {
    title: "DMCA Takedown",
    content: [
      "In the event that you are a copyright owner or an agent and believe that content reachable through our service infringes your copyright, send a notice with the following information:",
    ],
    items: [
      "Identification of the work claimed to be infringed.",
      "Specify the exact location, like a URL or channel name, of the material you assert is infringing.",
      "We need your name, organization (if relevant), address, phone number, and email.",
      "You need to provide a statement affirming your honest belief that the disputed usage is not sanctioned by the copyright holder, their agent, or legal regulations.",
      "A perjury-penalized statement indicating that the information in the notice is accurate and that you are either the copyright owner or are authorized to represent the owner's interests.",
      "A valid copyright claim necessitates a physical or electronic signature from the owner or their representative.",
    ],
    after: "Submit DMCA notices: Access our Contact form. Valid notifications will be examined, and actions executed quickly.",
  },
  {
    title: "Changes to This Disclaimer",
    content: [
      "This disclaimer might be updated from time to time. Continued use of this site or service after changes indicates your acceptance of the revised terms.",
    ],
  },
];

export default function DmcaPage() {
  return (
    <main className="flex-grow px-5 pb-20 pt-6 sm:px-8 sm:pt-8">
      <article className="mx-auto max-w-4xl">
        <header className="border-b border-black/10 pb-10 text-center mx-auto max-w-3xl">
          <span className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-50/50 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-indigo-600">Legal information</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
            <span className="block text-black">Legal Disclaimer</span>
            <span className="mt-1 block bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">&amp; DMCA Notice.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-600">Last updated: 2026</p>
        </header>

        <div className="mt-10 space-y-10 text-base leading-7 text-on-surface-variant">
          <div className="space-y-4">
            <p>Content featured on this website is meant for general informational use and does not serve as legal advice. By engaging with our site or services, you agree to this disclaimer.</p>
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-50/50 p-5 text-sm">
              <strong className="text-black">Important:</strong> SofaIPTV delivers an intuitive IPTV service interface alongside account provisioning. We do not host, upload, store, or archive any audiovisual content. The details on this site are provided &apos;as is&apos; for general guidance, not legal counsel.
            </div>
          </div>

          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="text-2xl font-bold text-black">{index + 1}. {section.title}</h2>
              {section.content.map((paragraph, i) => <p className="mt-4" key={i}>{paragraph}</p>)}
              {section.items && section.items.length > 0 && <ul className="mt-4 list-disc space-y-2 pl-6 marker:text-indigo-600">{section.items.map((item, i) => <li key={i}>{item}</li>)}</ul>}
              {section.after && <p className="mt-4">{section.after}</p>}
            </section>
          ))}
          
          <section>
            <h2 className="text-2xl font-bold text-black">11. Contact</h2>
            <p className="mt-4">For any inquiries, refer to our Terms of Service and <Link className="font-semibold text-indigo-600 hover:text-cyan-600" href="/privacy-policy">Privacy Policy</Link>, or contact <Link className="font-semibold text-indigo-600 hover:text-cyan-600" href="/contact">support</Link>.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
