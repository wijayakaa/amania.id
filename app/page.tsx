import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Partners from "@/components/Partners";
import Collaboration from "@/components/Collaboration";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Impact />
      <Partners />
      <Collaboration />
      <Roadmap />
      <Team />
      <CTA />
    </div>
  );
}
