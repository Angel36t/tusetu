import WebinarPlayer from "./webinar/WebinarPlayer";

export default function Methodology() {
  return (
    <div
      id="metodologia"
      className="relative w-full min-h-screen aspect-[640∶789] bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{ backgroundImage: "url('/bg/metodologia.jpg')" }}
    >
      <img
        src="/lines/ivisor-campamento-bottom 1.svg"
        alt=""
        aria-hidden="true"
        className="w-full object-cover block"
      />
      {/* Tu contenido anterior... */}

      <WebinarPlayer />

      {/* Footer o decoración */}
      <div className="max-md:hidden">
        <img
          alt="Fondo decorativo"
          src="/bg/map-brain.svg"
          className="w-full"
        />
      </div>
    </div>
  );
}
