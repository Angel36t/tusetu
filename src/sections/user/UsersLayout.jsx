import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="flex items-center justify-between p-6 mb-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-full"
          src={user.avatar}
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
            {user.lastLogin.date} | {user.lastLogin.time}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">Estatus</p>
          <p className="text-sm font-medium">{user.status}</p>
        </div>
        <button className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const UsersLayout = () => {
  const users = [
    {
      name: "Evan Yates",
      email: "evanyates@gmail.com",
      avatar: "https://indiehoy.com/wp-content/uploads/2020/11/dread-mar-i.jpg",
      lastLogin: {
        date: "12/02/2024",
        time: "12:04pm",
      },
      status: "Activo",
    },
    {
      name: "Evan Yates",
      email: "evanyates@gmail.com",
      avatar: "https://indiehoy.com/wp-content/uploads/2020/11/dread-mar-i.jpg",
      lastLogin: {
        date: "12/02/2024",
        time: "12:04pm",
      },
      status: "Activo",
    },
    {
      name: "Evan Yates",
      email: "evanyates@gmail.com",
      avatar: "https://indiehoy.com/wp-content/uploads/2020/11/dread-mar-i.jpg",
      lastLogin: {
        date: "12/02/2024",
        time: "12:04pm",
      },
      status: "Activo",
    },
    {
      name: "Evan Yates",
      email: "evanyates@gmail.com",
      avatar: "https://indiehoy.com/wp-content/uploads/2020/11/dread-mar-i.jpg",
      lastLogin: {
        date: "12/02/2024",
        time: "12:04pm",
      },
      status: "Activo",
    },
  ];

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Usuarios</h1>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
          + Nuevo empleado
        </button>
      </div>
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UsersLayout;
