import React from "react";

const credentials = [
  "ESA Licensed",
  "CSA Standards",
  "IBEW Trained",
  "CEC Compliant",
  "ISO 9001",
  "WSIB Covered",
  "Fibre Certified",
  "24/7 Response",
];

/**
 * Trust strip — a continuously scrolling marquee of the certifications
 * and standards BlueHut works to. Mirrors the "partnered with" band
 * from the reference layout, adapted to credentials we can stand behind.
 */
export default function Marquee() {
  // Duplicated track so the -50% keyframe loops seamlessly.
  const track = [...credentials, ...credentials];

  return (
    <section className="relative border-y border-line bg-sand py-10">
      <p className="mono mb-7 text-center text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-muted">
        Built to the standards that matter
      </p>
      <div className="marquee-mask relative overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-12 pr-12">
          {track.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="mono flex flex-none items-center gap-3 text-sm font-medium uppercase tracking-[0.12em] text-ink-soft"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" aria-hidden />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
