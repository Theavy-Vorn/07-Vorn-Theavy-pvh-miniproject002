import headerToken from "@/lib/headerToken";

export const addWorkspaceService = async (name) => {
  const headers = await headerToken(); // No need to pass name
  const res = await fetch(`${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspaces`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name }), // Correct request body
  });

  const data = await res.json();
  console.log("Added Workspace:", data);

  return data;
};
