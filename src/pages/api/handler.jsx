import { query } from "./query";

const handler = async (req, res) => {
  try {
    if (req.method === "GET") {
      const posts = await query({
        query: "SELECT * FROM `posts` WHERE 1",
        values: [],
      }); // the posts it is the results returned by query({}) function

      //
      //
      const users = await query({
        query: "SELECT * FROM `users` WHERE 1",
        values: [],
      });
      ///
      ///
      //

      res.status(200).json({ users: users, posts: posts }); // return in the response a json with value of posts;

      // because the api/data it is a SSR and must use res.status().json... to return to user
      // somthing
    } else {
      res.status(405).send("Method Not Allowed");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export default handler;