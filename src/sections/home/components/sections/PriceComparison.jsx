import anime from 'animejs';
import { useEffect } from 'react';
import { PlusIcon } from "@heroicons/react/16/solid";

const tiers = [
  {
    name: "Explorador",
    description: "Todo lo que necesitas para empezar a transformar tu vida.",
    priceMonthly: "$19",
    href: "#",
    highlights: [
      { description: "Acceso básico al curso" },
      { description: "Ejercicios prácticos guiados" },
      { description: "Soporte vía email" },
      { description: "Talleres trimestrales", disabled: true },
      { description: "Sesiones de coaching personal", disabled: true },
      { description: "Soporte prioritario", disabled: true },
    ],
  },
  {
    name: "Avanzado",
    description: "Ideal para quienes quieren profundizar y crecer.",
    priceMonthly: "$49",
    href: "#",
    highlights: [
      { description: "Acceso completo al curso" },
      { description: "Ejercicios prácticos avanzados" },
      { description: "Soporte vía email" },
      { description: "Talleres trimestrales" },
      { description: "Sesiones de coaching personal", disabled: true },
      { description: "Soporte prioritario", disabled: true },
    ],
  },
  {
    name: "Transformador",
    description: "Máxima flexibilidad y soporte para una transformación completa.",
    priceMonthly: "$99",
    href: "#",
    highlights: [
      { description: "Acceso completo al curso" },
      { description: "Ejercicios prácticos avanzados" },
      { description: "Soporte personalizado 24/7" },
      { description: "Talleres trimestrales" },
      { description: "Sesiones de coaching personal" },
      { description: "Soporte prioritario" },
    ],
  },
];

export default function PriceComparison() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [-50, 0],
              duration: 1000,
              easing: 'easeOutExpo',
            });
          }
        });
      },
      { threshold: 0.2 } // Umbral del 20%, empieza la animación cuando el 20% del elemento sea visible
    );

    document.querySelectorAll('.price-card').forEach((card) => {
      observer.observe(card);
    });

    document.querySelectorAll('.trial-button').forEach((button) => {
      button.addEventListener('mouseenter', () => {
        anime({
          targets: button,
          scale: 1.05,
          duration: 300,
          easing: 'easeOutQuad',
        });
      });

      button.addEventListener('mouseleave', () => {
        anime({
          targets: button,
          scale: 1,
          duration: 300,
          easing: 'easeOutQuad',
        });
      });
    });

    return () => {
      document.querySelectorAll('.price-card').forEach((card) => {
        observer.unobserve(card);
      });

      document.querySelectorAll('.trial-button').forEach((button) => {
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 max-lg:text-center lg:max-w-7xl lg:px-8">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-950 sm:text-6xl lg:text-pretty">
          Precios que se adaptan a tu camino de transformación
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg font-medium text-gray-600 max-lg:mx-auto sm:text-xl/8">
          Elige el plan que mejor se adapte a tus necesidades. Todos los planes
          están diseñados para acompañarte en cada paso de tu viaje personal
          hacia el crecimiento y el autoconocimiento.
        </p>
      </div>
      <div className="relative pt-16 sm:pt-24">
        <div className="absolute inset-x-0 bottom-0 top-48 bg-[radial-gradient(circle_at_center_var(--gradient-position),#7775D6,#592E71,#030712_70%)] [--gradient-position:center] lg:[--gradient-position:150%]" />
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className="price-card -m-2 grid grid-cols-1 rounded-[2rem] shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
              >
                <div className="grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5">
                  <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                    <h2 className="text-sm font-semibold text-indigo-600">
                      {tier.name} <span className="sr-only">plan</span>
                    </h2>
                    <p className="mt-2 text-pretty text-sm/6 text-gray-600">
                      {tier.description}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="text-5xl font-semibold text-gray-950">
                        {tier.priceMonthly}
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>USD</p>
                        <p>por mes </p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href={tier.href}
                        aria-label={`Start a free trial on the ${tier.name} plan`}
                        className="trial-button inline-block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Empieza tu prueba gratuita
                      </a>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-sm/6 font-medium text-gray-950">
                        Comienza tu transformación con:
                      </h3>
                      <ul className="mt-3 space-y-3">
                        {tier.highlights.map((highlight) => (
                          <li
                            key={highlight.description}
                            data-disabled={highlight.disabled}
                            className="group flex items-start gap-4 text-sm/6 text-gray-600 data-[disabled]:text-gray-400"
                          >
                            <span className="inline-flex h-6 items-center">
                              <PlusIcon
                                aria-hidden="true"
                                className="size-4 fill-gray-400 group-data-[disabled]:fill-gray-300"
                              />
                            </span>
                            {highlight.disabled ? (
                              <span className="sr-only">Not included:</span>
                            ) : null}
                            {highlight.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between py-16 opacity-60 max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4 sm:py-24">
          </div>
        </div>
      </div>
    </div>
  );
}
