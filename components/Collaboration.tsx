"use client";

import Image from "next/image";
import { Network, Lightbulb, TrendingUp, Cpu } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const benefits = [
  {
    title: "Memperluas Jangkauan",
    description: "Akses ke ribuan talenta digital di seluruh Indonesia melalui jaringan platform kami.",
    icon: Network,
  },
  {
    title: "Inovasi Bersama",
    description: "Kolaborasi untuk menciptakan solusi teknologi yang relevan dengan kebutuhan pasar.",
    icon: Lightbulb,
  },
  {
    title: "Dampak Terukur",
    description: "Program kemitraan yang didesain untuk menghasilkan metrik keberhasilan yang jelas.",
    icon: TrendingUp,
  },
  {
    title: "Ekosistem Terintegrasi",
    description: "Dukungan penuh dari hulu ke hilir dalam setiap inisiatif kolaborasi digital.",
    icon: Cpu,
  },
];

export default function Collaboration() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <Reveal direction="right" delay={0.2}>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-navy/20 mix-blend-multiply z-10" />
              <Image
                src="/images/collaboration.png"
                alt="Kolaborasi Amania.id"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Right: Content */}
          <div>
            <SectionTitle
              title="Keuntungan Kolaborasi"
              subtitle="Kami membuka peluang kemitraan strategis untuk menciptakan nilai tambah yang lebih besar."
              centered={false}
            />

            <div className="mt-10 grid gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Reveal key={index} direction="left" delay={0.3 + index * 0.1}>
                    <div className="flex gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-orange group-hover:text-white text-orange transition-all duration-300">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-semibold text-navy mb-2 group-hover:text-orange transition-colors">
                          {benefit.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
