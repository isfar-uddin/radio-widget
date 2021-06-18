import { fetchFMList } from "../../services/api/widget";

export const FETCH_FM_LIST = Symbol("FETCH_FM_LIST");

export const getFMList = () => async (dispatch) => {
  const { payload } = await fetchFMList();
  dispatch({
    type: FETCH_FM_LIST,
    payload,
  });
};
