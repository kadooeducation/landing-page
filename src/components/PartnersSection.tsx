import Image from "next/image";

interface PartnerItem {
  src: string;
  alt: string;
  width?: number; 
  height?: number;
}


interface PartnersSectionProps {
  title: string;
  items: PartnerItem[];
}

export default function PartnersSection({ title, items }: PartnersSectionProps) {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 mb-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#333] mb-8">
        {title}
      </h2>

      <div className="bg-white rounded-[50px] py-12 px-8 overflow-hidden flex relative w-full shadow-sm">
        
        <div className="absolute top-0 left-0 z-10 h-full w-[100px] bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 z-10 h-full w-[100px] bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex w-max gap-16 animate-infinite-scroll hover:pause">
          
          <div className="flex gap-16 items-center shrink-0">
            {items.map((item, index) => (
              <div key={`g1-${index}`} className="relative h-[60px] w-auto flex items-center justify-center">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-16 items-center shrink-0">
            {items.map((item, index) => (
              <div key={`g2-${index}`} className="relative h-[60px] w-auto flex items-center justify-center">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}