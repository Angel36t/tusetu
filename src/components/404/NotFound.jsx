import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Página no encontrada</p>
      <Link to="/inicio" className="text-blue-500 hover:underline">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
