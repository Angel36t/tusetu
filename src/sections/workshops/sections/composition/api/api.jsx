import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getRecords = async () => {
  try {
    const response = await api.get("/records");
    return response.data;
  } catch (error) {
    console.error("Error fetching records:", error);
    throw error;
  }
};

export const getUserProgress = async (userId) => {
  try {
    const response = await api.get(`/progress/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user progress:", error);
    throw error;
  }
};

export const getUserMainValues = async (userId) => {
  const response = await api.get(`/main-values?user_id=${userId}`);
  return response.data;
};

export const getPrimarySecondaryValues = async (userId) => {
  const response = await api.get(`/primary-secondary-values/user/${userId}`);
  return response.data;
};

export const postMainValues = async (payload) => {
  return api.post("/main-values", payload);
};

export const registerPrimarySecondaryValues = async (userId, values) => {
  const response = await api.post("/primary-secondary-values/register", {
    user_id: userId,
    values,
  });
  return response.data;
};

export const updateProgress = async (progressId, progressData) => {
  return api.put(`/vibration/progress/${progressId}`, {
    progress: progressData,
  });
};

// LIFE HISTORY
export const getLifeHistory = async (userId) => {
  const response = await api.get(`/life-history/${userId}`);
  return response.data;
};

export const saveLifeHistory = async (payload) => {
  const response = await api.post(`/life-history`, payload);
  return response.data;
};

export default api;
