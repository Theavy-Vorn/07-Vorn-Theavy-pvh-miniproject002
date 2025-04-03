// // import { auth } from "@/auth";

// import headerToken from "@/lib/headerToken";

// export const addAllWorkspace = async () => {
//     // console.log("loginservice",email, password);
//       const headers = await headerToken(user)
//       const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspaces`, {
//         method: "POST",
//         headers: headers,
//         body: JSON.stringify(user),
//       });
//       const data = await res.json();
//       console.log("Workspace: ",data);
//       // if (!data) {
//       //   redirect("/login");
//       // }
//       return data;
//     };