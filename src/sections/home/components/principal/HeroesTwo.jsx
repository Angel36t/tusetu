import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function HeroesTwo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.hero-title',
              translateX: [-100, 0],
              opacity: [0, 1],
              duration: 1500,
              easing: 'easeOutExpo',
              delay: 500,
            });

            anime({
              targets: '.hero-paragraph',
              translateY: [50, 0],
              opacity: [0, 1],
              duration: 1500,
              easing: 'easeOutExpo',
              delay: 1000,
              complete: () => {
                document.querySelector('.hero-paragraph').style.transform = 'none';
              },
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
    <div id="inicio" ref={sectionRef} className="bg-white pt-24">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="hero-title text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                  Conviértete en el Líder de tu Vida
                </h1>
                <p
                  className="hero-paragraph mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8"
                  style={{ willChange: 'transform, opacity' }}
                >
                  Descubre cómo alinear tus acciones con tus valores para vivir
                  con autenticidad y alcanzar tu máximo potencial. Empieza tu
                  transformación hoy.{" "}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Prueba la demo gratis
                  </a>
                  <a href="#" className="text-sm/6 font-semibold text-gray-900">
                    Aprende más sobre el curso <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            alt=""
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/bFllqMEvukCHcMhpPWWR/media/667ffee68145f80fb7db413f.png"
            className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
          />
        </div>
      </div>
    </div>
  );
}
