import React from "react";
import { img, images } from "../utils/images";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Background image id from `images` — defaults to an abstract blue field. */
  image?: string;
};

/**
 * Banner for standalone pages (About, Pricing). Image-backed with a soft
 * light wash, frosted accent orbs, and the mono eyebrow — matching the
 * homepage hero's glass treatment.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  image = images.abstractBlue,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.16]"
        style={{ backgroundImage: `url(${img(image, 2000, 70)})` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper/80 via-paper/85 to-paper"
        aria-hidden
      />
      <div className="orb orb-accent -right-32 -top-24 h-[32rem] w-[32rem] opacity-50" aria-hidden />
      <div
        className="blueprint pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
      />
      <div className="relative mx-auto max-w-screen-xl px-6 pt-36 pb-16 sm:pt-44 sm:pb-20">
        <span className="mono inline-flex items-center rounded-full border border-accent-soft bg-accent-soft px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-accent-bright">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-3xl display text-4xl font-semibold leading-[1.05] tracking-tighter text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
