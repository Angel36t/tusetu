export default function ContactUs() {
  return (
    <div
      id="contacto"
      className="relative bg-white py-24 sm:py-32 h-[110vh] bg-cover bg-center bg-no-repeat max-md:py-16"

      style={{ backgroundImage: "url('/banners/home/form-bg.jpg')" }}
    >
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <h2 className="text-pretty text-4xl m-b text-white sm:text-5xl max-md:text-fs-24 max-md:px-4">
          Descubre cómo puedes transformar <span className="text-[#EEFD64]">tu vida</span> hoy mismo
        </h2>
        <p className="pt-4 pb-6 text-lg/8 text-white o-m max-md:text-fs-14 max-md:px-4">
          Nuestro curso está diseñado para ayudarte a alcanzar tu máximo
          potencial. Descubre herramientas prácticas que te empoderarán para
          tomar control de tu vida personal y profesional. No importa en qué
          etapa estés, juntos podemos lograr el cambio que deseas.
        </p>
        <div className="mt-16 flex flex-col gap-16 sm:gap-y-20 lg:flex-row max-md:px-4">
          <form action="#" method="POST" className="lg:flex-auto">  
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Nombre
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Apellido
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Teléfono
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-white-900"
                >
                  Correo electrónico
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-white"
                >
                  Mensaje
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-[#DAE562] hover:bg-[#d5e05b] px-3.5 py-2.5 text-center text-sm text-black o-b shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Inscríbete en el Curso
              </button>
            </div>
            <p className="mt-4 text-sm/6 text-gray-500">
              Al enviar este formulario, estás tomando el primer paso para
              convertirte en el CEO de tu propia vida. Estoy comprometido/a con
              tu privacidad. Consulta la{" "}
              <a href="#" className="font-semibold text-indigo-600">
                política de privacidad
              </a>
              .
            </p>
          </form>
          <div className="lg:mt-6 lg:w-80 lg:flex-none max-md:hidden">
            <figure className="mt-10">
              <blockquote className="text-lg/8 font-semibold text-white">
                <p>
                  “Este curso es tu oportunidad de tomar el control de tu vida y
                  alcanzar los sueños que siempre has tenido. No estás solo en
                  este camino; estamos aquí para proporcionarte las herramientas
                  y el apoyo que necesitas para triunfar. El mejor momento para
                  empezar es ahora.”
                </p>
              </blockquote>
              <figcaption className="mt-10 flex gap-x-6">
                <img
                  alt=""
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/bFllqMEvukCHcMhpPWWR/media/666cdf32f9ac8681b655c0f8.jpeg"
                  className="size-12 flex-none rounded-full bg-gray-50 object-cover"
                />
                <div>
                  <div className="text-base font-semibold text-white">
                    Alexander Assad
                  </div>
                  <div className="text-sm/6 text-gray-400">Fundador Pioneers</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
