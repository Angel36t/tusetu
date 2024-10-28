import React from "react";

function Login() {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-100">
        {/* Sección de imagen de fondo con alto fijo */}
        <div
          className="w-full h-80 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('assets/login/background.jpg')" }}
        >
          {/* Título y descripción centrados */}
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">ALEXANDER ASSAD</h1>
            <p className="mt-2">
              Mi propósito es ayudarte a experimentar tu Experiencia Humana llena de BIENESTAR y aprovechando todo tu POTENCIAL
            </p>
          </div>
        </div>
  
        {/* Contenedor de login en posición relativa */}
        <div className="relative -mt-20 max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="assets/login/logo.png" alt="Logo" className="w-24 h-24" />
          </div>
  
          {/* Título */}
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">Login</h2>
  
          {/* Formulario */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-600" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              />
            </div>
  
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;
  
