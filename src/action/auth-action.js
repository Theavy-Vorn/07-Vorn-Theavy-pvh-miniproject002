"use server";

import { signIn } from "@/auth";
// import { redirect } from "next/navigation";

export const loginAction = async (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  
  console.log("form data",email,password);
  await signIn("credentials",{
    email,
    password,
    redirectTo: "/workspace"
    // redirect:true
  });
  // redirect("/");
};