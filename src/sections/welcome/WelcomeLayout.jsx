import { useEffect, useState } from "react";

import BadgeList from "./BadgeList";
import { WorkshopCard } from "./Workshops";
import { useUser } from "../../context/UserContext";
import TopBarHome from "../../components/sidebar/TopBarHome";


export default function WelcomeLayout() {
  const { user } = useUser();

  const motivationalQuotes = [
    {
      quote:
        "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
      author: "Robert Collier",
    },
    {
      quote: "La única forma de hacer un gran trabajo es amar lo que haces.",
      author: "Steve Jobs",
    },
    {
      quote: "No importa lo lento que vayas, siempre y cuando no te detengas.",
      author: "Confucio",
    },
    {
      quote:
        "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
      author: "Albert Schweitzer",
    },
    {
      quote: "La mejor manera de predecir el futuro es creándolo.",
      author: "Peter Drucker",
    },
    {
      quote: "La única limitación es la que te impones a ti mismo.",
      author: "Napoleón Hill",
    },
    {
      quote: "La perseverancia es la madre del éxito.",
      author: "Napoleón Bonaparte",
    },
    {
      quote:
        "El fracaso es simplemente la oportunidad de comenzar de nuevo, esta vez con más inteligencia.",
      author: "Henry Ford",
    },
    {
      quote:
        "No tengas miedo de renunciar a lo bueno para ir a por lo grandioso.",
      author: "John D. Rockefeller",
    },
    { quote: "Si puedes soñarlo, puedes hacerlo.", author: "Walt Disney" },
    {
      quote: "La vida es 10% lo que te ocurre y 90% cómo reaccionas ante ello.",
      author: "Charles R. Swindoll",
    },
    {
      quote: "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
      author: "Winston Churchill",
    },
    {
      quote: "La disciplina es el puente entre metas y logros.",
      author: "Jim Rohn",
    },
    {
      quote: "No mires el reloj; haz lo que él hace. Sigue avanzando.",
      author: "Sam Levenson",
    },
    {
      quote: "Tu actitud, no tu aptitud, determinará tu altitud.",
      author: "Zig Ziglar",
    },
  ];

  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    setRandomQuote(motivationalQuotes[randomIndex]);
  }, []);

  return (
    <>
    <TopBarHome/>
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <div className="absolute top-8 left-8 flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-bold text-gray-800">
            Hola, <span className="text-blue-500">{user?.name}!</span>
          </h1>
          <img
            src="/assets/badges/gold-medal.png"
            alt="Logo"
            className="w-[2rem] h-[3rem] object-contain"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-lg italic text-gray-600">"{randomQuote.quote}"</p>
          <p className="text-sm text-gray-500 mt-1">- {randomQuote.author}</p>
        </div>
      </div>

      <WorkshopCard />
      <BadgeList />
    </div>
    </>
  );
}
