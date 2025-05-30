import { useState } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import WebinarVideo from "./WebinarVideo";

// import WebinarVideo from "./WebinarVideo";
import video1 from "../../../../../components/video/vibration/instruccion.mp4";
import video2 from "../../../../../components/video/vibration/instruccion.mp4";
import video3 from "../../../../../components/video/vibration/instruccion.mp4";

const webinars = [
  {
    id: 1,
    title: "Video introductorio explicando 3 videos y registro.",
    date: "Lunes 07 de abril del 2025",
    duration: "1 minuto",
    videoFile: video1,
    description:
      "En este webinar explico la teoría básica de mi Libro “El Camino del Pionero...",
  },
  {
    id: 2,
    title: "Emprendiendo como Filosofia de V.I.D.A",
    date: "Lunes 07 de abril del 2025",
    duration: "40 minutos",
    videoFile: video2,
    description:
      "En este webinar explico la teoria básica de mi Libro “El Camino del Pionero: Emprendiendo como Filosofía de V.I.D.A.” <br/> Hablo de los 3 Niveles de Emprendimiento que aplico en mi vida, y como usar modelos mentales simplificados para ayudarte a generar mayor Bienestar tanto profesional, como personalmente.",
  },
  {
    id: 3,
    title: "Autoestima",
    date: "Lunes 07 de abril del 2025",
    duration: "10 minutos",
    videoFile: video3,
    description: "Comprender lo que integra la Autoestima es esencial, ya que es la manera de enfocarte en ella y fortalecerla. <br/> Utilizando 5 conceptos simplificados pongo a tu disposición la formula del Autoestima, para que asi la domines y puedas saber como siempre valorarte y ESTIMARTE.",
  },
  {
    id: 4,
    title: "Amor Propio",
    date: "Lunes 07 de abril del 2025",
    duration: "5 minutos",
    videoFile: video3,
    description: "Cada quien define de su manera el Amor propio, pero alguna vez haz pensado que es lo opuesto al Amor? <br/> En este video te expongo mi perspectiva, buscando que analices tu comportamiento a ver si no estas evitando Amarte.",
  },
  {
    id: 5,
    title: "Introducción al Campamento Digital TÚ SÉ TÚ",
    date: "Lunes 07 de abril del 2025",
    duration: "10 minutos",
    videoFile: video3,
    description: "Te expongo un panorama a grandes rasgos de lo que veras y a lo que te expondras en mi taller enfocado en Claridad Personal , Autenticidad, y lograr vivir tu BIENESTAR.",
  },
];

export default function WebinarPlayer() {
  const [selectedWebinar, setSelectedWebinar] = useState(webinars[0]);

  return (
    <div className="w-full py-10 px-4 sm:px-6 md:px-8 bg-transparent text-white mx-auto max-w-7xl py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl m-s-b mb-10 uppercase tracking-wider">
          Webinars para tu crecimiento
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-16 items-start justify-center">
          {/* Left - Video/Form/Access */}
          <div className="w-full lg:w-7/12">
            <WebinarVideo selectedWebinar={selectedWebinar} />
          </div>

          {/* Right - Lista de Webinars */}
          <div className="w-full lg:w-5/12 space-y-4 max-h-[38rem] overflow-y-auto px-1">
            {webinars.map((webinar) => (
              <div
                key={webinar.id}
                onClick={() => setSelectedWebinar(webinar)}
                className={`flex gap-3 p-3 rounded-lg cursor-pointer transition ${
                  selectedWebinar.id === webinar.id
                    ? "bg-[#FDF9ED] text-black font-bold"
                    : "bg-white/5 text-white hover:bg-white/20"
                }`}
              >
                <div className="w-16 h-12 rounded overflow-hidden bg-black/30 flex-shrink-0">
                  <video
                    poster="/video/photo-miniatura.png"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[10px]">{webinar.date}</p>
                  <h4 className="text-sm font-medium leading-tight">{webinar.title}</h4>
                  <p className="text-[11px] text-gray-300 flex items-center gap-1">
                    <ClockIcon className="h-3.5 w-3.5 text-gray-100" />
                    {webinar.duration}
                  </p>
                </div>
              </div>
            ))}
            <button className="block text-sm text-white underline hover:text-[#EEFD64] mt-6">
              MÁS WEBINARS PRÓXIMAMENTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
