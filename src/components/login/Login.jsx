import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

function Login() {
  const { login, rememberMe, setRememberMe, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/inicio');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'user@example.com' && password === 'password123') {
      login(email, password, rememberMe);
      navigate('/inicio');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f7f9fa]">
      <div
        className="w-full h-[35rem] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('assets/login/background.jpg')" }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold pb-6">ALEXANDER ASSAD</h1>
          <p className="mt-2 pb-6">
            Mi propósito es ayudarte a experimentar tu <br /> Experiencia Humana llena de BIENESTAR y aprovechando todo tu POTENCIAL
          </p>
        </div>
      </div>

      <div className="relative mt-[-12rem] max-w-[26rem] w-full bg-white p-8 shadow-lg rounded-lg">
        <div className="flex justify-center mb-6">
          <img src="assets/login/logo.png" alt="Logo" className="w-26 h-24" />
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-sm text-gray-600">
              Recordar contraseña
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-custom-dark rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-custom-dark focus:ring-opacity-50"
          >
            INGRESAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
