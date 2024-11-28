import { useEffect, useRef } from 'react';
import anime from 'animejs';
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
              targets: '.photocta-title',
              translateY: [-50, 0],
              opacity: [0, 1],
              duration: 1500,
              easing: 'easeOutExpo',
            });

            anime({
              targets: '.photocta-image',
              translateX: [-100, 0],
              opacity: [0, 1],
              duration: 1500,
              easing: 'easeOutExpo',
              delay: 500,
            });

            anime({
              targets: '.photocta-benefit',
              translateX: [-20, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeOutExpo',
              delay: anime.stagger(200, { start: 1000 }),
            });

            anime({
              targets: '.photocta-link',
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 1500,
              easing: 'easeOutExpo',
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
    <div id="quiensoy" ref={sectionRef} className="bg-gray-900 py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              alt=""
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/bFllqMEvukCHcMhpPWWR/media/666cdf32f9ac8681b655c0f8.jpeg"
              className="photocta-image h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="photocta-title text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                ¿Quién soy?
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                Llevo más de 34 años practicando la introspección. Durante miles
                de horas de autoobservación y solitud, he contemplado el mundo y
                la vida desde múltiples perspectivas. Como psicólogo de corazón
                e ingeniero industrial de carrera, mi pasión ha sido transformar
                conceptos abstractos en herramientas prácticas y funcionales.
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-white sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="photocta-benefit flex gap-x-3">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-7 w-5 flex-none"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <a href="#" className="photocta-link text-sm/6 font-semibold text-indigo-400">
                  Entra a mi curso y transforma tu vida{" "}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </div>
  );
}
