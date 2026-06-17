import Hero from "./components/hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Process from "./components/Process";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Industries />
      <Process />
      <Contact />
    </>
  );
}
