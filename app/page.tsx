import Image from "next/image";

export default function HomePage() {
  return (
    <main className="h-screen text-2">
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
      
      {/*
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
                  href=""
                  className="bg-[#540075] px-6 py-3 rounded-md font-semibold text-white bg-[#761077] border-[3px] border-[#A22479] shadow-[0_0_0_4px_#F1477D]"
                >
                  Editais Abertos
                </a>

                <a
                  href=""
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
      */}



        <section className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('/Banner.png')" }}>
          <div className="container mx-auto px-4 py-16">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
                Formação empreendedora <br />
                para jovens e escolas <br />
                com <b className="text-[#540075]">↝</b> impacto real
              </h1>

              <p className="text-lg">
                Universos colaborativos para uma educação empreendedora!
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="bg-[#761077] border-[3px] border-[#A22479] shadow-[0_0_0_4px_#F1477D] px-6 py-3 rounded-md font-semibold"
                >
                  Editais Abertos
                </a>

                <a
                  href="#"
                  className="bg-transparent border border-white px-6 py-3 rounded-md font-semibold"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>





        </section>


      <div className="max-w-7xl mx-auto flex flex-col">
        <section className="bg-red-500">
          <span>seção de beto</span>
        </section>

        <section>
          <span>seção de benoni</span>
        </section>
      </div>
    </main>
  );
}
