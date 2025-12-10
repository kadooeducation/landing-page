import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="pt-16 flex flex-col items-center w-full">
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4 text-[#333333] tracking-tight">
        O Problema que resolvemos
      </h2>
      <p className="text-base md:text-lg text-center max-w-lg mx-auto text-[#5C5C5C] leading-relaxed">
        Hoje no Brasil, milhões de jovens enfrentam desafios para se inserir
        no mercado de trabalho
      </p>

      <div className="grid grid-cols-1 xl:grid-cols-3 w-full gap-2 mt-12 ">

        <div className=" rounded-[27px] w-full xl:w-[500px] h-[185px] p-8 flex flex-col justify-center relative overflow-hidden" style={{ backgroundImage: "url('/card_problem1.png')", backgroundSize: "cover" }}>
          <h3 className="text-[#00963F] text-5xl md:text-6xl font-semibold leading-none mb-2 tracking-tight">
            +9<br />
            milhões
          </h3>

          <p className="text-[#4A4A4A] text-lg md:text-xl font-medium leading-tight">
            de jovens não se inserem no mercado de trabalho.
          </p>
        </div>

        <div className="rounded-[27px] w-[270px] h-[185px] overflow-hidden hidden xl:block mx-20 " style={{
          backgroundImage: "url('/Frame.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        </div>

        <div className="rounded-[27px] w-full xl:w-[490px] h-[185px] p-8 flex flex-col justify-center relative overflow-hidden xl:justify-self-end" style={{
          backgroundImage: "url('/card_problem3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div className="relative z-10">
            <h3 className="text-[#5A4CA0] text-5xl md:text-6xl font-semibold leading-tight mb-2 tracking-tight">
              92.9%
            </h3>
            <p className="text-[#4A4A4A] text-lg md:text-xl leading-tight font-medium">
              estão sem preparação e recursos educacionais
            </p>
          </div>
        </div>
        <div className="rounded-[27px] w-full h-[265px] p-8 flex flex-col justify-center relative  overflow-hidden" style={{
          backgroundImage: "url('/Card_problem4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div className="relative z-10 mt-15">
            <h3 className="text-[#5A4CA0] text-5xl md:text-6xl font-semibold leading-none mb-2 tracking-tight">
              75%
            </h3>

            <p className="text-[#4A4A4A] text-lg md:text-xl leading-tight font-medium">
              identificam a desconexão entre o mercado e educação.
            </p>
          </div>
        </div>

        <div className="rounded-[27px] w-[420px] h-[265px] overflow-hidden relative hidden xl:block" style={{
          backgroundImage: "url('/Frame2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
        </div>

        <div className="rounded-[27px] w-full h-[265px] p-8 flex flex-col justify-center relative overflow-hidden" style={{
          backgroundImage: "url('/Card_problem5.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}>
          <div className="relative z-10 mt-15">
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
  );
}
