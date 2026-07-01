"use client";

import { BookOpen, Rocket, Heart } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const cards = [
  {
    icon: BookOpen,
    title: "Belajar",
    description: "Tingkatkan keterampilan Anda dengan kurikulum yang relevan dengan kebutuhan industri saat ini.",
    color: "from-blue-500 to-navy",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Rocket,
    title: "Berkarya",
    description: "Wujudkan ide cemerlang menjadi produk nyata dengan bimbingan dari para ahli.",
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Heart,
    title: "Memberi Dampak",
    description: "Ciptakan solusi inovatif yang memberikan manfaat positif bagi masyarakat luas.",
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Tentang Amania.id"
          subtitle="Kami adalah wadah bagi inovator, kreator, dan pembelajar seumur hidup yang percaya pada kekuatan teknologi untuk mengubah dunia."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={index} direction="up" delay={0.2 + index * 0.1}>
                <div className="group h-full bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                  {/* Hover Gradient Overlay */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                  
                  <div className={`w-16 h-16 rounded-2xl ${card.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                    <Icon size={32} className={card.iconColor} />
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-navy mb-4">
                    {card.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
