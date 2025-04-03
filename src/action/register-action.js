"use server";

import { registerService } from "@/service/register";

export const registerAction = async (formData) => {
  const user = formData.get("user");
  const email = formData.get("email");
  const password = formData.get("password");

  const userData = {
    username: user,
    email: email,
    password: password,
  };
  console.log("form data",user,email,password);

  try {
    const response = await registerService(userData); 

    if (response.status === "100 CONTINUE") { 
      window.location.href = "/workspace";  
      alert(response.message);
    }
  } catch (error) {
    console.error("Error during registration:", error);
    alert("An error occurred during registration.");
  }
};
