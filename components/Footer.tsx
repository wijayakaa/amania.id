import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

const FacebookIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const YoutubeIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-slate-300 pt-20 pb-10 border-t border-navy-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 relative w-56 h-16 bg-white/10 rounded-lg p-3">
              <Image
                src="/logo/amania-logo.png"
                alt="Amania.id Logo"
                fill
                className="object-contain p-2"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Platform edukasi dan teknologi untuk belajar, berkarya, dan memberi dampak nyata di ekosistem digital Indonesia.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-orange hover:text-white transition-all">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-orange hover:text-white transition-all">
                <LinkedinIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-orange hover:text-white transition-all">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center hover:bg-orange hover:text-white transition-all">
                <YoutubeIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#about" className="hover:text-orange transition-colors">Tentang Kami</Link></li>
              <li><Link href="#services" className="hover:text-orange transition-colors">Layanan</Link></li>
              <li><Link href="#roadmap" className="hover:text-orange transition-colors">Roadmap</Link></li>
              <li><Link href="#team" className="hover:text-orange transition-colors">Tim Kami</Link></li>
              <li><Link href="#" className="hover:text-orange transition-colors">Karir</Link></li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white font-semibold mb-6">Layanan</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-orange transition-colors">Event Management</Link></li>
              <li><Link href="#" className="hover:text-orange transition-colors">Kursus Online</Link></li>
              <li><Link href="#" className="hover:text-orange transition-colors">Produk Digital</Link></li>
              <li><Link href="#" className="hover:text-orange transition-colors">Kirim Artikel</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange shrink-0 mt-0.5" />
                <span>Gedung Inovasi Digital, Jl. Teknologi No. 123, Jakarta Selatan, 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange shrink-0" />
                <a href="mailto:hello@amania.id" className="hover:text-white transition-colors">hello@amania.id</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange shrink-0" />
                <a href="tel:+628112345678" className="hover:text-white transition-colors">+62 811 2345 678</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-navy-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Amania.id. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
