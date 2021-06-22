import BaseService from "./baseService";

export const fetchstationListApi = async () => {
  let data;

  try {
    const response = await BaseService.get("./data.json");
    data = { payload: response };
  } catch (error) {
    console.log("Error: ", error.message);
    data = { payload: [] };
  }
  return data;
};
