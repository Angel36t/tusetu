export const loginService = async (email, password) => {
    try {
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error("Login failed");
      }
  
      const data = await response.json();
      return data; // Devuelve el token u otra información importante
    } catch (error) {
      console.error("Login error:", error);
      return null;
    }
  };
  