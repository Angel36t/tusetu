import React, { useState, useEffect } from "react";

import { getUsersService } from "./api/api";
import UserCard from "./components/cards/UserCard";
import CreateUserDialog from "./components/dialog/CreateUserDialog";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const UsersLayout = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const usersData = await getUsersService();
      setUsers(usersData);
      setFilteredUsers(usersData);
    } catch (error) {
      console.error("Error al obtener usuarios:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserCreated = async () => {
    await fetchUsers();
    setIsDialogOpen(false);
  };

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [searchTerm, users]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="p-6 bg-blue-50 min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Cargando usuarios...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Usuarios</h1>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => setIsDialogOpen(true)}
        >
          + Nuevo usuario
        </button>
      </div>

      <div className="relative mb-6 w-[500px]">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Buscar usuarios por nombre o email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 pl-10 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {currentUsers.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}

      {/* Paginación */}
      <div className="flex justify-center mt-4">
        {Array.from(
          { length: Math.ceil(filteredUsers.length / usersPerPage) },
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 mx-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>

      <CreateUserDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onUserCreated={handleUserCreated}
      />
    </div>
  );
};

export default UsersLayout;
