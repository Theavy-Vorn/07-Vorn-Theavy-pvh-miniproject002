"use server";

import { addWorkspaceService } from "@/service/addAllWorkspace";
import { redirect } from "next/navigation";

export const addAction = async (formData) => {
  const name = formData.get("name"); // Corrected form data retrieval

  console.log("Form Data:", name);

  const result = await addWorkspaceService(name);

  if (result?.error) {
    console.log("Error:", result.error);
    return;
  }

  redirect("/workspace"); // Redirect after success
};
