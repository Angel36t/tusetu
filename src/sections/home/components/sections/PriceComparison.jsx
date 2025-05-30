import { useEffect, useState } from "react";
import PriceComparisonMobile from "./PriceComparisonMobile";

const tiers = [
  {
    name: "Excursión de <br/> Comprensión",
    des: "TU VIBRACIÓN",
    description: "La Esencia del Protagonista",
    module: "(Módulo 1 Unitario)",
    btn: "QUIERO AVENTURAR EN MI ESENCIA",
    priceMonthly: "$97",
    href: "#",
    high: "Comienza tu Viaje con:",
    highlights: [
      { description: "¿Por qué estoy a la deriva?" },
      { description: "Aclarando la Incomprensión Personal" },
      { description: "Reconecta tus Valores, Virtudes y Principios" },
      { description: "La Historia de tu Vibración" },
    ],
  },
  {
    name: "Excursión de <br/> Identificación",
    des: "TU COMPOSICIÓN ",
    description: "Tu Identidad y sus Prioridades",
    module: "(Módulos 2)",
    btn: "QUIERO RECONOCER MI IDENTIDAD",
    priceMonthly: "$197",
    href: "#prices",
    high: "Sigue tu Transformación con:",
    highlights: [
      { description: "6 Dimensiones del Ser Humano" },
      { description: "Tus Facetas, Yo Futuro, y Potencial" },
      { description: "Tu Pasiones, Propósitos y Bienestar" },
      { description: "Tu Enfoque y Tracción" },
    ],
  },
  {
    name: "Excursion de <br/> Ejecución",
    des: "TU CREACIÓN",
    description: "Tu Voluntad y sus Estrategias",
    module: "(Módulos  3)",
    btn: "QUIERO EDIFICAR MI SER",
    priceMonthly: "$247",
    href: "#prices",
    high: "Compromete a Cambiar tu VIDA:",
    highlights: [
      { description: "Materializa tu Visión con tu Misión" },
      { description: "Cambiando Creencias, Creando Propósitos" },
      { description: "Estrategias, Hábitos, Obstáculos" },
      { description: "Progresión y la Técnica ¿Cómo V.A.S.? s" },
      { description: "Beneficios del MAPA  de V.I.D.A." },
      { description: "BONO: La ESPIRIDUALIDAD  y mucho más." },
    ],
  },
];

