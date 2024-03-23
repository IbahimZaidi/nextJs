import { revalidatePath } from "next/cache";
import { query } from "../pages/api/query";

export const deletePost = async (formData) => {
  "use server";

  const { id } = Object.fromEntries(formData);
  //   console.log("Hello from the action ", userId, title, body, title2);

  try {
    query({
      query: "delete from posts where id = ?  ",
      values: [id],
    });
    console.log("Deleted  Succeffully ");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
