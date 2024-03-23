const createPost = async (searchParams) => {
  const createPost = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: searchParams,
    }),
  };

  const res = await fetch("http://localhost:3000/api/createElem", createPost);
};

export default createPost;
