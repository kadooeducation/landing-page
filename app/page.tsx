import Image from "next/image";

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

      <section> aqui vai o banner </section>

      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <section className="pt-16 pb-8 flex flex-col items-center px-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4 text-[#333333] tracking-tight">
            O Problema que resolvemos
          </h2>
          <p className="text-base md:text-lg text-center max-w-lg mx-auto text-[#5C5C5C] leading-relaxed">
            Hoje no Brasil, milhões de jovens enfrentam desafios para se inserir no mercado de trabalho
          </p>
        </section>

        <section className="w-full flex justify-center gap-[16px] mb-2">

          <div className="bg-[#FFE5A1] rounded-[27px] p-8 flex flex-col justify-center relative overflow-hidden w-[417px] h-[185px]">
            <div className="absolute top-0 left-[-2%] top-[10%] w-[430px] h-[120px] z-0 pointer-events-none">
              <Image
                src="/Vector1.svg"
                alt="Elemento decorativo"
                width={430}
                height={120}
                className="object-none"
                style={{ left: '-20px' }}
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-[#00963F] text-4xl md:text-5xl font-semibold leading-none mb-2 tracking-tight">
                +9<br />milhões
              </h3>
              <p className="text-[#4A4A4A] text-lg md:text-xl leading-tight font-medium">
                de jovens não se inserem no mercado de trabalho.
              </p>
            </div>
          </div>


          <div className="bg-[#9BE5AA] rounded-[27px] flex items-center justify-center relative w-[270px] h-[185px]">


            <div className="absolute top-[1%] left-[-16%] w-[350px] h-[179px] z-0 pointer-events-none">
              <Image
                src="/Vector2.svg"
                alt="Elemento decorativo"
                width={430}
                height={120}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute left-[45%] -translate-x-1/2 -top-13.5 z-10 w-[260px] h-[260px]">
              <Image
                src="/Maskgroup.svg"
                alt="Jovem estudante preocupado"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="bg-[#C6C2F7] rounded-[27px] p-8 flex flex-col justify-center relative overflow-hidden w-[466px] h-[185px]">
            <div className="absolute top-[0%] left-[-4%] w-[490px] h-[190px] z-0 pointer-events-none">
              <Image
                src="/Vector3.svg"
                alt="Elemento decorativo"
                width={425}
                height={115}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-[#5A4CA0] text-5xl md:text-6xl font-semibold leading-tight mb-2 tracking-tight">
                92.9%
              </h3>
              <p className="text-[#4A4A4A] text-lg md:text-xl leading-tight font-medium">
                estão sem preparação e recursos educacionais
              </p>
            </div>
          </div>


        </section>

        <section className="w-full flex justify-center gap-[16px] mt-2">

          <div className="bg-[#9BE5AA] rounded-[27px] p-8 flex flex-col justify-center relative overflow-hidden w-[339px] h-[265px]">

            <div className="absolute top-[2%] -right-[15%] w-[460px] h-[267px] z-0 pointer-events-none opacity-60">
              <Image
                src="/Vector4.svg"
                alt="Elemento decorativo"
                width={400}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-[#5A4CA0] text-4xl md:text-5xl font-semibold leading-none mb-2 tracking-tight">
                75%
              </h3>
              <p className="text-[#4A4A4A] text-lg md:text-xl leading-tight font-medium">
                identificam a desconexão entre o mercado e educação.
              </p>
            </div>

          </div>

          <div className="bg-[#98CFFA] rounded-[27px] flex items-center justify-center relative overflow-hidden w-[441px] h-[265px]">
          </div>

          <div className="bg-[#FFE5A1] rounded-[27px] p-8 flex flex-col justify-center relative overflow-hidden w-[373px] h-[265px]">

            <div className="absolute bottom-[20%] -right-[15%] w-[460px]  h-[230px] z-0 pointer-events-none opacity-80">
              <Image
                src="/Vector5.svg" 
                alt="Elemento decorativo"
                width={450}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-[#5A4CA0] text-5xl md:text-6xl font-semibold leading-tight mb-2 tracking-tight">
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
