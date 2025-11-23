import Image from "next/image";

// Definimos as propriedades que cada card deve receber
interface SolutionCardProps {
  imageSrc: string;
  tag: string;
  title: string;
  description: string;
}

export default function SolutionCard({ imageSrc, tag, title, description }: SolutionCardProps) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md group h-130">
  
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/50 transition-opacity group-hover:bg-black/60"></div>

      <div className="absolute bottom-0 p-6 text-white">
        <span className="text-sm font-semibold uppercase tracking-wider">{tag}</span>
        <h3 className="text-3xl lg:text-4xl font-semibold mt-2 leading-tight" dangerouslySetInnerHTML={{ __html: title }} />

        <p className="text-sm leading-relaxed mt-3 max-w-xs opacity-90">
          {description}
        </p>

        <button className="mt-6 border border-white text-white rounded-md px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors">
          Saiba mais
        </button>
      </div>
    </div>
  );
}