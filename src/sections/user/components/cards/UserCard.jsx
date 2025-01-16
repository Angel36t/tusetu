import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="flex items-center justify-between p-6 mb-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-full"
          src="https://via.placeholder.com/48"
          alt={`${user.name} avatar`}
        />
        <div>
          <h4 className="text-lg font-semibold">{user.name}</h4>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>
      <div className="flex items-center space-x-16">
        <div className="text-center">
          <p className="text-sm text-gray-400">Último inicio de sesión</p>
          <p className="text-sm font-medium">
            {user.last_login
              ? new Date(user.last_login).toLocaleString()
              : "Nunca"}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">Estatus</p>
          <p className="text-sm font-medium">
            {user.status === 1 ? "Activo" : "Inactivo"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
