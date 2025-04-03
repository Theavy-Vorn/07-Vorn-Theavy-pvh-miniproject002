export const registerService = async (user) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }
  
      return data; // Return the response data
    } catch (error) {
      console.error("Error in registration service:", error);
      throw error; // Throw error for higher-level handling
    }
  };
  