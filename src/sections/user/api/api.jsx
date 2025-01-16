import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getUsersService = async () => {
  const response = await API.get("/users/get");
  return response.data.users;
};

export const createUser = async (userData) => {
  const response = await API.post("/users/create", userData);
  return response.data;
};
