import BaseService from "./baseService";

export const fetchFMList = async () => {
  const response = await BaseService.get("./data.json");
  const data = { payload: response };
  return data;
};
