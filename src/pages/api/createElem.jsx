import { query } from "./query";

const createElem = async (req, res) => {
  const params = req.body.data;
  try {
    const posts = await query({
      query: "insert into posts (body , title , userId ) VALUES (?, ? , ?)  ",
      values: [params.body, params.title, params.userId],
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export default createElem;
