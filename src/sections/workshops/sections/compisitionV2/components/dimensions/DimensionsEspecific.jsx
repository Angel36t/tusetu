import { useState, useEffect, useRef } from "react";

function App() {
  const [data, setData] = useState({
    areaBasica: "",
    faceta: "",
    representa: "",
    herramientas: [],
    alegrias: [],
    sentimientos: "",
  });

  const [messages, setMessages] = useState([
    { sender: "bot", text: "¿Qué representa esta faceta?" },
  ]);
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const chatRef = useRef(null);

  // Preguntas y campos asociados
  const preguntas = [
    "¿Qué representa esta faceta?",
    "¿Cuál es el área básica?",
    "¿Cuál es la faceta?",
    "¿Qué herramientas te brinda esta faceta?",
    "¿Qué alegrías te permite vivir esta faceta?",
    "¿Cómo te hace sentir vivirlas y serlo?",
  ];

  const campos = [
    "representa",
    "areaBasica",
    "faceta",
    "herramientas",
    "alegrias",
    "sentimientos",
  ];

  // Se encarga de actualizar el estado al escribir en los textareas
  const handleInput = (e, index = null) => {
    const field = campos[step];
    // Si es campo de lista, modificamos el item correspondiente
    if (field === "herramientas" || field === "alegrias") {
      if (index !== null) {
        // Actualiza un ítem existente en la lista
        const updatedList = [...data[field]];
        updatedList[index] = e.target.value;
        setData({ ...data, [field]: updatedList });
      } else {
        // Caso raro: si quieres usar 'inputValue' para un nuevo ítem
        setInputValue(e.target.value);
      }
    } else {
      // Para campos simples
      setInputValue(e.target.value);
    }
  };

  // Agregar un nuevo ítem vacío a la lista de "herramientas" o "alegrias"
  const addListItem = (field) => {
    if (data[field].length < 7) {
      setData({ ...data, [field]: [...data[field], ""] });
    }
  };

  // Eliminar un ítem de la lista
  const removeListItem = (index, field) => {
    const updatedList = [...data[field]];
    updatedList.splice(index, 1);
    setData({ ...data, [field]: updatedList });
  };

  // Función principal para manejar el botón "Enviar" o "Finalizar"
  const sendMessage = () => {
    const field = campos[step];

    // Si es un campo de lista (herramientas o alegrias):
    if (field === "herramientas" || field === "alegrias") {
      // Unimos todos los ítems en un solo string
      const userResponseList = data[field].filter((item) => item.trim() !== "");
      // Si no hay nada en la lista, no hacemos nada
      if (userResponseList.length === 0) return;

      // Armamos la cadena con comas
      const userResponseString = userResponseList.join(", ");

      // Mostramos en el chat la respuesta del usuario
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: userResponseString },
      ]);

      // (Opcional) Podrías mostrar un mensaje del bot con la lista final si gustas
      // setMessages((prevMessages) => [
      //   ...prevMessages,
      //   {
      //     sender: 'bot',
      //     text: `Lista final de ${field}: ${userResponseString}`
      //   }
      // ]);
    } else {
      // Para los demás campos (texto simple)
      const userResponse = inputValue.trim();
      // Si está vacío, no hacemos nada
      if (!userResponse) return;

      // Guardamos en 'data' y mostramos la respuesta
      setData((prevData) => ({ ...prevData, [field]: userResponse }));
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: userResponse },
      ]);
    }

    // Limpiamos el inputValue
    setInputValue("");

    // Pasamos a la siguiente pregunta con un delay
    if (step < preguntas.length - 1) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: preguntas[step + 1] },
        ]);
        setStep(step + 1);
        setIsTyping(false);
        scrollToBottom();
      }, 1500);
    } else if (isComplete()) {
      // Si ya completamos todo, mensaje final
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            text: "¡Felicidades! Has completado todas las respuestas.",
          },
        ]);
        setIsTyping(false);
        scrollToBottom();
      }, 1500);
    }
  };

  // Función para scrollear hasta el fondo del chat
  const scrollToBottom = () => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  // Verifica si se han completado todos los campos (simples y de lista)
  const isComplete = () => {
    return campos.every((field) => {
      if (Array.isArray(data[field])) {
        return (
          data[field].length > 0 &&
          data[field].every((item) => item.trim() !== "")
        );
      }
      return data[field].trim() !== "";
    });
  };

  // Cada vez que cambien los mensajes, scrolleamos al fondo
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Permite saltar a una pregunta en particular desde la tabla de la izquierda
  const goToStep = (index) => {
    setStep(index);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: preguntas[index] },
    ]);
    scrollToBottom();
  };

  return (
    <div className="h-screen bg-gray-100 flex">
      {/* Panel Izquierdo: Tabla de Respuestas */}
      <div className="w-1/2 bg-white shadow-lg p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 border-b pb-2">
          Tabla de Respuestas
        </h2>
        <div className="flex flex-col gap-6">
          {preguntas.map((pregunta, index) => (
            <div key={index} className="border-b pb-4">
              <h3
                className="font-semibold text-blue-500 hover:underline cursor-pointer mb-2"
                onClick={() => goToStep(index)}
              >
                {pregunta}
              </h3>
              <div className="text-gray-700">
                {campos[index] === "herramientas" ||
                campos[index] === "alegrias" ? (
                  <ul className="list-disc ml-6">
                    {data[campos[index]].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{data[campos[index]]}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Panel Derecho: Chat */}
      <div className="w-1/2 bg-gray-50 flex flex-col">
        <div
          ref={chatRef}
          className="flex-grow overflow-y-auto p-4"
          style={{ maxHeight: "calc(100vh - 120px)" }}
        >
          {/* Mostramos cada mensaje */}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "bot" ? "justify-start" : "justify-end"
              } mb-4`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs shadow ${
                  message.sender === "bot"
                    ? "bg-gray-200 text-gray-800"
                    : "bg-blue-500 text-white"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {/* Indicador de "typing" cuando el bot está pensando */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800">
                <div className="flex gap-1">
                  <span className="animate-pulse">.</span>
                  <span className="animate-pulse delay-150">.</span>
                  <span className="animate-pulse delay-300">.</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Área de input para las respuestas */}
        <div className="p-4 bg-white border-t">
          {/* Si es un paso con campo de lista, mostramos cada ítem actual más la opción de agregar/eliminar */}
          {step === 3 || step === 4 ? (
            <>
              {data[campos[step]].map((item, index) => (
                <div key={index} className="flex items-center mb-2">
                  <textarea
                    value={item}
                    onChange={(e) => handleInput(e, index)}
                    className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500"
                    rows="2"
                  />
                  <button
                    onClick={() => removeListItem(index, campos[step])}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
              {/* Botón para agregar más textarea (hasta 7, por ejemplo) */}
              {data[campos[step]].length < 7 && (
                <button
                  onClick={() => addListItem(campos[step])}
                  className="text-blue-500 hover:text-blue-700"
                >
                  + Agregar más
                </button>
              )}
            </>
          ) : (
            // Para campos de texto simple
            <textarea
              value={inputValue}
              onChange={handleInput}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500"
              rows="3"
            />
          )}

          {/* Botón para enviar la respuesta */}
          <button
            onClick={sendMessage}
            className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {step < preguntas.length - 1 ? "Enviar" : "Finalizar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
