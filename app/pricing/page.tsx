import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import Pricing from "../components/Pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent maintenance plans from BlueHut Solutions, fixed monthly cover or a scoped program tailored to your portfolio.",
};

const faqs = [
  {
    q: "What counts as a minor vs. major task?",
    a: "Minor tasks are quick fixes and routine upkeep. Major tasks involve larger installs or repairs. We confirm scope before any work begins.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Upgrade, downgrade, or move to a custom program at any time as your needs change.",
  },
  {
    q: "Do you cover emergencies?",
    a: "All plans include priority scheduling, and 24/7 emergency response is available on Premium and Custom programs.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Plans"
        title={
          <>
            Transparent cover,{" "}
            <span className="text-accent-bright">no surprises.</span>
          </>
        }
        description="Fixed monthly plans for ongoing upkeep, or a scoped program tailored to your portfolio."
      />

      <Pricing />

      {/* FAQ */}
      <section className="border-t border-line bg-sand py-20 sm:py-24">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="rule-accent" />
              <h2 className="mt-6 display text-3xl font-semibold tracking-tighter text-ink sm:text-4xl">
                Common questions
              </h2>
            </div>
            <dl className="lg:col-span-8">
              {faqs.map((item) => (
                <div key={item.q} className="border-b border-line py-6 first:border-t">
                  <dt className="display text-lg font-semibold text-ink">
                    {item.q}
                  </dt>
                  <dd className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
