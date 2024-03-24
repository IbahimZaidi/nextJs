import { query } from "@/src/lib/query";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");

    console.log(url);

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
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await query({
      query: "DELETE FROM `posts` WHERE id = ?",
      values: [params.id],
    });

    // Send a success response after deleting the post
    return NextResponse.json({
      message: `Post with ID ${params.id} !!!!!!!!!!!!!`,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
export const POST = async (req, { params }) => {
  try {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    const userId = searchParams.get("userId");
    const title = searchParams.get("title");
    const body = searchParams.get("body");

    await query({
      query: "INSERT INTO `posts` (userId, title, body) VALUES (?, ?, ?)",
      values: [userId, title, body],
    });

    // Send a success response after deleting the post
    return NextResponse.json({
      message: `Post added successfully`,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
