"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

interface TimelineItem {
  year: string;
  title: string;
}

const items: TimelineItem[] = [
  { year: "2024-2025", title: "Fondasi" },
  { year: "2025-2026", title: "Pertumbuhan" },
  { year: "2026-2027", title: "Diversifikasi" },
  { year: "2027-2028", title: "Inovasi" },
  { year: "2028-2030", title: "Sustainability" },
];

export default function Timeline() {
  return (
    <div className="relative py-12">
      {/* Horizontal Line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -translate-y-1/2 hidden md:block" />
      
      {/* Animated Line */}
      <Reveal direction="left" delay={0.2} duration={1.5} className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange to-green -translate-y-1/2 origin-left hidden md:block" />

      {/* Vertical Line Mobile */}
      <div className="absolute top-0 bottom-0 left-[23px] w-1 bg-slate-200 md:hidden" />
      <Reveal direction="down" delay={0.2} duration={1.5} className="absolute top-0 bottom-0 left-[23px] w-1 bg-gradient-to-b from-orange to-green origin-top md:hidden" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
        {items.map((item, index) => (
          <Reveal
            key={item.year}
            direction="up"
            delay={0.3 + index * 0.1}
            className="flex md:flex-col items-center md:items-center gap-6 md:gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-white border-4 border-slate-200 group-hover:border-orange flex items-center justify-center shadow-sm transition-colors duration-300 relative z-10 shrink-0">
              <div className="w-4 h-4 rounded-full bg-navy group-hover:bg-orange transition-colors duration-300" />
            </div>
            
            <div className="md:text-center mt-2 md:mt-4">
              <div className="text-orange font-bold text-lg mb-1">{item.year}</div>
              <h3 className="text-xl font-heading font-semibold text-navy group-hover:text-orange transition-colors">
                {item.title}
              </h3>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
