import { query } from "./query";

const getAllPosts = async (req, res) => {
  "use server";

  try {
    if (req.method === "GET") {
      const allPosts = await query({
        query: "select * from posts  ",
        values: [],
      });

      console.log(allPosts);
      console.log("Done Succeffully ");

      res.status(200).json(allPosts);
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export default getAllPosts;
