import React from "react";
import Reveal from "./Reveal";
import { industries } from "../utils/data";
import { img, images } from "../utils/images";

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden border-b border-line bg-paper py-20 text-ink sm:py-28"
    >
      {/* Industrial backdrop, blurred into the canvas */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${img(images.industrial, 2000, 70)})` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-paper/95 via-paper/80 to-paper/95"
        aria-hidden
      />
      <div className="orb orb-accent right-[-10rem] top-[-6rem] h-[30rem] w-[30rem] opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-screen-xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="index-num text-[0.6875rem] font-medium tracking-[0.15em] text-muted">
                  02 / 04
                </span>
                <span className="mono inline-flex items-center text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-accent-bright">
                  Industries Served
                </span>
              </div>
              <h2 className="mt-5 display text-3xl font-semibold leading-[1.08] tracking-tighter sm:text-4xl lg:text-[2.875rem]">
                Trusted where downtime{" "}
                <span className="text-accent-bright">isn&rsquo;t an option.</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-soft sm:text-lg">
                From a single residence to multi-site enterprise, one
                engineering standard at every level.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {industries.map((ind, i) => (
                  <li
                    key={ind.name}
                    className="glass group flex items-baseline gap-4 rounded-xl px-5 py-5 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="index-num text-xs font-medium text-accent-bright">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="display text-xl font-semibold text-ink transition-colors group-hover:text-accent-bright">
                        {ind.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{ind.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
