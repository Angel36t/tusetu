export default function Teachers() {
  const people = [
    {
      name: "Eckhart Tolle",
      role: "Enfoque en el SÉR",
      imageUrl:
        "https://yogaterapia.es/wp-content/uploads/2023/06/Eckhart-Tolle1-web.jpg",
    },
    {
      name: "Tony Robbins",
      role: "Enfoque en el HACER",
      imageUrl:
        "https://cdn.sanity.io/images/nyyhaljw/production/3649fc07df8bc585aea452126ee2d7e516cf6b64-512x512.jpg?w=512&h=512&q=80&auto=format",
    },
    
    {
      name: "Joe Dispenza",
      role: "Enfoque en el VISUALIZAR",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/j54ifs2ddacl6v63mfbmba7d7r.jpg",
    },
  ];

  return (
    <div
      className="relative bg-white py-24 sm:py-32 h-[97vh] bg-cover bg-center bg-no-repeat max-md:h-[180vh] "
      style={{ backgroundImage: "url('/banners/home/teachers-bg.jpg')" }}
    >
      <img 
        src="/lines/divisor-crema.svg"
        alt="Separador curvo"
        className="absolute top-[-2px] left-0 w-full h-[60px] object-cover rotate-180 max-md:h-[42px]"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto w-full lg:mx-0">
          <h2 className="text-pretty text-4xl m-b text-center text-white sm:text-5xl max-md:text-fs-24">
            CORRIENTES DE PENSAMIENTO
          </h2>
          <div className="flex justify-center items-center">
            <p className="mt-6 m-m text-xl text-[#F0F99D] px-8 text-center inline-block max-md:text-fs-14 max-md:px-0">
              <span className="block border-t-2 border-[#F0F99D] w-4/4 mx-auto mb-2"></span>
              "ESTE TALLER ES UNA JOYA. MEZCLA LA <br /> ESPIRITUALIDAD DE
              TOLLE, CON LA <br />
              PROACTIVIDAD DE TONY ROBBINS, Y LA <br /> MEDITACION DE DISPENZA.
              TODO CON UNA <br /> NARRATIVA SIMPLE E INTUITIVA."
              <br /> -Jorge Marcos -
              <span className="block border-b-2 border-[#F0F99D] w-4/4 mx-auto mt-2"></span>
            </p>
          </div>
        </div>

        {/* Contenedor de los perfiles sin Swiper */}
        <div className="mt-20 flex flex-wrap justify-center gap-10 lg:gap-20">
          {people.map((person) => (
            <div key={person.name} className="text-center max-w-[200px]">
              <img
                alt={person.name}
                src={person.imageUrl}
                className="mx-auto size-24 rounded-full object-cover"
              />
              <h3 className="mt-6 text-base tracking-tight text-white max-md:text-fs-16">
                {person.name}
              </h3>
              <p className="text-fs-16 text-[#EEFD64] pt-2 ">
                {person.role}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center p-16 text-white o-n text-fs-20 max-md:p-0">
          
          En este taller el enfoque es holístico. <br/> Se integran
          corrientes de pensamientos que permiten al usuario SER, HACER, Y SALIR
          A IMAGINAR.<br/>
          Entre más simple sea comprenderte, más fácil será construirte
        </div>
      </div>
    </div>
  );
}
