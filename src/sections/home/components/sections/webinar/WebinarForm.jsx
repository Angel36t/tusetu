import { useState } from "react";
import { registerProspect } from "../../../../../api/api";

export default function WebinarForm({
  formData,
  setFormData,
  setAccessCode,
  setUserRegistered,
}) {

  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await registerProspect(formData);

      const code = Math.floor(100000 + Math.random() * 900000).toString();
      setAccessCode(code);
      setUserRegistered(true);

      console.log("Enviar código a:", formData.email, "Código:", code);
    } catch (error) {
      console.error("Error al registrar prospecto:", error);
      alert("Hubo un problema al registrar tus datos. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const countries = [
    { name: "México", emoji: "🇲🇽" },
    { name: "Argentina", emoji: "🇦🇷" },
    { name: "Colombia", emoji: "🇨🇴" },
    { name: "Chile", emoji: "🇨🇱" },
    { name: "Perú", emoji: "🇵🇪" },
    { name: "España", emoji: "🇪🇸" },
    { name: "Venezuela", emoji: "🇻🇪" },
    { name: "Estados Unidos", emoji: "🇺🇸" },
    { name: "Brasil", emoji: "🇧🇷" },
    { name: "Uruguay", emoji: "🇺🇾" },
    { name: "Ecuador", emoji: "🇪🇨" },
    { name: "Bolivia", emoji: "🇧🇴" },
    { name: "Paraguay", emoji: "🇵🇾" },
    { name: "Costa Rica", emoji: "🇨🇷" },
    { name: "Guatemala", emoji: "🇬🇹" },
    { name: "Honduras", emoji: "🇭🇳" },
    { name: "Panamá", emoji: "🇵🇦" },
    { name: "Cuba", emoji: "🇨🇺" },
    { name: "República Dominicana", emoji: "🇩🇴" },
    { name: "El Salvador", emoji: "🇸🇻" },
    { name: "Otro", emoji: "🌍" },
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
      <p className="text-2xl text-gray-800 m-s-b text-center">
        Unos datos rápidos y estarás dentro
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={(e) => {
              const value = e.target.value;
              // Solo letras y espacios
              const onlyLetters = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
              setFormData({ ...formData, name: onlyLetters });
            }}
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Género
          </label>
          <select
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <option value="">Selecciona tu género</option>
            <option value="female">Femenino</option>
            <option value="male">Masculino</option>
            <option value="other">Otro</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">
            Correo electrónico
          </label>
          <input
            type="email"
            placeholder="ejemplo@correo.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            pattern="^[\w\.-]+@[\w\.-]+\.\w{2,}$"
            title="Introduce un correo válido, por ejemplo: ejemplo@correo.com"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Edad</label>
          <input
            type="number"
            placeholder="Tu edad"
            value={formData.age}
            onChange={(e) => {
              const value = e.target.value;
              const numericValue = parseInt(value, 10);
              if (value === "" || (numericValue >= 0 && numericValue <= 100)) {
                setFormData({ ...formData, age: value });
              }
            }}
            required
            min="0"
            max="100"
            maxLength="3"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-semibold text-gray-700">País</label>
          <select
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <option value="">🌍 Selecciona tu país</option>
            {countries.map((c) => (
              <option key={c.name} value={c.name}>
                {c.emoji} {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex justify-center items-center bg-[#EEFD64] hover:bg-yellow-300 text-black px-4 py-3 rounded font-bold text-lg transition ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? (
          <div className="flex items-center space-x-2">
            <span className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-5 w-5 animate-spin border-t-black"></span>
            <span>ENVIANDO...</span>
          </div>
        ) : (
          "ENVIAR Y RECIBIR CÓDIGO"
        )}
      </button>
    </form>
  );
}
