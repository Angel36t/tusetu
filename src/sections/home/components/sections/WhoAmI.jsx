import { useEffect, useRef } from "react";
import anime from "animejs";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const benefits = [
  "Te conocerás mejor.",
  "Te daré herramientas prácticas.",
  "Descubrirás tu grandeza interna.",
  "Verás la vida con nuevos ojos.",
  "Entenderás mejor tus emociones.",
  "Crecimiento personal real y profundo.",
];

export default function WhoAmI() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".photocta-title",
              translateY: [-50, 0],
              opacity: [0, 1],
              duration: 1500,
              easing: "easeOutExpo",
            });

            anime({
              targets: ".photocta-image",
              translateX: [-100, 0],
              opacity: [0, 1],
              duration: 1500,
              easing: "easeOutExpo",
              delay: 500,
            });

            anime({
              targets: ".photocta-benefit",
              translateX: [-20, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: "easeOutExpo",
              delay: anime.stagger(200, { start: 1000 }),
            });

            anime({
              targets: ".photocta-link",
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 1500,
              easing: "easeOutExpo",
              delay: 2000,
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      id="quiensoy"
      ref={sectionRef}
      className="relative overflow-hidden text-white min-h-screen"
    >
      <img
        alt="Fondo decorativo para escritorio"
        src="/bg/bg-quien-soy.jpg"
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover hidden sm:block"
      />

      {/* Imagen para móvil */}
      <img
        alt="Fondo decorativo para móvil"
        src="/bg/mobile/history.jpg"
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover block sm:hidden"
      />

      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 sm:py-22 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16  px-6 py-16 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-0 max-md:pb-36">
            <img
              alt=""
              src="/bg/alex-quien-soy.png"
              className="hidden sm:block photocta-image h-[50rem] w-full flex-none rounded-2xl object-cover lg:aspect-square lg:[50rem] lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              {/* Título centrado */}
              <h2 className="photocta-title m-b pb-4 text-center text-pretty text-4xl tracking-tight text-white sm:text-4xl max-md:text-fs-24">
                EL COMIENZO DE LA HISTORIA
              </h2>

              {/* Contenedor de dos columnas */}
              <div className="mt-6 flex flex-col sm:flex-row gap-6 text-base text-gray-300 max-md:text-fs-12">
                {/* Columna izquierda */}
                <div className="w-full sm:w-1/2 text-pretty">
                  <p>
                    A mis <span className="o-b">7 años</span> viví una
                    experiencia reveladora que cambió el rumbo de mi vida.
                  </p>
                  <br />
                  <p>
                    Ese día, sin comprenderlo del todo, inicié el viaje más
                    interesante de mi existencia:
                    <span className="o-b"> el viaje hacia mi interior</span>.
                    Desde entonces he sido un explorador en constante
                    introspección, aventurándome en la relación más importante…
                    aquella
                    <span className="o-b"> CONMIGO MISMO</span>.
                  </p>
                  <br />
                  <p>
                    Al hacerlo he abierto brechas. Subido montañas. Expandido
                    mis horizontes. Observado. Cuestionado. Procesado, tanto mi
                    mundo interno como externo.
                  </p>
                  <br />
                  <p>
                    Sigo haciéndolo y siempre lo haré. Ya que con cada paso
                    fomento en mí el
                    <span className="o-b">
                      {" "}
                      ‘Emprender como Filosofía de Vida’
                    </span>
                    .
                  </p>
                  <br />
                  <p>
                    Una manera de vivir que, bajo mis términos, me reta a
                    empujar mis límites, cuestionar mis creencias y ser un
                    coleccionista de sabiduría y perspectivas. A ser un pionero
                    motivado por constante expansión.
                  </p>
                  <br />
                  <a
                    href="#"
                    className="text-m o-b  bg-yellow text-black p-2 rounded-lg transition-colors duration-300 hover:bg-white hover:text-black"
                  >
                    Conocer Metodología
                  </a>
                </div>

                {/* Columna derecha */}
                <div className="w-full sm:w-1/2 text-pretty max-md:hidden">
                  <p>
                    Para ello convertí mi{" "}
                    <span className="o-b">zona de confort</span> en mi
                    campamento base desde donde emprendo nuevas expediciones,
                    exponiéndome a mis límites en diferentes aspectos de mi
                    vida, como un
                    <span className="o-b"> PIONEER</span> adentrándose a lo
                    desconocido.
                  </p>
                  <br />
                  <p>
                    La intención es desarrollar, madurar, evolucionar.
                    Recolectar herramientas para edificar la{" "}
                    <span className="o-b"> VIDA ÉPICA</span> que diseñe.
                  </p>
                  <br />
                  <p>
                    Hoy, tras más de{" "}
                    <span className="o-b">35 años de exploración interna</span>,
                    quiero compartir contigo mi Metodología
                    <span className="o-b"> PIONEER</span> y todo lo que he
                    aprendido en el camino.
                  </p>
                  <br />
                  <p>
                    Mi <span className="o-b">objetivo</span> es que tú también
                    puedas planear tus propias expediciones y excursiones.
                  </p>
                  <br />
                  <p>
                    Que tú también te conviertas en un{" "}
                    <span className="o-b">PIONEER</span> en constante expansión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/lines/divisor-campamento.svg"
        alt=""
        aria-hidden="true"
        className="w-full object-cover block"
        style={{ aspectRatio: "4096 / 648" }}
      />
    </div>
  );
}
