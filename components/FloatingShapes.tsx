"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Top Left Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange/20 blur-3xl animate-blob" />
      
      {/* Bottom Right Blob */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-navy-300/20 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
      
      {/* Center Blob */}
      <div className="absolute top-[30%] left-[30%] w-[30%] h-[30%] rounded-full bg-green/10 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      
      {/* Floating Circles */}
      <motion.div
        className="absolute top-[20%] right-[20%] w-16 h-16 rounded-full border-4 border-orange/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-[30%] left-[15%] w-24 h-24 rounded-full border-2 border-navy/10"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10" />
    </div>
  );
}
