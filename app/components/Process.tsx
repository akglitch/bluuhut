import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { processSteps } from "../utils/data";

export default function Process() {
  return (
    <section
      id="process"
      className="mesh relative overflow-hidden border-b border-line py-20 sm:py-28"
    >
      <div
        className="orb orb-ink left-[-10rem] bottom-0 h-[28rem] w-[28rem] opacity-40"
        aria-hidden
      />
      <div className="relative mx-auto max-w-screen-xl px-6">
        <SectionHeading
          index="03 / 04"
          eyebrow="How We Work"
          title={
            <>
              From first call to{" "}
              <span className="text-accent-bright">handover.</span>
            </>
          }
          description="Four clear stages, so you always know what's next and what it costs."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.step}
              delay={index * 0.08}
              className="glass relative rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="mono text-5xl font-medium text-accent-bright/40 lg:text-6xl">
                {step.step}
              </span>
              <h3 className="mt-5 display text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
