import React from "react";

// Componente para la sección principal
const MainContent = () => (
  <section className="relative mx-auto max-w-7xl py-20 lg:flex lg:items-center lg:justify-between">
    <div className="lg:max-w-2xl">
      <div className="relative before:content-[''] before:absolute before:inset-0 before:-z-10 before:bg-[url('/bg/Vector-propuse.svg')] before:bg-contain before:bg-center before:bg-no-repeat rounded-lg">
        <div className="text-4xl  text-white m-s-b">Mi Propósito</div>
        <p className="mt-6 text-base sm:text-md text-gray-200">
          Mi propósito es contribuir a que cuentes la{" "}
          <span className="font-bold text-yellow-300">
            MEJOR HISTORIA DE TU VIDA
          </span>
          , una en la cual constantemente generes{" "}
          <span className="font-bold text-yellow-300">BIENESTAR</span>... tanto
          para ti, como para aquellos que te rodean.
        </p>
        <ul className="mt-6 list-disc text-gray-300 pl-6 space-y-2 text-base sm:text-md">
          <li>Redescubras y reconectes con tu esencia.</li>
          <li>Visualices y diseñes tu máxima expresión.</li>
          <li>Materialices la grandeza que yace en ti.</li>
        </ul>
        <p className="mt-6 text-base sm:text-md text-gray-300">
          Que aproveches la increíble e improbable oportunidad de vivir, gozando
          de{" "}
          <span className="font-bold text-yellow-300">
            TU EXPERIENCIA HUMANA
          </span>
          .
        </p>
        <p className="mt-6 text-base sm:text-md text-gray-300">
          Que cuando llegues a tu último respiro, no haya nadie más a quien
          rendirle cuentas{" "}
          <span className="font-bold text-yellow-300">MÁS QUE A TI MISMO</span>,
          y estés de pie, orgulloso, aplaudiendo la{" "}
          <span className="font-bold text-yellow-300">
            INCREÍBLE VIDA QUE VIVISTE.
          </span>
        </p>
      </div>
    </div>
    <div className="mt-12 lg:mt-0 lg:ml-12">
      <img
        src="/banners/home/proposito-one.svg"
        alt="Grupo en montaña"
        className="w-full h-full object-cover max-md:rotate-0 rounded-xl"
      />
    </div>
  </section>
);

// Componente para la segunda línea versión Desktop
const SecondLineDesktop = () => (
  <section className="hidden lg:block relative mx-auto max-w-5xl py-16">
    <div className="flex justify-between items-end gap-6">
      <img
        src="/banners/home/proposito-one.svg"
        alt="Grupo en montaña"
        className="aspect-[7/5] w-[32rem] "
      />
      <div className="text-[#EEFD64] text-xl border-y border-gray-400 py-4 w-[22rem] text-center italic tracking-wide leading-relaxed">
        <p>
          Este viaje se trata de <br />
          estructurar tu experiencia humana. <br />
          <br />
          De alinear tus intenciones con tus acciones. <br />
          <br />
          Para que así puedas vivir tu vida de manera consciente, auténtica{" "}
          <br />y a propósito.
        </p>
      </div>
    </div>
  </section>
);

// Componente para la segunda línea versión Mobile
const SecondLineMobile = () => (
  <section className="lg:hidden flex flex-col items-center gap-10 px-6 py-16">
    <div className="text-center text-white text-base border-y border-gray-400 py-6 w-full italic tracking-widest">
      <p>
        Este viaje se trata de <br />
        estructurar tu experiencia humana. <br />
        <br />
        De alinear <br />
        tus intenciones <br />
        con tus acciones. <br />
        <br />
        Para que así puedas <br />
        vivir tu vida de manera <br />
        consciente, auténtica <br />y a propósito.
      </p>
    </div>
    <img
      src="/banners/home/photos-carrousel-container-second.png"
      alt="Grupo en montaña"
      className="aspect-[7/5] w-[95%] mx-auto rotate-0"
    />
  </section>
);

export default function MyPurpose() {
  return (
    <>
 <div
  className="relative w-full aspect-[256/165] bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/bg/background-campamento.svg')" }}
>
      {/* Divisor inferior */}

      {/* Contenido Principal */}
      <MainContent />

      {/* Segunda línea para Desktop y Mobile */}
      <SecondLineDesktop />
      <SecondLineMobile />
    </div>

    </>
  );
}
