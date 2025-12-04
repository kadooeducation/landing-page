import { Menu } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header>
        <nav className="flex items-center justify-between px-4 py-4 sm:px-8 lg:px-32 lg:py-6">
          <Image
            src="/new_logo.png"
            alt="Logo da Kadoo Edu"
            width={117}
            height={51}
          />

          <div className="md:hidden">
            <input id="menu-toggle" type="checkbox" className="peer hidden" />
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <Menu className="w-6 h-6" />
            </label>

            <div className="peer-checked:top-18 absolute bg-[#FDF4EB] min-h-[60vh] left-0 -top-full w-full flex items-center justify-center px-5 z-10">
              <ul className="flex flex-col items-center gap-8">
                <li>
                  <a
                    href="#"
                    className="text-purple-primary font-semibold text-2xl"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl">
                    Editais
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl">
                    Projetos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-2xl">
                    Contatos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="md:static md:min-h-fit md:w-auto flex items-center px-5">
              <ul className="flex md:flex-row items-center md:gap-8">
                <li>
                  <a href="#" className="text-purple-primary font-semibold">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Editais</a>
                </li>
                <li>
                  <a href="#">Projetos</a>
                </li>
                <li>
                  <a href="#">Contatos</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  )
}