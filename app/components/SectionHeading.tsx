import React from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  /** e.g. "01 / 06" — the editorial section index */
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

/**
 * Consistent editorial section header: section index, eyebrow label,
 * serif display title, and supporting copy.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      <div
        className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
      >
        {index && (
          <span className="index-num text-[0.6875rem] font-semibold tracking-[0.15em] text-muted">
            {index}
          </span>
        )}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-5 display text-3xl font-semibold leading-[1.08] tracking-tighter text-ink sm:text-4xl lg:text-[2.875rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-soft text-pretty sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
