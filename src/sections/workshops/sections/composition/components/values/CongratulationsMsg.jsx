import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import React, { useEffect, useState } from "react";

export default function CongratulationsMsg() {
  const [showConfetti, setShowConfetti] = useState(true);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showConfetti && <Confetti width={width} height={height} />}
      <h2 className="text-2xl font-bold text-center mb-4 text-grn-100">
        ¡Bien hecho! Has guardado tus 10 valores principales.
      </h2>
      <p className="text-gray-500 text-center mb-6">
        Has identificado con claridad los 10 valores que son más importantes
        para ti.
      </p>
      <div className="grid justify-center">
        <img
          src="/assets/composition/valueimg.jpg"
          alt="Logo"
          className="w-[200px] h-[200px] rounded-md"
        />
      </div>
    </>
  );
}
