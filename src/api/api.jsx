import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const loginService = async (email, password) => {
  const response = await API.post("/users/login", { email, password });
  return response.data;
};

export const registerProspect = async (formData) => {
  const response = await API.post("/prospects", formData);
  return response.data;
};

export const validateProspectCode = async (email, code) => {
  const response = await API.post("/prospects/validate-code", {
    email,
    code,
  });
  return response.data;
};
