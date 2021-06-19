import { fetchstationListApi } from "services/api/widget";

export const FETCH_STATION_LIST = Symbol("FETCH_STATION_LIST");

export const fetchstationList = () => async (dispatch) => {
  const { payload } = await fetchstationListApi();
  dispatch({
    type: FETCH_STATION_LIST,
    payload,
  });
};
