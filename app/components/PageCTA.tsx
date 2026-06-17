import React from "react";
import { Link } from "@nextui-org/react";
import { img, images } from "../utils/images";

type PageCTAProps = {
  title: React.ReactNode;
  body?: string;
};

/** Closing call-to-action — cobalt field over a blurred engineering image. */
export default function PageCTA({ title, body }: PageCTAProps) {
  return (
    <section className="relative overflow-hidden bg-accent py-20 text-white sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay"
        style={{ backgroundImage: `url(${img(images.serverRoom, 2000, 70)})` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-accent-ink/80 to-accent/30"
        aria-hidden
      />
      <div className="orb left-1/3 top-[-8rem] h-[24rem] w-[24rem] bg-white/20 opacity-40" aria-hidden />
      <div className="relative mx-auto flex max-w-screen-xl flex-col items-start gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="max-w-xl display text-3xl font-semibold leading-[1.1] tracking-tighter sm:text-4xl">
            {title}
          </h2>
          {body && <p className="mt-4 max-w-md text-white/80">{body}</p>}
        </div>
        <Link
          href="/#contact"
          className="inline-flex flex-none items-center gap-2.5 rounded-full bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent shadow-card transition-colors hover:bg-paper hover:text-ink"
        >
          Request a quote <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
