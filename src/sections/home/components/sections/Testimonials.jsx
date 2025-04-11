import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../../swiper-custom.css";
// import VideoPlayer from "../../../../components/videoplayer/VideoPlayer";

const testimonials = [
  {
    body: "La introspección guiada me permitió descubrir cosas sobre mí que desconocía. Mi día a día ha mejorado enormemente.",
    author: {
      name: "Carlos Gómez",
      handle: "carlosgomez",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Antes de tomar este curso, me sentía perdido y sin dirección. Ahora tengo claridad para definir mis prioridades.",
    author: {
      name: "Lucía Herrera",
      handle: "luciaherrera",
      imageUrl:
        "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Este curso fue un antes y un después en mi vida. Me ha ayudado a mejorar mis relaciones y alcanzar un equilibrio interno.",
    author: {
      name: "Marta Sánchez",
      handle: "martasanchez",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Tomar este curso me ayudó a liberar la ansiedad que sentía por el futuro. Ahora puedo enfocarme en el presente.",
    author: {
      name: "Alejandro Ruiz",
      handle: "alejandroruiz",
      imageUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <div
      id="testimonios"
      className="relative bg-white py-24 sm:py-32 h-auto bg-cover bg-center"
      style={{ backgroundImage: "url('/bg/bg-testimonial.jpg')" }}
    >
      <img
        src="/lines/divisor-curva-crema 1.svg"
        alt="Separador curvo"
        className="absolute top-[0rem] left-0 w-full object-cover  max-md:top-[0rem] rotate-180 h-[60px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center pt-28  max-md:pt-0">
        <h2 className="text-base o-s-b text-[#4B5563] max-md:text-fs-16">
          Testimonios
        </h2>
        <p className="mt-2 text-3xl sm:text-4xl m-b text-gray-900 max-md:text-fs-24">
          Historias de transformación <br className="hidden sm:block" /> y
          crecimiento
        </p>
      </div>

      <div className="flex justify-center items-center mx-auto max-w-7xl px-6 lg:px-8 text-center pt-10 sm:pt-20">
        <img
          alt="Fondo decorativo"
          src="banners/home/video.png"
          className="w-auto"
        />
        {/* <VideoPlayer videoSrc="/videos/principal/5b99be2f0eb941979ace84ec47d70c78/ALEX-ASSAD-RETIRO-TEC-CON-SUBTITULOS.m3u8" /> */}
      </div>

      {/* <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <VideoPlayer videoSrc="/videos/principal/5b99be2f0eb941979ace84ec47d70c78/ALEX-ASSAD-RETIRO-TEC-CON-SUBTITULOS.m3u8" />
      </div> */}

      {/* Swiper Carrusel */}
      <div className="relative mt-12 sm:mt-16 max-w-4xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            0: { slidesPerView: 1 }, // 1 slide en móviles
            640: { slidesPerView: 3 }, // 3 slides en pantallas grandes
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-2xl bg-[#EEEADE] p-8 shadow-lg ring-1 ring-gray-900/5 max-md:mx-2 max-md:p-6">
                <blockquote className="text-lg o-s-b text-gray-900 max-md:text-fs-16">
                  <p>{`“${testimonial.body}”`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    alt=""
                    src={testimonial.author.imageUrl}
                    className="w-10 h-10 rounded-full bg-gray-50"
                  />
                  <div>
                    <div className="o-s-b max-md:text-fs-16">
                      {testimonial.author.name}
                    </div>
                    <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                  </div>
                </figcaption>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones de navegación - SOLO EN ESCRITORIO */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden sm:block absolute left-[-90px] top-1/2 -translate-y-1/2 z-10 bg-transparent"
        >
          <img
            src="/icon/arrow-left.svg"
            alt="Flecha izquierda"
            width={50}
            height={50}
          />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden sm:block absolute right-[-90px] top-1/2 -translate-y-1/2 z-10 bg-transparent"
        >
          <img
            src="/icon/arrow-right.svg"
            alt="Flecha derecha"
            width={50}
            height={50}
          />
        </button>
      </div>
    </div>
  );
}
