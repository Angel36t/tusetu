export default function Methodology() {
    return (
      <div id="metodologia" className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center lg:text-left mb-10">
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Descubre Mi Metodología para Convertirte en el CEO de Tu Propia Vida
            </h1>
          </div>
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
              Con mi metodología, aprenderás a tomar decisiones conscientes y alineadas con tus metas personales y profesionales. A través de herramientas prácticas y ejercicios personalizados, te guiaré para que tomes control de tu vida, establezcas hábitos positivos y mantengas la motivación hacia tus objetivos.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Empieza con la Metodología
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white">
                  Aprende más <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 lg:mt-0 lg:flex lg:justify-center w-full lg:w-auto">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/3SKTTuf7byw?si=YaO0psHggsK_GISc&amp;controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-md bg-white/5 ring-1 ring-white/10"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
}
