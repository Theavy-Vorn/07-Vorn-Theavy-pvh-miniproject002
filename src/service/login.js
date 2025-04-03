import { redirect } from "next/navigation";

export const loginService = async (user) => {
  // console.log("loginservice",email, password);
    const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    // if (!data) {
    //   redirect("/login");
    // }
    return data;
  };