import Image from "next/image";
import PlataformSection from "@/src/components/PlataformSection"; 
import ProblemSection from "@/src/components/ProblemSection";
import PartnersSection from "@/src/components/PartnersSection";
import BannerSection from "@/src/components/BannerSection";

export default function HomePage() {
  
  const parceiros = [
    { src: "logosecti.png", alt: "Governo do Maranhão" },
    { src: "/logos/fapema.png", alt: "Fapema" },
    { src: "/logos/iema.png", alt: "IEMA" },
    { src: "/logos/defensoria.png", alt: "Defensoria Pública" },
  ];

  const apoiadores = [
    { src: "/logos/oxygen.png", alt: "Oxygen Hub" },
    { src: "/logos/pisim.png", alt: "PISIM" },
    { src: "/logos/up.png", alt: "UP Produções" },
    { src: "/logos/impactos.png", alt: "Impactos Positivos" },
    { src: "/logos/cadimpacto.png", alt: "Cadimpacto" },
  ];

  return (
    <main className="min-h-screen text-2">

      <header className="flex items-center justify-between px-32 py-6">
        <Image
          src="/logo.png"
          alt="Logo da Kadoo Edu"
          width={117}
          height={51}
        />
        <nav className="flex gap-8">
          <span>Home</span>
          <span>Editais</span>
          <span>Projetos</span>
          <span>Contatos</span>
        </nav>
      </header>

      <BannerSection />

      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <section className="pt-16 pb-8 flex flex-col items-center px-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4 text-[#333333] tracking-tight">
            O Problema que resolvemos
          </h2>
          <p className="text-base md:text-lg text-center max-w-lg mx-auto text-[#5C5C5C] leading-relaxed">
            Hoje no Brasil, milhões de jovens enfrentam desafios para se inserir no mercado de trabalho
          </p>
        </section>

        <ProblemSection />

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
            Uma plataforma web cheia de funcionalidades onde toda a jornada de pré-aceleração acontece!
          </p>
        </section>

        <PlataformSection />
        
        <PartnersSection 
          title="Parceiros estratégicos" 
          items={parceiros} 
        />

        <PartnersSection 
          title="Apoiadores e programas" 
          items={apoiadores} 
        />

      </div>
    </main>
  );
}