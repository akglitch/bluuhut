import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Member {
  name: string;
  role: string;
  description: string;
}

const teamMembers: Member[] = [
  {
    name: "Raphael Kwadwo Aninakwa",
    role: "Managing Director",
    description:
      "A decade across electrical and telecom engineering, setting the standard for technical rigour and safety.",
  },
  {
    name: "Kwaku Ntiri",
    role: "Chief Operations Officer",
    description:
      "Nine years in operations, keeping every project on scope, on budget, and on time.",
  },
];

function monogram(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TeamMember({ member, index }: { member: Member; index: number }) {
  return (
    <Reveal
      delay={index * 0.08}
      className="glass group flex flex-col rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-5">
        <span className="mono flex h-16 w-16 flex-none items-center justify-center rounded-xl bg-accent text-lg font-medium tracking-wide text-white">
          {monogram(member.name)}
        </span>
        <div>
          <h3 className="display text-xl font-semibold text-ink">
            {member.name}
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-bright">
            {member.role}
          </p>
        </div>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-soft">
        {member.description}
      </p>
    </Reveal>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      className="mesh relative overflow-hidden border-b border-line py-20 sm:py-28"
    >
      <div className="orb orb-ink left-[-10rem] bottom-[-4rem] h-[26rem] w-[26rem] opacity-35" aria-hidden />
      <div className="relative mx-auto max-w-screen-xl px-6">
        <SectionHeading
          eyebrow="Leadership"
          title={
            <>
              The people{" "}
              <span className="text-accent-bright">accountable for the work.</span>
            </>
          }
          description="A hands-on team that stays close to every engagement."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
