"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      <FloatingShapes />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-navy-50/50 -z-10" />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="pt-10 lg:pt-0 text-center lg:text-left">
            <Reveal direction="up" delay={0.1}>
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 backdrop-blur-sm">
                <span className="text-orange font-semibold tracking-wide text-sm uppercase">
                  Platform Inovasi Digital
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-navy leading-tight mb-6">
                Belajar.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-green">
                  Berkarya.
                </span><br />
                Memberi Dampak.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Amania.id hadir sebagai ekosistem teknologi yang mendukung talenta digital Indonesia untuk terus berkembang dan menciptakan solusi bermakna.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="#services"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-navy text-white font-medium text-lg hover:bg-navy-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  <BookOpen size={20} />
                  Mulai Belajar
                </Link>
                <Link
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-navy border-2 border-navy/10 font-medium text-lg hover:bg-slate-50 hover:border-navy/30 transition-all flex items-center justify-center gap-2 group"
                >
                  Hubungi Kami
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Image */}
          <div className="relative mt-10 lg:mt-0 flex justify-center">
            <Reveal direction="left" delay={0.4} className="relative w-full max-w-lg aspect-square">
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                {/* Fallback glow if image is missing */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange/20 to-navy/20 rounded-full blur-3xl" />
                
                <Image
                  src="/images/hero-illustration.png"
                  alt="Amania.id Hero Illustration"
                  fill
                  className="object-contain relative z-10 drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
