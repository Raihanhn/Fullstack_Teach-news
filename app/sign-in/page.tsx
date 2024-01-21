import SignInBtns from "@/components/SignInBtns";
import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/dashboard");
  }
  return <SignInBtns />;
}
