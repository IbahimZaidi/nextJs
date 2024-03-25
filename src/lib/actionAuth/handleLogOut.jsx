"use server";
import { signOut } from "@/src/lib/auth";

export const handleLogOut = async () => {
  await signOut();
};
