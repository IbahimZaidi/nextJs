const getAllData = async (id) => {
  const allData = {
    methode: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (!id) {
    const res = await fetch("http://localhost:3000/api/handler", allData);
    const response = await res.json();
    return response;
  }

  const res = await fetch("http://localhost:3000/api/handler", allData);
  const response = await res.json();
  return response;

  // console.log("##########################");
  // console.log(response);
  // console.log("##########################");
};

export default getAllData;
