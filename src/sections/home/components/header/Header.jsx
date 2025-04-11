import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  CogIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
  StarIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Blog",
    description:
      "Explora una variedad de artículos interesantes donde comparto mis conocimientos y perspectivas sobre diversos temas.",
    href: "#",
    icon: DocumentTextIcon,
  },
  {
    name: "Reseñas",
    description: "Lee reseñas honestas y detalladas sobre productos y servicios relevantes.",
    href: "#",
    icon: StarIcon,
  },
  {
    name: "Metodología",
    description: "Descubre cómo mi enfoque metodológico puede ayudarte a alcanzar tus metas utilizando herramientas y técnicas efectivas.",
    href: "#",
    icon: CogIcon,
  },
  {
    name: "Talleres",
    description: "Participa en talleres interactivos diseñados para mejorar tus habilidades y profundizar en temas específicos.",
    href: "#",
    icon: PresentationChartLineIcon,
  },
];

const callsToAction = [
  { name: "Demo", href: "#", icon: PlayCircleIcon },
  { name: "Contáctame", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-black to-transparent backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 lg:py-2 max-md:px-0 max-md:justify-center"
      >
        <div className="flex items-center gap-8">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-x-2">
            <img
              alt="Logo"
              src="assets/logo/logo.svg"
              className="h-16 w-auto max-md:h-12"
            />
          </a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <PopoverGroup className="hidden lg:flex lg:gap-x-8">
            <Popover className="relative">
              <PopoverButton className={`flex items-center gap-x-1 text-sm/6 font-semibold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}>
                Cursos
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
              </PopoverButton>
              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-gray-600 group-hover:text-indigo-600"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
            <a href="#quiensoy" className={`text-sm/6 font-semibold ${isScrolled ? "text-gray-900" : "text-white"}`}>
              ¿Quién Soy?
            </a>
            <a href="#proposito" className={`text-sm/6 font-semibold ${isScrolled ? "text-gray-900" : "text-white"}`}>
              ¿Cuál es Mi Propósito?
            </a>
            <a href="#testimonios" className={`text-sm/6 font-semibold ${isScrolled ? "text-gray-900" : "text-white"}`}>
              Testimonios
            </a>
            <a href="#contacto" className={`text-sm/6 font-semibold ${isScrolled ? "text-gray-900" : "text-white"}`}>
              Contacto
            </a>
          </PopoverGroup>
          <a href="/login" className="text-sm/6 m-m bg-[#F0F99D] px-8 py-1 ml-6 rounded-md">
            Sistema Pioneers
          </a>
        </div>
      </nav>
    </header>
  );
}
