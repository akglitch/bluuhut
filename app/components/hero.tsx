"use client";
import { Link } from "@nextui-org/react";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { img, images } from "../utils/images";

const stats = [
  { value: "12+", label: "Years of experience" },
  { value: "850+", label: "Projects delivered" },
  { value: "24/7", label: "Emergency response" },
  { value: "100%", label: "Licensed & insured" },
];

function Stars() {
  return (
    <span className="inline-flex items-center gap-0.5 text-accent" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-paper pt-32 sm:pt-40 lg:pb-0 border-b border-line">
      {/* Very subtle technical grid background */}
      <div className="blueprint absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none" aria-hidden />

      <div className="relative z-10 mx-auto max-w-screen-xl px-6 pb-20 lg:pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* ---- Left: Editorial Typography ------------------------------------------ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-accent" aria-hidden />
              <span className="mono text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-accent">
                Critical Infrastructure
              </span>
            </div>

            <h1 className="display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-7xl lg:text-[5rem] text-balance">
              Power &amp; telecom that <span className="italic font-light text-accent-ink">performs</span> for decades.
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-soft sm:text-xl font-normal text-pretty">
              We design, build, and maintain the critical electrical and
              communication systems behind homes, businesses, and enterprise,
              to code, on schedule, and built to last.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/#contact"
                className="group relative inline-flex items-center gap-3 bg-ink px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-surface transition-all hover:bg-accent-ink"
              >
                Start a project
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              
              <Link
                href="/#services"
                className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:text-accent-ink"
              >
                <span className="border-b-2 border-line-strong pb-1 transition-colors group-hover:border-accent">
                  View capabilities
                </span>
              </Link>
            </div>
            
            <div className="mt-14 pt-8 border-t border-line flex items-center gap-4">
               <Stars />
               <span className="mono text-xs uppercase tracking-widest text-muted">Trusted since 2012</span>
            </div>
          </motion.div>

          {/* ---- Right: Striking Clean Image ----------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(10% 10% 10% 10%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden bg-sand shadow-float">
              <motion.div
                style={{ y: yBg }}
                className="absolute -inset-10 bg-cover bg-center"
              >
                <div 
                   className="absolute inset-0 bg-cover bg-center"
                   style={{ backgroundImage: `url(${img(images.engineer, 1400, 78)})` }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="relative bg-surface border-t border-line z-10">
        <dl className="mx-auto grid max-w-screen-xl grid-cols-2 divide-x divide-line lg:grid-cols-4">
          {stats.map((s, idx) => (
            <motion.div 
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + (idx * 0.1), duration: 0.5 }}
              className="px-6 py-8 sm:py-12"
            >
              <dt className="display text-3xl font-semibold leading-none text-ink sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-3 mono text-[0.65rem] tracking-widest uppercase text-muted">{s.label}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
