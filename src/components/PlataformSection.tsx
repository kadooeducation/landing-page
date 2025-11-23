"use client"; // Obrigatório para componentes interativos

import { useState } from "react";
import Image from "next/image";

// Dados do conteúdo
const items = [
  {
    id: 1,
    title: "Jornadas personalizadas",
    content: "Trilhas de aprendizado adaptadas ao perfil de cada estudante."
  },
  {
    id: 2,
    title: "Mentorias especializadas",
    content: "Conexão direta com mentores experientes que acompanham o desenvolvimento dos projetos."
  },
  {
    id: 3,
    title: "Métricas de sucesso",
    content: "Acompanhamento detalhado do progresso com indicadores claros."
  },
  {
    id: 4,
    title: "Comunidade colaborativa",
    content: "Um ambiente para troca de experiências e networking."
  }
];

export default function PlataformSection() {
  const [openItem, setOpenItem] = useState<number | null>(2); // Começa com o 2 aberto

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 mb-20 mt-10">
      <div className="bg-[#4FA9F5] rounded-[40px] p-8 lg:p-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        <div className="flex flex-col gap-4">
          {items.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className="bg-white rounded-2xl p-6 cursor-pointer transition-all duration-200 hover:shadow-md"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl md:text-2xl font-medium text-[#333]">
                    <span className="text-[#4FA9F5] font-bold mr-2">0{item.id}.</span>
                    {item.title}
                  </h3>
                  <div className="text-[#333]">
                    {isOpen ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    )}
                  </div>
                </div>
                
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-lg text-[#5C5C5C] leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-[#C8E8FF] rounded-[30px] min-h-[400px] h-full relative flex items-center justify-center overflow-hidden">
             <Image
                  src="/plataforma.svg"
                  alt="Imagem ilustrativa do acordeão"
                  width={400}
                  height={400}
                  className="w-full h-auto object-contain"
                />
        </div>

      </div>
    </section>
  );
}