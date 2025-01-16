export default function HeroesTwo() {
  return (
    <div className="relative overflow-hidden text-white h-[88vh]">
      {/* Imagen para escritorio */}
      <img
        alt="Fondo decorativo para escritorio"
        src="/banners/home/fade-effect.jpg"
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover hidden sm:block"
      />

      {/* Imagen para móvil */}
      <img
        alt="Fondo decorativo para móvil"
        src="/banners/barco.jpg"
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover block sm:hidden brightness-50"
      />

      <div className="container mx-auto px-6 lg:px-8">
        <div data-aos="fade-right" className="max-w-2xl py-20 sm:py-10">
          <div className="text-left pl-6 sm:pl-10 md:pl-24">
            {/* <h1 className="text-lg m-b tracking-tight sm:text-4xl md:text-5xl">
              Tu puente hacia el comercio internacional, fácil y rápido
            </h1> */}
            {/* <p className="mt-4 text-sm text-gray-400 sm:mt-8 sm:text-base m-m">
              Gestionamos cada detalle de tus importaciones y exportaciones,
              desde el origen hasta el destino.
            </p>
            <div className="mt-6 flex items-center space-x-4 sm:mt-10">
              <a href="#" className="text-sm m-s-b">
                Descubre nuestras soluciones <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-30 sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
