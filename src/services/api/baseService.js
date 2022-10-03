const BASE_URL = "./";

let getHeaders = () => {
  const token = localStorage.getItem("token"); // Token based authorization
  if (token) {
    return {
      "Content-Type": "application/json",
      Authorization: "bearer " + token, //Need to sync with backend for this 'bearer'
    };
  } else {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }
};

const apiCallWithoutData = async (url, method) => {
  try {
    let headers = getHeaders();
    let response = await fetch(url, {
      method,
      headers: headers,
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log("Error: ", JSON.stringify(error));
    return {};
  }
};

const baseService = {
  get: (endPoint) => {
    return apiCallWithoutData(BASE_URL + endPoint, "GET");
  },
};

export default baseService;
