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

        <section className="pt-16 pb-8 flex flex-col items-center px-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4 text-[#333333] tracking-tight">
            O Problema que resolvemos
          </h2>

          <p className="text-base md:text-lg text-center max-w-lg mx-auto text-[#5C5C5C] leading-relaxed">
            Hoje no Brasil, milhões de jovens enfrentam desafios para se
            inserir no mercado de trabalho
          </p>
        </section>

        <section className="w-full max-w-7xl mx-auto px-1 py-4">
          <div className="grid grid-cols-10 gap-[16px] text-left">
            <div className="col-span-4 bg-[#FFE5A1] rounded-[27px] p-8 flex flex-col justify-center relative overflow-hidden h-[180px]">
              <h3 className="text-[#00963F] text-4xl md:text-5xl font-semi-bold leading-none mb-2 tracking-tight">
                +9<br />milhões
              </h3>
              <p className="text-[#4A4A4A] text-lg md:text-xl leading-tight font-medium">
                de jovens não se inserem no mercado de trabalho.
              </p>
            </div>

            <div className="col-span-2 bg-[#9BE5AA] rounded-[27px] flex items-center justify-center relative h-[180px]">
              <div className="absolute left-[43%] -translate-x-1/2 -top-6 z-10 w-[245px] h-[245px]">
                <Image
                  src="/Maskgroup.svg"
                  alt="Jovem estudante preocupado"
                  width={600}
                  height={600}
                  className="object-contain"
                />
              </div>
            </div>
  
            <div className="col-span-4 bg-[#C6C2F7] rounded-[27px] p-8 flex flex-col justify-center relative overflow-hidden h-[180px]">
              <h3 className="text-[#5A4CA0] text-5xl md:text-6xl font-semi-bold leading-tight mb-2 tracking-tight">
                92.9%
              </h3>
              <p className="text-[#4A4A4A] text-lg md:text-xl leading-tight font-medium">
                estão sem preparação e recursos educacionais
              </p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-7xl mx-auto px-1 py-0">
          <div className="grid grid-cols-10 gap-[16px] text-left">
            <div className="col-span-3 bg-[#FFE5A1] rounded-[27px] p-8 flex flex-col justify-center relative overflow-hidden h-[260px]">
              <h3 className="text-[#00963F] text-4xl md:text-5xl font-semi-bold leading-none mb-2 tracking-tight">
                75%<br />
              </h3>
              <p className="text-[#4A4A4A] text-lg md:text-xl leading-tight font-medium">
                identificam a desconexão entre o mercado e educação.
              </p>
            </div>

            <div className="col-span-4 bg-[#9BE5AA] rounded-[27px] flex items-center justify-center relative h-[260px]">
              <div className="absolute left-[43%] -translate-x-1/2 -top-6 z-10 w-[245px] h-[245px]">
              </div>
            </div>
  
            <div className="col-span-3 bg-[#C6C2F7] rounded-[27px] p-8 flex flex-col justify-center relative overflow-hidden h-[260px]">
              <h3 className="text-[#5A4CA0] text-5xl md:text-6xl font-semi-bold leading-tight mb-2 tracking-tight">
                80%
              </h3>
              <p className="text-[#4A4A4A] text-lg md:text-xl leading-tight font-medium">
                não tem garantia de formação que proporcione oportunidades de trabalho.
              </p>
            </div>
          </div>
        </section>

        <section>
          <span>seção de benoni</span>
        </section>
      </div>
    </main>
  );
}
