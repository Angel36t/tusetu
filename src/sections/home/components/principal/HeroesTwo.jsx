export default function HeroesTwo() {
  return (
    <div className="relative overflow-hidden text-white min-h-screen  max-md:h-[102vh]">
      {/* Imagen para escritorio */}
      <img
        alt="Fondo decorativo para escritorio"
        src="/banners/home/banner-principal.jpg"
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover hidden sm:block"
      />

      {/* Imagen para móvil */}
      <img
        alt="Fondo decorativo para móvil"
        src="/bg/mobile/Hero-Banner.jpg"
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover block sm:hidden"
      />

      <div className="container mx-auto px-6 lg:px-8 mt-[8vh] max-md:px-4">
        <div
          data-aos="fade-right"
          className="max-w-[58rem] py-20 sm:py-10 max-md:py-18 max-md:py-10"
        >
          <div className="text-left pl-6 sm:pl-10 md:pl-24 max-md:p-0">
            <h1 className="text-lg m-b sm:text-4xl md:text-[3.4rem] tracking-widest !leading-tight max-md:text-3xl">
              <div>ES MOMENTO DE</div>
              <div className="text-[#EEFD64]">VIVIR LA VIDA ÉPICA</div>
              <div>Que LLEVAS DENTRO</div>
            </h1>
            <p className="mt-4 text-sm text-white sm:mt-8 sm:text-base o-n tracking-widest pr-[8rem] max-md:pt-8 max-md:text-xs">
              <div>
                Para diseñarla, la clave es la{" "}
                <span className="o-b">CLARIDAD PERSONAL</span>.
              </div>
              <br />
              <div>
                Con ella <span className="o-b">RECONECTAS</span> y te{" "}
                <span className="o-b">RELACIONAS</span> contigo mismo.
              </div>
              <div>Forjas tu salud mental, autoestima, y potencial.</div>
              <div>Logras estar presente en balance, paz y autocontrol.</div>
              <br />
              <div>
                Recuerda, tu eres el director de tu película, el arquitecto de{" "}
                <span className="o-b">TU BIENESTAR</span>.
              </div>
              <div>
                Este es el instante en que tomas las riendas de{" "}
                <span className="o-b">TU HISTORIA</span> y la comienzas a
                narrar.
              </div>
              <br />
              <div className="">
                Es hora de dejar de{" "}
                <span className="o-b">PROCRASTINAR TU FUTURO</span>.
              </div>
              <div>
                Es hora de dejar de{" "}
                <span className="o-b">PROCRASTINAR TU GRANDEZA.</span>
              </div>
              
            </p>
            <div className="mt-6 flex items-center space-x-4 sm:mt-10">
              <a
                href="#"
                className="text-m o-b bg-yellow text-black p-2 rounded-lg transition-colors duration-300 hover:bg-white hover:text-black max-md:text-xs max-md:p-2"
              >
               Conocer Metodología
              </a>

              <a
                href="#"
                className="text-m o-b bg-transparent border border-white text-white p-2 rounded-lg transition-colors duration-300 hover:bg-[#EEFD64] hover:text-black max-md:text-xs max-md:p-2"
              >
                Ir a Webinars
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
