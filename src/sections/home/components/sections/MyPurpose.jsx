import React from "react";

export default function MyPurpose() {
  return (
    <div
      id="proposito"
      className="relative bg-white py-24 sm:pt-32 sm:pb-0 h-auto bg-cover bg-center bg-no-repeat max-md:py-6"
      style={{ backgroundImage: "url('/bg/propusee.png')" }}
    >
      <img
        src="/lines/metodologia.svg"
        alt="Separador curvo"
        className="absolute bottom-[86rem] left-0 w-full h-auto object-cover rotate-180 max-md:top-[-108px] max-md:h-[109px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:flex lg:px-8 max-md:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          {/* Contenedor con ::before para la imagen de fondo */}
          <div className="relative lg:col-end-1 lg:w-full lg:max-w-lg lg:py-10 p-6 rounded-lg before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[url('/bg/Vector-propuse.svg')] before:bg-contain before:bg-center before:bg-no-repeat ">
            <h2 className="text-4xl tracking-tight m-b text-white sm:text-5xl max-md:text-fs-24">
              Mi Propósito
            </h2>
            <p className="mt-6 text-base text-gray-200 max-md:text-sm">
              Mi propósito es contribuir a que cuentes la{" "}
              <span className="o-b text-yellow-300">
                MEJOR HISTORIA DE TU VIDA
              </span>
              , una en la cual constantemente generes{" "}
              <span className="o-b text-yellow-300">BIENESTAR</span>... tanto
              para ti, como para aquellos que te rodean.
            </p>
            <ul className="mt-6 text-lg text-gray-300 list-disc pl-5 space-y-2 max-md:pl-12 max-md:text-sm">
              <li>Redescubras y reconectes con tu esencia.</li>
              <li>Visualices y diseñes tu máxima expresión.</li>
              <li>Materialices la grandeza que yace en ti.</li>
            </ul>
            <p className="mt-6 text-lg text-gray-300 max-md:text-sm">
              Que aproveches la increíble e improbable oportunidad de vivir,
              gozando de{" "}
              <span className="o-b text-yellow-300">TU EXPERIENCIA HUMANA</span>
              .
            </p>
            <p className="mt-6 text-lg text-gray-300 max-md:text-sm">
              Que cuando llegues a tu último respiro, no haya nadie más a quien
              rendirle cuentas{" "}
              <span className="font-bold text-yellow-300">
                MÁS QUE A TI MISMO
              </span>
              , y estés de pie, orgulloso, aplaudiendo la{" "}
              <span className="font-bold text-yellow-300">
                INCREÍBLE VIDA QUE VIVISTE.
              </span>
            </p>
          </div>

          {/* Contenedor de imágenes tipo "polaroid" */}
          <div className="relative flex flex-wrap items-start justify-center gap-6 sm:gap-8 lg:contents">
            <div className="relative w-full flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end max-md:right-0">
              <img
                alt="Grupo en montaña"
                src="/banners/home/photos-carrousel-container.png"
                className="aspect-[7/5] w-full max-w-[52rem] rotate-3 max-md:w-[90%] max-md:rotate-0 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* LINE TWO */}

      <div className="relative mx-auto max-w-7xl px-6 lg:flex lg:px-8 max-md:hidden">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:py-10">
            <div className="relative right-[14rem] w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                alt="Grupo en montaña"
                src="/banners/home/photos-carrousel-container-second.png"
                className="aspect-[7/5] w-[52rem] max-w-none  rotate-3"
              />
            </div>
          </div>

          {/* Contenedor de imágenes tipo "polaroid" */}
          <div className="relative flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            {/* Frase final */}
            <div className="text-center text-[#EEFD64] text-xl lg:mt-20 border-y border-gray-400 pt-6 h-[22rem] mt-[7rem]">
              <p className="italic text-[#EEFD64] m-m text-fs-26 tracking-widest">
                Este viaje se trata de <br />
                estructurar tu experiencia humana.
                <br />
                <br />
                De alinear <br />
                tus intenciones <br /> con tus acciones.
                <br />
                <br />
                Para que así puedas <br /> vivir tu vida de manera <br />
                consciente, auténtica <br /> y a propósito.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LINE TWO mobile*/}
      <div className="!hidden relative mx-auto max-w-7xl px-6 lg:flex lg:px-8 max-md:!flex max-md:flex-col max-md:items-center max-md:justify-center ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          {/* Contenedor de imágenes tipo "polaroid" */}
          <div className="relative flex flex-col items-center justify-center gap-6 sm:gap-8 lg:flex-row">
            {/* Frase final */}
            <div className="text-center text-white text-xl border-y border-gray-400 py-6 w-full sm:w-1/2 max-md:w-full max-md:px-0 ">
              <p className="italic text-[#E2E2DB] tracking-widest max-md:text-base">
                Este viaje se trata de <br />
                estructurar tu experiencia humana.
                <br />
                <br />
                De alinear <br />
                tus intenciones <br /> con tus acciones.
                <br />
                <br />
                Para que así puedas <br /> vivir tu vida de manera <br />
                consciente, auténtica <br /> y a propósito.
              </p>
            </div>
          </div>

          {/* Imagen centrada en mobile */}

          <div className="relative w-full flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end max-md:right-0">
            <img
              alt="Grupo en montaña"
              src="/banners/home/photos-carrousel-container-second.png"
              className="aspect-[7/5] w-full max-w-[52rem] rotate-3 max-md:w-[95%] max-md:rotate-0 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
