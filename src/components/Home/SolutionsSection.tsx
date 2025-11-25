import SolutionCard from "./SolutionCard";

 const cardsData = [
    {
      imageSrc: "/card1.png", 
      tag: "Transformação",
      title: "Transformamos Ideias",
      description: "Ajudamos jovens a transformar ideias em projetos viáveis, criando as bases para futuras startups e iniciativas de impacto."
    },
    {
      imageSrc: "/card2.png", 
      tag: "Conexão",
      title: "Conectamos <br/>Escolas",
      description: "Ligamos escolas a empresas, investidores, ONGs, institutos e OSCs para ampliar oportunidades, parcerias e experiências formativas."
    },
    {
      imageSrc: "/card3.png",
      tag: "Aprendizado",
      title: "Potencializamos o Aprendizado",
      description: "Impulsionamos o aprendizado com metodologias ativas que colocam jovens como protagonistas do próprio desenvolvimento."
    }
  ];

export function SolutionsSection() {
  return (
    <section className="w-full pt-16 px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block text-sm font-semibold bg-[#E5F2FF] text-[#0090FF] px-4 py-2 rounded-full mb-4">
              O que fazemos
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#333] mb-7">
              Como transformamos<br />essa situação?
            </h2>
          </div>

          <p className="text-xl text-[#5C5C5C] mb-10 leading-relaxed md:max-w-md md:ml-auto">
            Impulsionamos a formação de líderes empreendedores, oferecendo jornadas
            para professores e estudantes com inovação e tecnologia!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <SolutionCard 
              key={index}
              imageSrc={card.imageSrc}
              tag={card.tag}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

    </section>
  );
}