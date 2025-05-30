import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../../swiper-custom.css";
import { testimonials } from "../../../../utils/testimonials";

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
    setIsOpen(false);
  };

  return (
    <div
      id="testimonios"
      className="relative bg-white py-24 sm:py-32 h-auto bg-cover bg-center"
      style={{ backgroundImage: "url('/bg/bg-testimonial.jpg')" }}
    >
      <img
        src="/lines/divisor-curva-crema 1.svg"
        alt="Separador curvo"
        className="absolute top-0 left-0 w-full object-cover rotate-180 h-[60px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center pt-28 max-md:pt-0">
        <h2 className="text-base o-s-b text-[#4B5563] max-md:text-fs-16">Testimonios</h2>
        <p className="mt-2 text-3xl sm:text-4xl m-b text-gray-900 max-md:text-fs-24">
          Historias de transformación <br className="hidden sm:block" /> y crecimiento
        </p>
      </div>

      <div className="flex justify-center items-center mx-auto max-w-7xl px-6 lg:px-8 text-center pt-10 sm:pt-20">
        <img alt="Fondo decorativo" src="banners/home/video.png" className="w-auto" />
      </div>

      <div className="relative mt-12 sm:mt-16 max-w-4xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="rounded-2xl bg-[#EEEADE] p-8 shadow-lg ring-1 ring-gray-900/5 max-md:mx-2 max-md:p-6 min-h-[320px] flex flex-col justify-between cursor-pointer"
                onClick={() => openModal(testimonial)}
              >
                <blockquote className="text-lg o-s-b text-gray-900 max-md:text-fs-16 line-clamp-6">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: `“${testimonial.body}”`,
                    }}
                  />
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img
                    alt=""
                    src={testimonial.author.imageUrl}
                    className="w-10 h-10 rounded-full bg-gray-50 object-cover"
                  />
                  <div>
                    <div className="o-s-b max-md:text-fs-16 m-m">{testimonial.author.name}</div>
                    <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                  </div>
                </figcaption>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navegación - escritorio */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="hidden sm:block absolute left-[-90px] top-1/2 -translate-y-1/2 z-10 bg-transparent"
        >
          <img src="/icon/arrow-left.svg" alt="Flecha izquierda" width={50} height={50} />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="hidden sm:block absolute right-[-90px] top-1/2 -translate-y-1/2 z-10 bg-transparent"
        >
          <img src="/icon/arrow-right.svg" alt="Flecha derecha" width={50} height={50} />
        </button>
      </div>

      {/* Modal personalizado */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-[#EEEADE] p-6 rounded-2xl max-w-xl w-full relative mx-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              ×
            </button>
            <h3 className="text-lg font-semibold text-gray-900">
              {selectedTestimonial?.author.name}
            </h3>
            <blockquote className="mt-4 text-gray-900 text-base sm:text-lg">
              <p
                dangerouslySetInnerHTML={{
                  __html: `“${selectedTestimonial?.body}”`,
                }}
              />
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-x-4">
              <img
                alt=""
                src={selectedTestimonial?.author.imageUrl}
                className="w-10 h-10 rounded-full bg-gray-50 object-cover"
              />
              <div>
                <div className="font-semibold">{selectedTestimonial?.author.name}</div>
                <div className="text-gray-600">{`@${selectedTestimonial?.author.handle}`}</div>
              </div>
            </figcaption>
          </div>
        </div>
      )}
    </div>
  );
}
