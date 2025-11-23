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


      <section>
        aqui vai o banner
      </section>

      <div className="max-w-7xl mx-auto flex flex-col">
        <section className="bg-red-500">
          <span>seção de beto</span>
        </section>
        
        <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-7 items-center px-3">
          <div>
            <span className="text-2xl  bg-[#E5F2FF] text-[#0090FF] px-4 py-2 rounded-md">
              O que fazemos
            </span>

            <h2 className="mt-4 mb-6 text-5xl font-semibold leading-tight">
              Como transformamos<br />essa situação?
            </h2>
          </div>

          <p className="mb-6 text-2xl text-gray-700 max-w-md md:ml-auto mt-6">
            Impulsionamos a formação de líderes empreendedores, oferecendo jornadas
            para professores e estudantes com inovação e tecnologia!
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

          <div className="relative rounded-xl overflow-hidden shadow-md">

            <img
              src="card1.png"
              className="w-full h-130 object-cover"
              alt=""
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute bottom-0 p-6 text-white">
              <span className="text-sm font-semibold">Transformação</span>
              <h3 className="text-4xl font-semibold mt-2">Transformamos Ideias</h3>

              <p className="text-sm leading-relaxed mt-2 max-w-xs">
                Ajudamos jovens a transformar ideias em projetos viáveis, criando as
                bases para futuras startups e iniciativas de impacto.
              </p>

              <button className="mt-4 border border-white text-white rounded-md px-4 py-2 text-sm">
                saiba mais
              </button>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-md ">
            
            <img
              src="card2.png"
              className="w-full h-130 object-cover"
              alt=""
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute bottom-0 p-6 text-white">
              <span className="text-sm font-semibold">Conexão</span>
              <h3 className="text-4xl font-semibold mt-2">Conectamos <br/>Escolas</h3>

              <p className="text-sm leading-relaxed mt-2 max-w-xs">
                Ligamos escolas a empresas, investidores, ONGs, institutos e OSCs
                para ampliar oportunidades, parcerias e experiências formativas.
              </p>

              <button className="mt-4 border border-white text-white rounded-md px-4 py-2 text-sm">
                saiba mais
              </button>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-md">
            
            <img
              src="card3.png"
              className="w-full h-130 object-cover"
              alt=""
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute bottom-0 p-6 text-white">
              <span className="text-sm font-semibold">Aprendizado</span>
              <h3 className="text-4xl font-semibold mt-2">
                Potencializamos o Aprendizado
              </h3>

              <p className="text-sm leading-relaxed mt-2 max-w-xs">
                Impulsionamos o aprendizado com metodologias ativas que colocam jovens
                como protagonistas do próprio desenvolvimento.
              </p>

              <button className="mt-4 border border-white text-white rounded-md px-4 py-2 text-sm">
                saiba mais
              </button>
            </div>
          </div>

        </section>
      </div>
    </main>
  );
}
