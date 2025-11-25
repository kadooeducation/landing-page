import PlataformSection from "@/src/components/Home/PlataformSection";
import PartnersSection from "@/src/components/Home/PartnersSection";
import BannerSection from "@/src/components/Home/BannerSection";
import { SolutionsSection } from "@/src/components/Home/SolutionsSection";
import Footer from "@/src/components/Home/Footer";

import { Header } from "@/presentation/shared/layout/components/header";
import Image from "next/image";

const parceiros = [
  { src: "logosecti.png", alt: "Governo do Maranhão" },
  { src: "fapema.png", alt: "Fapema" },
  { src: "iema.png", alt: "IEMA" },
  { src: "defp.svg", alt: "Defensoria Pública" },
  { src: "logosecti.png", alt: "Governo do Maranhão" },
  { src: "fapema.png", alt: "Fapema" },
  { src: "iema.png", alt: "IEMA" },
  { src: "defp.svg", alt: "Defensoria Pública" },
];

const apoiadores = [
  { src: "hub.png", alt: "Oxygen Hub" },
  { src: "up.png", alt: "UP Produções" },
  { src: "/logos/up.png", alt: "UP" },
  { src: "/logos/impactos.png", alt: "Impactos Positivos" },
  { src: "/logos/cadimpacto.png", alt: "Cadimpacto" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen text-2 bg-[#FDF4EB]">
      <Header />

      <BannerSection />

      <div className="max-w-7xl mx-auto flex flex-col items-center px-8 md:px-5 lg:px-0">
        <section className="pt-16 flex flex-col items-center w-full">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4 text-[#333333] tracking-tight">
            O Problema que resolvemos
          </h2>
          <p className="text-base md:text-lg text-center max-w-lg mx-auto text-[#5C5C5C] leading-relaxed">
            Hoje no Brasil, milhões de jovens enfrentam desafios para se inserir
            no mercado de trabalho
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-4 mt-12">
            <div className="bg-[#FFE5A1] rounded-[27px] p-8 flex flex-col justify-center relative overflow-hidden h-[185px]">
              <div className="absolute top-[10%] right-0 w-full  h-[120px] z-0 pointer-events-none">
                <Image
                  src="/Vector1.svg"
                  alt="Elemento decorativo"
                  fill
                  className="hidden lg:block"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-[#00963F] text-4xl md:text-5xl font-semibold leading-none mb-2 tracking-tight">
                  +9
                  <br />
                  milhões
                </h3>
                <p className="text-[#4A4A4A] text-lg md:text-xl leading-tight font-medium">
                  de jovens não se inserem no mercado de trabalho.
                </p>
              </div>
            </div>

            <div className="bg-[#C6C2F7] rounded-[27px] p-8 flex flex-col justify-center relative overflow-hidden h-[185px]">
              <div className="relative z-10">
                <h3 className="text-[#5A4CA0] text-5xl md:text-6xl font-semibold leading-tight mb-2 tracking-tight">
                  92.9%
                </h3>
                <p className="text-[#4A4A4A] text-lg md:text-xl leading-tight font-medium">
                  estão sem preparação e recursos educacionais
                </p>
              </div>
            </div>

            <div className="bg-[#9BE5AA] rounded-[27px] p-8 flex flex-col justify-center relative overflow-hidden h-[185px]">
              <div className="relative z-10">
                <h3 className="text-[#5A4CA0] text-4xl md:text-5xl font-semibold leading-none mb-2 tracking-tight">
                  75%
                </h3>
                <p className="text-[#4A4A4A] text-lg md:text-xl leading-tight font-medium">
                  identificam a desconexão entre o mercado e educação.
                </p>
              </div>
            </div>

            <div className="bg-[#FFE5A1] rounded-[27px] p-8 flex flex-col justify-center relative overflow-hidden h-[185px]">
              <div className="relative z-10">
                <h3 className="text-[#5A4CA0] text-5xl md:text-6xl font-semibold leading-tight mb-2 tracking-tight">
                  80%
                </h3>
                <p className="text-[#4A4A4A] text-lg md:text-xl leading-tight font-medium">
                  não tem garantia de formação que proporcione oportunidades de
                  trabalho.
                </p>
              </div>
            </div>
          </div>
        </section>

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

        <PartnersSection title="Parceiros estratégicos" items={parceiros} />

        <PartnersSection title="Apoiadores e programas" items={apoiadores} />
      </div>

      <Footer />
    </main>
  );
}
