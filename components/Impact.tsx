"use client";

import Image from "next/image";
import { GraduationCap, Lightbulb, Users2, Target } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import StatsCounter from "./StatsCounter";

const impacts = [
  { icon: GraduationCap, title: "Pendidikan", desc: "Akses pembelajaran berkualitas." },
  { icon: Lightbulb, title: "Inovasi", desc: "Mendorong solusi kreatif." },
  { icon: Users2, title: "Komunitas", desc: "Jejaring profesional luas." },
  { icon: Target, title: "Dampak", desc: "Perubahan nyata di masyarakat." },
];

const stats = [
  { value: 100000, suffix: "+", label: "Pengguna Aktif" },
  { value: 1000, suffix: "+", label: "Event Terselenggara" },
  { value: 500, suffix: "+", label: "Kreator Konten" },
  { value: 1000, suffix: "+", label: "Modul Belajar" },
  { value: 2000, suffix: "+", label: "Produk Digital" },
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Dampak Nyata"
          subtitle="Bersama-sama, kita telah menciptakan perubahan positif yang terukur melalui ekosistem Amania.id."
          light
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-16 items-center">
          {/* Left: Mockup */}
          <Reveal direction="right" delay={0.2}>
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange/20 to-green/20 rounded-full blur-3xl" />
              <Image
                src="/images/devices-mockup.png"
                alt="Amania.id on Devices"
                fill
                className="object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
          </Reveal>

          {/* Right: Impact Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {impacts.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={index} direction="left" delay={0.3 + index * 0.1}>
                  <div className="bg-navy-800/50 backdrop-blur-sm border border-navy-700 p-6 rounded-2xl hover:bg-navy-700/50 transition-colors duration-300">
                    <div className="w-12 h-12 bg-navy-900 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={24} className="text-orange" />
                    </div>
                    <h4 className="text-xl font-heading font-semibold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-24 pt-12 border-t border-navy-700">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <Reveal key={index} direction="up" delay={0.5 + index * 0.1} className="text-center">
                <div className="text-4xl md:text-5xl font-heading font-bold text-orange mb-2">
                  <StatsCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
