import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function PriceComparisonMobile({ tiers }) {
  return (
    <div
      className="relative bg-white py-24 p-10 h-[90rem] bg-cover bg-center bg-no-repeat max-md:h-[60rem]"
      style={{ backgroundImage: "url('/bg/pricing-section-background 1.svg')" }}
    >

      <img
        src="/lines/divisor-curva-crema 1.svg"
        alt="Separador curvo"
        className="absolute bottom-[89rem] left-0 w-full h-[4rem] object-cover  max-md:bottom-[59.8rem]"
      />

      <h3 className="text-balance pb-4 text-3xl o-s-b text-black tracking-tight text-center max-md:text-fs-16 max-md:pb-0">
        Planes
      </h3>
      <h1 className="text-balance text-4xl p-m text-black tracking-tight text-center max-md:text-fs-28 max-md:p-0">
        campamento digital
      </h1>
      <h1 className="text-balance p-4 text-4xl p-m text-[#33AAC5] tracking-tight text-center max-md:text-fs-24 max-md:p-2">
        tú se tú
      </h1>
      

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="mt-8"
      >
        {tiers.map((tier) => (
          <SwiperSlide key={tier.name}>
            <div className="price-card rounded-[2rem] shadow-md ring-1 ring-black/5">
              <div className="rounded-3xl bg-[#EEEADE] p-6 pb-8 max-md:h-[38rem]">
                <h2
                  className="text-xl text-center text-black o-b"
                  dangerouslySetInnerHTML={{ __html: tier.name }}
                ></h2>
                <p className="mt-2 text-sm text-gray-600 text-center o-b">
                  {tier.des}
                </p>
                <p className="text-sm text-gray-600 text-center">
                  {tier.description}
                </p>
                <div className="mt-8 flex items-center gap-4 justify-center">
                  <div className="text-4xl text-gray-950 m-m">
                    {tier.priceMonthly}
                  </div>
                  <div className="text-sm text-gray-600 m-m">
                    <p>USD</p>
                    <p>por mes</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 text-center o-b">
                  {tier.module}
                </p>
                <div className="mt-8">
                  <a
                    href={tier.href}
                    className="w-full inline-block rounded-md bg-[#DAE562] px-3.5 py-2 text-center text-sm text-black shadow-sm hover:bg-[#d5e05b] o-b"
                  >
                    {tier.btn}
                  </a>
                </div>
                <div className="mt-8">
                  <h3 className="text-sm o-s-b text-gray-950">{tier.high}</h3>
                  <ul className="mt-3 space-y-3">
                    {tier.highlights.map((highlight) => (
                      <li
                        key={highlight.description}
                        className="flex items-start gap-4 text-sm text-gray-600"
                      >
                        <span className="inline-flex h-4 items-center">
                          <img src="/icon/circle-check-solid.svg" alt="check" />
                        </span>
                        {highlight.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
