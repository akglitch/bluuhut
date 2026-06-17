import React from "react";
import { Link } from "@nextui-org/react";
import Reveal from "./Reveal";
import { pricingData, PricingPlan } from "../utils/data";

const CheckIcon = ({ featured }: { featured?: boolean }) => (
  <svg
    className={`mt-0.5 h-4 w-4 flex-none ${featured ? "text-white" : "text-accent-bright"}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m5 13 4 4L19 7" />
  </svg>
);

function PlanCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const featured = plan.featured;
  return (
    <Reveal
      delay={index * 0.06}
      className={`flex flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 ${
        featured
          ? "border border-accent bg-accent text-white shadow-accent"
          : "glass text-ink"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="display text-xl font-semibold">{plan.title}</h3>
        {featured && (
          <span className="mono rounded-full bg-white px-2.5 py-1 text-[0.625rem] font-medium uppercase tracking-[0.12em] text-accent">
            Popular
          </span>
        )}
      </div>

      <div className="relative mt-5 flex items-baseline gap-1.5">
        <span className="mono text-4xl font-medium">{plan.price}</span>
        {plan.period && (
          <span className={`mono text-sm ${featured ? "text-white/60" : "text-muted"}`}>
            {plan.period}
          </span>
        )}
      </div>

      <p
        className={`relative mt-3 text-sm leading-relaxed ${
          featured ? "text-white/75" : "text-muted"
        }`}
      >
        {plan.description}
      </p>

      <ul
        className={`relative mt-6 flex-1 space-y-3 border-t pt-6 ${
          featured ? "border-white/20" : "border-line"
        }`}
      >
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <CheckIcon featured={featured} />
            <span className={featured ? "text-white/90" : "text-ink-soft"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/#contact"
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
          featured
            ? "bg-white text-accent hover:opacity-90"
            : "bg-accent text-white hover:bg-accent-ink"
        }`}
      >
        {plan.cta} <span aria-hidden>→</span>
      </Link>
    </Reveal>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="mesh relative overflow-hidden py-20 sm:py-28">
      <div className="orb orb-accent right-[-12rem] top-0 h-[30rem] w-[30rem] opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-screen-xl px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pricingData.map((plan, index) => (
            <PlanCard key={plan.title} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
