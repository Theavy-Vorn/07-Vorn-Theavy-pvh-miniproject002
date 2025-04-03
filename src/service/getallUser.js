// import { auth } from "@/auth";

import headerToken from "@/lib/headerToken";

export  const getAllUser = async () => {
        const headers = await headerToken()
        const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/user`, {
        method: "GET",
        headers: headers,
      });
      const data = await res.json();
      console.log("get user: ",data);

      return data;
    };