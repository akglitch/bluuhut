import React from "react";

export const siteUrl = "bluehutsolutions.ca";

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  capabilities: string[];
}

const iconClass = "h-6 w-6";

export const serviceData: Service[] = [
  {
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l0-8Z" />
      </svg>
    ),
    title: "Electrical Solutions",
    description:
      "Safe, code-compliant electrical engineering for homes, businesses, and industry.",
    capabilities: [
      "Power distribution & panel upgrades",
      "Lighting & energy-efficiency retrofits",
      "Code compliance & safety inspections",
    ],
  },
  {
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h.01" />
        <path d="M2 8.82a15 15 0 0 1 20 0" />
        <path d="M5 12.86a10 10 0 0 1 14 0" />
        <path d="M8.5 16.43a5 5 0 0 1 7 0" />
      </svg>
    ),
    title: "Telecom & Networks",
    description:
      "Modern communication infrastructure, designed and deployed end to end.",
    capabilities: [
      "Structured cabling & fiber",
      "Network design & optimization",
      "Deployment & field commissioning",
    ],
  },
  {
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
      </svg>
    ),
    title: "Facility & Handyman",
    description:
      "Skilled upkeep and repairs that keep your property running.",
    capabilities: [
      "Preventative maintenance plans",
      "Installations & fittings",
      "Repairs & finishing work",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Industries served                                                  */
/* ------------------------------------------------------------------ */

export const industries = [
  { name: "Residential", desc: "Homes & multi-unit dwellings" },
  { name: "Commercial", desc: "Offices, retail & hospitality" },
  { name: "Industrial", desc: "Plants & manufacturing" },
  { name: "Telecom", desc: "Carriers & service providers" },
  { name: "Government", desc: "Public sector & utilities" },
  { name: "Enterprise", desc: "Campuses & data facilities" },
];

/* ------------------------------------------------------------------ */
/*  Why BlueHut — value propositions                                   */
/* ------------------------------------------------------------------ */

export const valueProps = [
  {
    title: "Licensed & insured",
    desc: "Certified technicians and full coverage on every job.",
  },
  {
    title: "Engineered to standard",
    desc: "Work to code, quality-checked at every stage.",
  },
  {
    title: "Rapid response",
    desc: "24/7 emergency support and dependable scheduling.",
  },
  {
    title: "Transparent pricing",
    desc: "Clear, upfront quotes, no surprises.",
  },
];

/* ------------------------------------------------------------------ */
/*  Delivery process                                                   */
/* ------------------------------------------------------------------ */

export const processSteps = [
  {
    step: "01",
    title: "Consult & assess",
    desc: "We inspect the site and define scope together.",
  },
  {
    step: "02",
    title: "Design & quote",
    desc: "A clear plan with upfront pricing and a timeline.",
  },
  {
    step: "03",
    title: "Build & deploy",
    desc: "Certified techs execute to code, quality-checked.",
  },
  {
    step: "04",
    title: "Support & maintain",
    desc: "Ongoing upkeep and 24/7 response keep you running.",
  },
];

/* ------------------------------------------------------------------ */
/*  Pricing                                                            */
/* ------------------------------------------------------------------ */

export interface PricingPlan {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

export const pricingData: PricingPlan[] = [
  {
    title: "Basic",
    price: "CAD $65",
    period: "/month",
    description: "Essential cover for small homes.",
    features: [
      "Two minor repairs / maintenance tasks per month",
      "Discounted rates on additional services",
      "Priority scheduling",
    ],
    cta: "Get started",
  },
  {
    title: "Standard",
    price: "CAD $115",
    period: "/month",
    description: "Balanced cover for busy households and small offices.",
    features: [
      "Four minor tasks or one major task per month",
      "Further discounted rates on extra work",
      "Priority scheduling & reporting",
    ],
    featured: true,
    cta: "Choose Standard",
  },
  {
    title: "Premium",
    price: "CAD $215",
    period: "/month",
    description: "Comprehensive cover for demanding properties.",
    features: [
      "Unlimited minor repairs + two major tasks / month",
      "Lowest rates on out-of-plan services",
      "Dedicated account contact",
    ],
    cta: "Choose Premium",
  },
  {
    title: "Custom & Enterprise",
    price: "Let's talk",
    description: "Tailored programs for businesses and multi-site portfolios.",
    features: [
      "Scoped to your frequency and SLAs",
      "Emergency services & annual inspections",
      "Seasonal maintenance packages",
    ],
    cta: "Contact sales",
  },
];
