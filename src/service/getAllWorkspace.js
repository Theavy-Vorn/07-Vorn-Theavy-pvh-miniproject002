// import { auth } from "@/auth";

import headerToken from "@/lib/headerToken";

export const getAllWorkspace = async () => {
    // console.log("loginservice",email, password);
      const headers = await headerToken()
      const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspaces`, {
        method: "GET",
        headers: headers,
      });
      const data = await res.json();
      console.log("Workspace: ",data);
      // if (!data) {
      //   redirect("/login");
      // }
      return data;
    };