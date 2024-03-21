const getDAtaId = async (id, userId) => {
  const allData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      postId: id,
      userId: userId,
    }),
  };

  const res = await fetch("http://localhost:3000/api/handler", allData);
  const response = await res.json();
  return response;
};

export default getDAtaId;
