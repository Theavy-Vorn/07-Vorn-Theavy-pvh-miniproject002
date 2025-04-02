export const loginService = async ({ email, password }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    if (!data) {
      redirect("/login");
    }
    return data;
  };