"use client";

import SectionTitle from "./SectionTitle";
import Timeline from "./Timeline";

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Roadmap Amania.id"
          subtitle="Peta jalan strategis kami dalam mewujudkan visi besar untuk memajukan talenta digital dan ekosistem inovasi di Indonesia."
        />

        <div className="mt-20">
          <Timeline />
        </div>
      </div>
    </section>
  );
}
