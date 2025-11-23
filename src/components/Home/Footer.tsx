import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D12] text-white pt-20 pb-8 border-t border-gray-900">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* --- GRID SUPERIOR (4 COLUNAS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* COLUNA 1: LOGO E INFO */}
          <div className="space-y-6">
            {/* Logo Kadoo - Substitua pelo Image se tiver o arquivo branco */}
            <div className="relative w-32 h-10">
               {/* Se tiver a logo branca: */}
               {/* <Image src="/logo-branca.png" alt="Kadoo" fill className="object-contain" /> */}
               
               {/* Texto provisório estilizado como logo */}
               <h2 className="text-4xl font-bold tracking-tight">Kadoo</h2>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
              Universos colaborativos para uma educação empreendedora!
            </p>

            <div className="text-xs text-gray-500 space-y-1 pt-2">
              <p className="font-semibold text-gray-400">KADOO Serviços em Educação e Inovação Tecnológica LTDA.</p>
              <p>CNPJ: 50.853.964/0001-25</p>
            </div>
          </div>

          {/* COLUNA 2: LINKS RÁPIDOS */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#6B47ED] transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-[#6B47ED] transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-[#6B47ED] transition-colors">Jornadas</a></li>
              <li><a href="#" className="hover:text-[#6B47ED] transition-colors">Plataforma</a></li>
              <li><a href="#" className="hover:text-[#6B47ED] transition-colors">Impacto</a></li>
              <li><a href="#" className="hover:text-[#6B47ED] transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* COLUNA 3: CONTATO */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contato</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              
              {/* Email */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#6B47ED] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span className="break-all">contato@kadooedu.com.br</span>
              </li>
              
              {/* Telefone */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#6B47ED] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>(98) 99122-7391 - Adryand</span>
              </li>
              
              {/* Localização */}
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#6B47ED] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>São Luís/MA</span>
              </li>
            </ul>
          </div>

          {/* COLUNA 4: REDES E CTA */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Redes Sociais</h3>
            
            {/* Ícones Sociais */}
            <div className="flex gap-4 mb-8">
              {/* Instagram */}
              <a href="#" className="w-10 h-10 bg-[#1F1F27] rounded-lg flex items-center justify-center hover:bg-[#6B47ED] transition-all group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 bg-[#1F1F27] rounded-lg flex items-center justify-center hover:bg-[#6B47ED] transition-all group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5.106v-8.383c0-2.281.28-4.527 3.445-4.527 3.167 0 2.912 2.964 2.912 4.743v8.167h5.051v-9.157c0-4.518-1.082-8.086-6.496-8.086-2.612 0-4.367 1.427-5.05 2.758h-.068v-2.515z"/></svg>
              </a>
              {/* Twitter */}
              <a href="#" className="w-10 h-10 bg-[#1F1F27] rounded-lg flex items-center justify-center hover:bg-[#6B47ED] transition-all group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
            </div>

            {/* Botão */}
            <a href="#" className="block w-full bg-[#6B47ED] hover:bg-[#5a3bc4] text-center py-3.5 rounded-xl font-semibold text-white transition-all shadow-lg shadow-purple-900/30">
              Acesse a Plataforma
            </a>
          </div>

        </div>

        {/* --- BARRA INFERIOR --- */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 Kadoo Education. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}