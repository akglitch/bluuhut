import React from "react";
import Reveal from "./Reveal";
import { valueProps } from "../utils/data";

const AboutUs: React.FC = () => {
  return (
    <section className="mesh relative overflow-hidden border-b border-line py-20 sm:py-28">
      <div className="orb orb-accent right-[-12rem] top-0 h-[30rem] w-[30rem] opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-screen-xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rule-accent" />
              <h2 className="mt-6 display text-3xl font-semibold leading-[1.08] tracking-tighter text-ink sm:text-4xl">
                An engineering partner built for{" "}
                <span className="text-accent-bright">complex, critical work.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-soft sm:text-lg">
                We deliver reliable engineering from concept through
                implementation, pairing deep technical expertise with an
                uncompromising commitment to safety and on-time delivery.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {valueProps.map((v, i) => (
                  <div key={v.title} className="glass rounded-xl p-6">
                    <div className="flex items-baseline gap-3">
                      <span className="index-num text-xs font-semibold text-accent-bright">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <dt className="display text-lg font-semibold text-ink">
                        {v.title}
                      </dt>
                    </div>
                    <dd className="mt-2 pl-8 text-sm leading-relaxed text-muted">
                      {v.desc}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Pull-quote + metrics — solid cobalt accent block */}
          <Reveal delay={0.15} className="lg:col-span-5">
            <figure className="flex h-full flex-col justify-between rounded-2xl bg-accent p-9 text-white shadow-accent sm:p-10">
              <blockquote>
                <span className="mono text-[0.625rem] font-medium uppercase tracking-[0.2em] text-white/60">
                  {"// Operating principle"}
                </span>
                <p className="mt-4 display text-2xl font-medium leading-snug">
                  We don&rsquo;t just complete projects, we engineer outcomes
                  clients rely on for years.
                </p>
              </blockquote>

              <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden border-t border-white/20 pt-8">
                {[
                  { k: "12+", v: "Years experience" },
                  { k: "850+", v: "Projects delivered" },
                  { k: "98%", v: "Client retention" },
                  { k: "24/7", v: "Emergency support" },
                ].map((m) => (
                  <div key={m.v} className="py-1">
                    <dt className="mono text-3xl font-medium text-white">
                      {m.k}
                    </dt>
                    <dd className="mt-1 text-xs uppercase tracking-[0.12em] text-white/70">
                      {m.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
