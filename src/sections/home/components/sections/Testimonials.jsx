import { useEffect, useRef } from "react";
import anime from "animejs";

const featuredTestimonial = {
  body: "Este curso me ayudó a encontrar claridad y propósito en mi vida. Ahora me siento más alineado con mis valores y soy capaz de tomar decisiones con confianza. Es una transformación increíble.",
  author: {
    name: "Andrea Martínez",
    handle: "andreamartinez",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    logoUrl: "https://tailwindui.com/plus/img/logos/savvycal-logo-gray-900.svg",
  },
};

const testimonials = [
  [
    [
      {
        body: "La introspección guiada me permitió descubrir cosas sobre mí que desconocía. Mi día a día ha mejorado enormemente desde que aprendí a conectar con mi verdadero yo.",
        author: {
          name: "Carlos Gómez",
          handle: "carlosgomez",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Antes de tomar este curso, me sentía perdido y sin dirección. Gracias a las sesiones de introspección, he ganado la claridad que necesitaba para definir mis prioridades y empezar a vivir con propósito.",
        author: {
          name: "Lucía Herrera",
          handle: "luciaherrera",
          imageUrl:
            "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
    [
      {
        body: "Este curso fue un antes y un después en mi vida. La capacidad de introspección que desarrollé me ha ayudado a mejorar mis relaciones y alcanzar un equilibrio interno.",
        author: {
          name: "Marta Sánchez",
          handle: "martasanchez",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Tomar este curso me ayudó a liberar la ansiedad que sentía por el futuro. Ahora puedo enfocarme en el presente y disfrutar más de cada momento. Ha sido una experiencia realmente transformadora.",
        author: {
          name: "Alejandro Ruiz",
          handle: "alejandroruiz",
          imageUrl:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
  [
    [
      {
        body: "Nunca había sido tan consciente de lo que realmente quería en la vida. Gracias a este curso, pude alinear mis metas con mis valores, y cada día me siento más pleno.",
        author: {
          name: "Fernando Pérez",
          handle: "fernandoperez",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "El curso me dio herramientas prácticas para gestionar mis emociones y enfrentar situaciones difíciles de una forma positiva. He ganado seguridad en mí mismo y una perspectiva más optimista.",
        author: {
          name: "Paula Ramírez",
          handle: "paularamirez",
          imageUrl:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
    [
      {
        body: "Gracias a las herramientas prácticas del curso, pude enfrentar desafíos que antes me abrumaban. Ahora los veo como oportunidades para crecer.",
        author: {
          name: "Sofía López",
          handle: "sofialopez",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Este curso me enseñó a identificar los patrones de pensamiento que me limitaban y me brindó las herramientas para cambiarlos. Ahora me siento más en control de mi vida y de mi bienestar.",
        author: {
          name: "Javier Ortega",
          handle: "javierortega",
          imageUrl:
            "https://images.unsplash.com/photo-1502767089025-6572583495b9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              translateY: [20, 0],
              opacity: [0, 1],
              duration: 1200,
              easing: 'easeOutQuad',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) {
      testimonialsRef.current.querySelectorAll('.testimonial-item').forEach((testimonial) => {
        observer.observe(testimonial);
      });
    }

    return () => {
      if (testimonialsRef.current) {
        testimonialsRef.current.querySelectorAll('.testimonial-item').forEach((testimonial) => {
          observer.unobserve(testimonial);
        });
      }
    };
  }, []);

  return (
    <div id="testimonios" ref={testimonialsRef} className="relative isolate bg-white pb-32 pt-24 sm:pt-32"
    style={{
      backgroundImage: "url(/bg/bg-testimonial.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Testimonios</h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Historias de transformación y crecimiento
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="testimonial-item rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <img
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="size-10 flex-none rounded-full bg-gray-50"
              />
              <div className="flex-auto">
                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="testimonial-item rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img alt="" src={testimonial.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                        <div>
                          <div className="font-semibold">{testimonial.author.name}</div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}