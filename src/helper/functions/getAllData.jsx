const getAllData = async () => {
  const allData = {
    methode: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await fetch("http://localhost:3000/api/handler", allData);

  const response = await res.json();

  // console.log("##########################");
  // console.log(response);
  // console.log("##########################");

  return response;
};

export default getAllData;
