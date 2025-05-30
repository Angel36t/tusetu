import { validateProspectCode } from "../../../../../api/api";

export default function WebinarCodeValidation({
  formData,
  setFormData,
  accessCode,
  setHasAccess,
}) {
  const formatCodeInput = (value) => {
    let raw = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    raw = raw.slice(0, 6);
    if (raw.length > 3) {
      return `${raw.slice(0, 3)} - ${raw.slice(3)}`;
    }
    return raw;
  };

  const handleChange = (e) => {
    const formatted = formatCodeInput(e.target.value);
    setFormData({ ...formData, codeInput: formatted });
  };

  const handleValidation = async () => {
    const cleanedCode = formData.codeInput.replace(/[^a-zA-Z0-9]/g, "");

    try {
      const result = await validateProspectCode(formData.email, cleanedCode);

      setHasAccess(true);
    } catch (error) {
      console.error("Error validando el código:", error);
      alert("Ocurrió un error al validar el código. Intenta nuevamente.");
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="space-y-6 text-center w-full max-w-[90%]">
        <div className="space-y-2">
          <p className="text-2xl text-gray-800 m-s-b">
            ¡Ya casi estás dentro, {formData.name}!
          </p>
          <p className="text-sm text-gray-700">
            Hemos enviado un código único de acceso al correo{" "}
            <strong>{formData.email}</strong>.
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Por seguridad, este código verifica tu identidad y asegura que solo
            tú puedas acceder al contenido exclusivo del webinar. Si no lo ves
            en tu bandeja de entrada, revisa tu carpeta de spam o promociones.
          </p>
          <p className="text-xs text-gray-500 italic">
            Código válido solo una vez. No compartas este acceso con otras
            personas.
          </p>
        </div>

        <div className="p-2 rounded bg-transparent border-b border-gray-400 text-xl tracking-widest font-mono">
          <input
            type="text"
            value={formData.codeInput}
            onChange={handleChange}
            maxLength={9}
            className="w-full bg-transparent outline-none text-center"
            placeholder="XXX - XXX"
          />
        </div>

        <button
          onClick={handleValidation}
          className="bg-[#EEFD64] text-black px-4 py-2 rounded font-bold w-full"
        >
          VER VIDEO
        </button>
      </div>
    </div>
  );
}
