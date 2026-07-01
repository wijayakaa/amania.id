"use client";

import { CheckCircle2, Clock, Users, Laptop, Shield, Award } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const features = [
  {
    title: "Konten Berkualitas",
    description: "Materi disusun oleh praktisi industri yang berpengalaman.",
    icon: CheckCircle2,
  },
  {
    title: "Fleksibel",
    description: "Belajar kapan saja dan di mana saja sesuai dengan ritme Anda.",
    icon: Clock,
  },
  {
    title: "Komunitas Positif",
    description: "Bergabung dengan ribuan pembelajar dan kreator lainnya.",
    icon: Users,
  },
  {
    title: "Teknologi Modern",
    description: "Menggunakan platform dan kurikulum berbasis teknologi terkini.",
    icon: Laptop,
  },
  {
    title: "Aman",
    description: "Data dan privasi Anda terjamin keamanannya dengan sistem kami.",
    icon: Shield,
  },
  {
    title: "Dampak Nyata",
    description: "Fokus pada hasil dan portofolio yang dapat diaplikasikan langsung.",
    icon: Award,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-navy/5 to-transparent rounded-tr-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Mengapa Memilih Kami"
          subtitle="Amania.id memberikan pengalaman belajar dan berkarya yang berbeda dengan fokus pada kualitas dan dampak nyata."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={index} direction="up" delay={0.1 + index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex gap-4 items-start group border border-slate-100">
                  <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-orange transition-colors duration-300">
                    <Icon size={24} className="text-navy group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-navy mb-2 group-hover:text-orange transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
