import { query } from "@/src/lib/query";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    if (req.method === "GET") {
      const url = new URL(req.url);
      const userId = url.searchParams.get("userId");

      if (!userId) {
        const thePost = await query({
          query: "SELECT * FROM `posts` WHERE id = ?",
          values: [params.id],
        });

        return NextResponse.json(thePost);
      } else {
        console.log("hello from the userId : ", userId);
        const theUser = await query({
          query: "SELECT * FROM `users` WHERE id = ?",
          values: [userId],
        });

        return NextResponse.json(theUser);
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
