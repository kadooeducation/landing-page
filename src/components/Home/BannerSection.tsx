import Image from "next/image";

export default function BannerSection() {
  return (
    <section className="relative bg-[#F1467D] md:bg-cover md:bg-center text-white py-16 md:bg-[url('/Banner.png')]">
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


  );
}
