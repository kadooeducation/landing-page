import Image from "next/image";
import PlataformSection from "@/src/components/PlataformSection";
import ProblemSection from "@/src/components/ProblemSection";

export default function HomePage() {
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

      <section className="relative overflow-hidden bg-gradient-to-r from-[#F1467D] to-[#FEB1CA] text-white">
        <div className="container mx-auto px-4 pt-20 pb-16 lg:pb-0 relative">
          <article className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            <div className="space-y-6 max-w-lg">
              <h1 className="text-4xl lg:text-5xl leading-tight">
                Formação empreendedora <br />
                para jovens e escolas <br />
                com <b className="text-[#540075]">↝</b> impacto real
              </h1>

              <p className="text-lg opacity-90">
                Universos colaborativos para uma educação empreendedora!
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="bg-[#540075] px-6 py-3 rounded-md font-semibold text-white bg-[#761077] border-[3px] border-[#A22479] shadow-[0_0_0_4px_#F1477D]"
                >
                  Editais Abertos
                </a>

                <a
                  href="#"
                  className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold"
                >
                  Saiba mais
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block h-[380px] w-full">
              <Image
                src="/people.png"
                alt="Imagem de pessoas"
                fill
                className="object-cover object-center"
                quality={100}
                priority
              />
            </div>
          </article>
        </div>
      </section>

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
            {/* Ícone de Lâmpada SVG */}
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

      </div>
    </main>
  );
}