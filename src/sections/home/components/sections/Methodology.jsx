export default function Methodology() {
  return (
    <div
      id="metodologia"
      // className="text-white p-10 h-[210vh] bg-cover bg-center sm:bg-[url('/bg/metodologia.jpg')] bg-[url('/bg/mobile/metodologia.jpg')] max-md:p-6"
      className="relative bg-white py-24 sm:py-32 h-[240vh] bg-cover bg-center bg-no-repeat max-md:h-[168vh]"
      style={{ backgroundImage: "url('/bg/metodologia.jpg')" }}
    >
      <img
        src="/lines/metodologia.svg"
        alt="Separador curvo"
        className="absolute top-[-2px] left-0 w-full h-auto object-cover "
      />

      <div className="mx-auto max-w-7xl py-16 sm:px-6 sm:pt-28 lg:px-8 max-md:px-0">
        <div className="text-center lg:text-left mb-10">
          <h1 className="text-4xl m-b text-white leading-tight max-md:text-fs-24 max-md:hidden">
            Webinars
            <br />  Y REDIRECCIONA EL RUMBO DE TU VIDA.
          </h1>

          <h1 className="text-4xl m-b text-white leading-tight max-md:text-fs-24 hidden max-md:flex">
            DESCUBRE MI <br /> METODOLOGÍA PIONEER
            Y REDIRECCIONA EL RUMBO DE TU VIDA.
          </h1>
        </div>

        <div className="relative isolate overflow-hidden bg-gray-900/15 backdrop-blur-2xl px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-0 md:pt-0 lg:flex lg:items-center lg:gap-x-20 lg:px-16 lg:pt-0 max-md:pb-10 max-md:m-6 max-md:pt-4">
          <div className="relative mt-10 flex justify-center w-full">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/3SKTTuf7byw?si=YaO0psHggsK_GISc&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-md bg-white/5 ring-1 ring-white/10 sm:h-64 md:h-72 lg:h-80 xl:h-64"
            ></iframe>
          </div>
          

          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-10 lg:text-left">
            <p className="mt-6 text-pretty text-base text-gray-300">
              Como{" "}
              <span className="font-bold">
                psicólogo en corazón e ingeniero de profesión
              </span>
              , me he enfocado en transformar conceptos abstractos en
              herramientas prácticas y funcionales. <br />
              <br />
              <span className="font-bold">Miles de horas</span> de
              autoobservación, contemplación y creación, me llevaron a
              desarrollar una metodología clara y accionable. <br />
              <br />
              
            </p>

            {/* BOTON  */}
            <div className="mt-6 flex flex-col items-center gap-y-3 sm:flex-row sm:gap-x-4 sm:justify-center">
              <a
                href="#"
                className="w-full sm:w-auto text-center rounded-md bg-white py-2 px-4 text-xs font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                EMPIEZA CON LA METODOLOGÍA
              </a>
              <a
                href="#"
                className="w-full sm:w-auto text-center text-xs py-2 px-4 font-bold bg-transparent border border-white text-white rounded-md transition-colors duration-300 hover:bg-[#EEFD64] hover:text-black"
              >
                APRENDER MÁS
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-10 max-md:hidden">
        <img
          alt="Fondo decorativo"
          src="/bg/map-brain.svg"
          className="w-full"
        />
      </div>
    </div>
  );
}
