import React from "react";

export default function MyPurpose() {
  return (
    <div id="proposito" className="mt-32 overflow-hidden sm:mt-40">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Mi Propósito
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600">
              Mi propósito es ayudarte a experimentar tu Experiencia Humana con un enfoque profundo en el bienestar, para que puedas alcanzar todo tu potencial.
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              Desde hace más de 34 años, he estado explorando mi propio ser a través de la introspección, la autoobservación, y el aprendizaje constante. Mi deseo es acompañarte a ti en un viaje similar, brindándote herramientas y enfoques para que te conviertas en el líder de tu propia vida, para que encuentres la autenticidad y la plenitud que buscas.
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              Este viaje se trata de estructurar tu experiencia humana, alineando tus acciones con tus valores fundamentales, para que puedas vivir una vida más significativa. Estoy aquí para guiarte a descubrir tu grandeza interior y ayudarte a ser mejor hoy de lo que eras ayer.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                alt="Practicando la introspección"
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/bFllqMEvukCHcMhpPWWR/media/668008543f342327df695f24.jpeg"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  alt="Explorando nuevas perspectivas"
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/bFllqMEvukCHcMhpPWWR/media/667fff5f61f34b6366d98567.jpeg"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  alt="Encuentra la autenticidad"
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/bFllqMEvukCHcMhpPWWR/media/66800bb80ec821ae666f003b.jpeg"
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  alt="Transformación personal"
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/bFllqMEvukCHcMhpPWWR/media/66800c3a0ec8211c6b6f0064.jpeg"
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
