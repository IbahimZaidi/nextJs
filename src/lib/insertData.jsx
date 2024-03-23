import { revalidatePath } from "next/cache";
import { query } from "../../public/api/query";

export const createPost = async (formData) => {
  "use server";

  const { userId, title, body } = Object.fromEntries(formData);

  const title2 = formData.get("title");

  //   console.log("Hello from the action ", userId, title, body, title2);

  try {
    query({
      query: "insert into posts (userId , title , body ) values(?,?,?) ",
      values: [userId, title, body],
    });
    console.log("Donne Succeffully ");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
