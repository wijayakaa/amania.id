import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amania.id - Learn. Create. Impact.",
  description: "Amania.id adalah platform untuk belajar, berkarya, dan memberi dampak melalui event management, kursus online, produk digital, dan publikasi artikel.",
  openGraph: {
    title: "Amania.id - Learn. Create. Impact.",
    description: "Belajar. Berkarya. Memberi Dampak. Bergabunglah dengan ekosistem teknologi modern kami.",
    url: "https://amania.id",
    siteName: "Amania.id",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amania.id - Learn. Create. Impact.",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amania.id - Learn. Create. Impact.",
    description: "Belajar. Berkarya. Memberi Dampak. Bergabunglah dengan ekosistem teknologi modern kami.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Amania.id",
              "url": "https://amania.id",
              "logo": "https://amania.id/logo/amania-logo.png",
              "description": "Platform edukasi dan teknologi untuk belajar, berkarya, dan memberi dampak.",
            }),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-slate-50 text-slate-900`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
