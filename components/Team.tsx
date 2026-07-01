"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const team = [
  {
    name: "Budi Santoso",
    role: "Chief Executive Officer",
    image: "/images/team/member-1.jpg",
    desc: "10+ tahun pengalaman di industri teknologi dan edukasi digital.",
  },
  {
    name: "Siti Aminah",
    role: "Chief Technology Officer",
    image: "/images/team/member-2.jpg",
    desc: "Expert dalam arsitektur sistem skala besar dan cloud computing.",
  },
  {
    name: "Rudi Hermawan",
    role: "Head of Product",
    image: "/images/team/member-3.jpg",
    desc: "Fokus pada pengembangan produk yang berpusat pada pengguna (User-Centric).",
  },
  {
    name: "Dian Pratama",
    role: "Head of Marketing",
    image: "/images/team/member-4.jpg",
    desc: "Spesialis dalam digital marketing dan growth hacking.",
  },
];

const values = ["Integritas", "Inovasi", "Kolaborasi", "Dampak"];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left: Values Sidebar */}
          <div className="lg:col-span-1">
            <Reveal direction="right" delay={0.2}>
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
                  Tim Kami &<br />Nilai Perusahaan
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Di balik Amania.id terdapat tim profesional yang berdedikasi tinggi dan dipandu oleh nilai-nilai luhur.
                </p>
                
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-orange">
                        <CheckCircle size={24} />
                      </div>
                      <span className="text-lg font-semibold text-navy">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Team Grid */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <Reveal key={index} direction="up" delay={0.3 + index * 0.1}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                    <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Social overlay */}
                      <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white text-navy flex items-center justify-center hover:bg-orange hover:text-white transition-colors">
                          <LinkedinIcon size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white text-navy flex items-center justify-center hover:bg-orange hover:text-white transition-colors">
                          <TwitterIcon size={20} />
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-heading font-bold text-navy mb-1 group-hover:text-orange transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-orange font-medium text-sm mb-4">{member.role}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{member.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
