"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 bg-navy z-0" />
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 z-0" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-orange/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[150%] bg-green/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <Reveal direction="up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Siap Memulai Perjalanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-green">Digital Anda?</span>
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan inovator lainnya dan mulailah menciptakan dampak nyata bersama Amania.id hari ini.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-orange text-white font-semibold text-lg hover:bg-orange/90 transition-all shadow-lg hover:shadow-orange/25 hover:-translate-y-1 flex items-center justify-center gap-2 group">
              Mulai Sekarang
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 text-white border border-white/20 font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center backdrop-blur-sm">
              Jadwalkan Diskusi
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
