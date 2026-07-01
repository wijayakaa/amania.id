"use client";

import Image from "next/image";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const partners = [
  "APTIKOM",
  "AWS",
  "Microsoft",
  "ASASI",
  "IAII",
  "PIJAR",
  "Kampus Merdeka",
];

export default function Partners() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Partner Strategis"
          subtitle="Berkolaborasi dengan berbagai institusi dan perusahaan teknologi terkemuka untuk membangun ekosistem digital Indonesia."
        />

        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <Reveal key={index} direction="up" delay={0.1 + index * 0.1}>
              <div className="group relative h-16 w-32 md:w-40 flex items-center justify-center">
                {/* Fallback text if image not available */}
                <div className="absolute inset-0 flex items-center justify-center font-bold text-slate-300 text-xl group-hover:text-navy transition-colors duration-300">
                  {partner}
                </div>
                
                {/* Image tag ready for actual logos */}
                <Image
                  src={`/images/partners/${partner.toLowerCase().replace(" ", "-")}.png`}
                  alt={`${partner} Logo`}
                  fill
                  className="object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 z-10"
                  onError={(e) => {
                    // Hide image on error so fallback text shows
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
