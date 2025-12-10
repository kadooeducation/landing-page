import PlataformSection from "@/src/components/Home/PlataformSection";
import PartnersSection from "@/src/components/Home/PartnersSection";
import BannerSection from "@/src/components/Home/BannerSection";
import { SolutionsSection } from "@/src/components/Home/SolutionsSection";
import Footer from "@/src/components/Home/Footer";

import { Header } from "@/presentation/shared/layout/components/header";
import Image from "next/image";
import ProblemSection from "@/src/components/Home/ProblemSection";

const parceiros = [
  { src: "fapema.png", alt: "Fapema" },
  { src: "iema.png", alt: "IEMA" },
  { src: "defp.svg", alt: "Defensoria Pública" },
  { src: "logosecti.png", alt: "Governo do Maranhão" },
  { src: "fapema.png", alt: "Fapema" },
  { src: "iema.png", alt: "IEMA" },
  { src: "defp.svg", alt: "Defensoria Pública" },
];

const supporters = [
  {
    src: "/supporters/candipacto.png",
    alt: "Logo Candipacto",
  },
  {
    src: "/supporters/oxygeni-hub.png",
    alt: "Logo Oxygeni HUB",
  },
  {
    src: "/supporters/up.png",
    alt: "Logo Up",
  },
  {
    src: "/supporters/candipacto.png",
    alt: "Logo Candipacto",
  },
  {
    src: "/supporters/oxygeni-hub.png",
    alt: "Logo Oxygeni HUB",
  },
  {
    src: "/supporters/up.png",
    alt: "Logo Up",
  },
  {
    src: "/supporters/candipacto.png",
    alt: "Logo Candipacto",
  },
  {
    src: "/supporters/oxygeni-hub.png",
    alt: "Logo Oxygeni HUB",
  },
  {
    src: "/supporters/up.png",
    alt: "Logo Up",
  },
  {
    src: "/supporters/candipacto.png",
    alt: "Logo Candipacto",
  },
  {
    src: "/supporters/oxygeni-hub.png",
    alt: "Logo Oxygeni HUB",
  },
  {
    src: "/supporters/up.png",
    alt: "Logo Up",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen text-2 bg-[#FDF4EB]">
      <Header />

      <BannerSection />

      <div className="max-w-7xl mx-auto flex flex-col items-center px-8 md:px-5 lg:px-0">
        <ProblemSection />

        <SolutionsSection />

        <section className="w-full flex justify-center mt-16 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E5D6EB] text-[#540075] rounded-md font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
            <span>Kadoo Academy</span>
          </div>
        </section>

        <section className=" pb-8 flex flex-col items-center px-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4 text-[#333333] tracking-tight">
            Plataforma com tudo que você precisa
          </h2>
          <p className="text-base md:text-lg text-center max-w-lg mx-auto text-[#5C5C5C] leading-relaxed">
            Uma plataforma web cheia de funcionalidades onde toda a jornada de
            pré-aceleração acontece!
          </p>
        </section>

        <PlataformSection />
      </div>
      <PartnersSection title="Parceiros estratégicos" items={parceiros} />

      <PartnersSection title="Apoiadores" items={supporters} />

      <Footer />
    </main>
  );
}
