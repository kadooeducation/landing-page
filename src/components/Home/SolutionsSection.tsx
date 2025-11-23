import SolutionCard from "./SolutionCard";

export default function SolutionsSection() {
  // Dados dos cards para facilitar a manutenção
  const cardsData = [
    {
      imageSrc: "/card1.png", // Garanta que esta imagem existe na pasta public
      tag: "Transformação",
      title: "Transformamos Ideias",
      description: "Ajudamos jovens a transformar ideias em projetos viáveis, criando as bases para futuras startups e iniciativas de impacto."
    },
    {
      imageSrc: "/card2.png", // Garanta que esta imagem existe na pasta public
      tag: "Conexão",
      title: "Conectamos <br/>Escolas", // Usando <br/> para quebra de linha
      description: "Ligamos escolas a empresas, investidores, ONGs, institutos e OSCs para ampliar oportunidades, parcerias e experiências formativas."
    },
    {
      imageSrc: "/card3.png", // Garanta que esta imagem existe na pasta public
      tag: "Aprendizado",
      title: "Potencializamos o Aprendizado",
      description: "Impulsionamos o aprendizado com metodologias ativas que colocam jovens como protagonistas do próprio desenvolvimento."
    }
  ];

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Cabeçalho da Seção */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-block text-sm font-semibold bg-[#E5F2FF] text-[#0090FF] px-4 py-2 rounded-full mb-4">
              O que fazemos
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#333]">
              Como transformamos<br />essa situação?
            </h2>
          </div>

          <p className="text-xl text-[#5C5C5C] leading-relaxed md:max-w-md md:ml-auto">
            Impulsionamos a formação de líderes empreendedores, oferecendo jornadas
            para professores e estudantes com inovação e tecnologia!
          </p>
        </div>

        {/* Grid de Cards */}
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

      </div>
    </section>
  );
}