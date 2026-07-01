"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const services = [
  {
    title: "Event Management",
    description: "Pengelolaan acara digital dan hybrid yang profesional untuk berbagai kebutuhan korporat dan komunitas.",
    image: "/images/services/event.png",
  },
  {
    title: "Kursus Online",
    description: "Platform e-learning interaktif dengan materi terstruktur dari para ahli di bidangnya.",
    image: "/images/services/course.png",
  },
  {
    title: "Produk Digital",
    description: "Pengembangan dan penyediaan produk digital yang solutif untuk membantu transformasi bisnis Anda.",
    image: "/images/services/digital-product.png",
  },
  {
    title: "Kirim Artikel",
    description: "Wadah bagi para kreator untuk berbagi wawasan dan mempublikasikan karya tulis berkualitas.",
    image: "/images/services/article.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Layanan Kami"
          subtitle="Pilar strategis Amania.id dalam membangun ekosistem digital yang komprehensif."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <Reveal key={index} direction={index % 2 === 0 ? "right" : "left"} delay={0.2}>
              <div className="group rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row h-full">
                <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden bg-slate-100 shrink-0">
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center grow">
                  <h3 className="text-2xl font-heading font-bold text-navy mb-3 group-hover:text-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <button className="flex items-center gap-2 text-orange font-semibold hover:text-navy transition-colors group/btn">
                      Pelajari Lebih Lanjut
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
