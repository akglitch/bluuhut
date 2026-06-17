import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { serviceData } from "../utils/data";

export default function Services() {
  return (
    <section
      id="services"
      className="mesh relative overflow-hidden border-b border-line py-20 sm:py-28"
    >
      <div
        className="orb orb-accent right-[-12rem] top-10 h-[30rem] w-[30rem] opacity-40"
        aria-hidden
      />
      <div className="relative mx-auto max-w-screen-xl px-6">
        <SectionHeading
          index="01 / 04"
          eyebrow="Capabilities"
          title={
            <>
              Three disciplines, one{" "}
              <span className="text-accent-bright">accountable team.</span>
            </>
          }
          description="From power to networks to facility care, the full lifecycle of the systems that keep you running."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {serviceData.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.08}
              className="glass group flex flex-col rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="index-num text-sm font-semibold text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent-bright transition-colors group-hover:bg-accent group-hover:text-white">
                  {service.icon}
                </span>
              </div>

              <h3 className="mt-6 display text-2xl font-semibold text-ink">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-soft">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                {service.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-3 text-sm text-ink-soft"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" aria-hidden />
                    {cap}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
