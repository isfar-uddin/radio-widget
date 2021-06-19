import BaseService from "./baseService";

export const fetchstationListApi = async () => {
  const response = await BaseService.get("./data.json");
  const data = { payload: response };
  return data;
};
