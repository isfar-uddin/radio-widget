import { FETCH_STATION_LIST } from "redux/actions/widget";

const initialState = {
  stationList: [],
};

export default function widgetReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_STATION_LIST: {
      return {
        ...state,
        stationList: payload,
      };
    }
    default:
      return state;
  }
}
