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
        
        <section>
          <span>seção de benoni</span>
        </section>
      </div>
    </main>
  );
}
