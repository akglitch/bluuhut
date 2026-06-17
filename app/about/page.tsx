import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import AboutUs from "../components/AboutUs";
import Team from "../components/Team";

export const metadata: Metadata = {
  title: "About",
  description:
    "BlueHut Solutions is a multidisciplinary engineering firm delivering reliable electrical, telecom, and facility work from concept through completion.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BlueHut"
        title={
          <>
            Engineering you can{" "}
            <span className="text-accent-bright">rely on for years.</span>
          </>
        }
        description="A multidisciplinary firm built for complex, critical work, from first scope to final commissioning."
      />
      <AboutUs />
      <Team />
    </>
  );
}