export default function PriceComparison() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <PriceComparisonMobile tiers={tiers} />
  ) : (
    <div
      id="prices"
      className="relative bg-white py-24 sm:py-32 h-[90rem] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg/pricing-section-background 1.svg')" }}
    >
      <img
        src="/lines/divisor-curva-crema 1.svg"
        alt="Separador curvo"
        className="absolute bottom-[90rem] left-0 w-full  object-cover h-[60px]"
      />

      <div className="mx-auto max-w-4xl px-6 max-lg:text-center lg:max-w-7xl lg:px-8">
        <h1 className="text-balance text-5xl p-m pb-4 text-black tracking-tight text-center sm:text-4xl lg:text-pretty">
          campamento digital
        </h1>
        <h1 className="text-balance p-4 text-6xl p-m text-[#33AAC5] tracking-tight text-center sm:text-4xl lg:text-pretty">
          tú sé tú
        </h1>
      </div>

      <h3 className="text-balance pb-4 text-4xl m-b text-black tracking-tight text-center sm:text-4xl lg:text-pretty">
        Planes
      </h3>

      <div className="relative pt-16 sm:pt-14">
        <div className="absolute inset-x-0 bottom-0 top-48 " />
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className="price-card -m-2 grid grid-cols-1 rounded-[2rem] shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
              >
                <div className="grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5">
                  <div className="rounded-3xl bg-[#EEEADE] p-6 pb-8 shadow-2xl ring-1 ring-black/5">
                    <h2
                      className="text-xl text-center text-black o-b"
                      dangerouslySetInnerHTML={{ __html: tier.name }}
                    ></h2>
                    <p className="mt-2 text-pretty text-sm/6 text-gray-600 text-center o-b">
                      {tier.des}
                    </p>
                    <p className="text-pretty text-sm/6 text-gray-600 text-center">
                      {tier.description}
                    </p>
                    <div className={index === 0 ? "" : "blur-sm select-none"}>
                      <div className="mt-8 flex items-center gap-4 m-m justify-center">
                        <div
                          className={
                            index === 0
                              ? "text-4xl text-gray-950"
                              : "blur-md text-4xl text-gray-950"
                          }
                        >
                          {tier.priceMonthly}
                        </div>
                        <div className="text-sm text-gray-600">
                          <p>USD</p>
                          <p>por modulo 1</p>
                        </div>
                      </div>
                      <p className="mt-4 text-pretty text-sm/6 text-gray-600 text-center o-s-b">
                        {tier.module}
                      </p>
                      <div className="mt-8">
                        <a
                          href={tier.href}
                          aria-label={`Start a free trial on the ${tier.name} plan`}
                          className="w-full trial-button o-b inline-block rounded-md bg-[#DAE562] px-3.5 py-2 text-center text-sm/6 text-black shadow-sm hover:bg-[#d5e05b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          {tier.btn}
                        </a>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-sm/6 o-s-b text-gray-950">
                          {tier.high}
                        </h3>
                        <ul className="mt-3 space-y-3">
                          {tier.highlights.map((highlight) => (
                            <li
                              key={highlight.description}
                              data-disabled={highlight.disabled}
                              className="group flex items-start gap-4 text-sm text-gray-600 data-[disabled]:text-gray-400"
                            >
                              <span className="inline-flex h-4 items-center">
                                <img
                                  src="/icon/circle-check-solid.svg"
                                  alt="check alex tu se tu"
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
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CONTAINER YELLOW */}
      <div className=" mx-auto max-w-2xl px-6 lg:max-w-7xl mt-0 lg:p-8">
        <div className="w-full flex justify-center items-center py-10 px-4 lg:px-20">
          <div className="w-full max-w-7xl bg-[#DAE565] p-6 lg:p-10 rounded-xl shadow-lg flex flex-col lg:flex-row items-center justify-between">
            {/* Contenido de la izquierda */}
            <div className="flex-1">
              <h2 className="text-3xl m-b text-gray-800">All In One</h2>
              <h3 className="text-lg o-b mt-4 text-gray-800 ">
                Expedición a mi Interior
              </h3>
              <p className="text-gray-800 text-sm mt-2 max-w-md o-m blur-md select-none">
                Lorem ipsum dolor sit amet consectetur. Nibh odio facilisis nisi
                id id nibh lobortis viverra facilisis.
              </p>

              {/* Etiquetas */}
              <div className="mt-8 flex gap-4 text-sm o-m text-gray-800">
                <span className="flex items-center gap-1">
                  <span className="inline-flex h-4 items-center">
                    <img
                      src="/icon/circle-check-solid.svg"
                      alt="check alex tu se tu"
                    />
                  </span>{" "}
                  Tú Vibración
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-flex h-4 items-center">
                    <img
                      src="/icon/circle-check-solid.svg"
                      alt="check alex tu se tu"
                    />
                  </span>{" "}
                  Tú Composición
                </span>
                <span className="flex items-center gap-1">
                  <span className="inline-flex h-4 items-center">
                    <img
                      src="/icon/circle-check-solid.svg"
                      alt="check alex tu se tu"
                    />
                  </span>{" "}
                  Tú Creación
                </span>
              </div>
            </div>

            {/* Sección de precio y botón */}
            <div className="flex items-center gap-4 mt-6 lg:mt-0 blur-md select-none ">
              <div className="text-right text-gray-800">
                <span className="text-5xl m-b">$247</span>
                <span className="text-lg m-m"> USD</span>
                <p className="text-sm text-center o-s-b pt-1 text-gray-600">
                  (Módulos 1, 2 y 3)
                </p>
              </div>
              <a
                href="#"
                className="p-4 rounded hover:scale-110 transition pointer-events-none"
              >
                <img
                  src="/icon/arrow-up-rightT.svg"
                  alt="check alex tu se tu"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
