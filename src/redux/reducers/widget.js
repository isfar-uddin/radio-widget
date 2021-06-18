import { FETCH_FM_LIST } from "../actions/widget";

const initialState = {
  fmList: [],
};

export default function widgetReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log("reducer: action: ", action);

  switch (type) {
    case FETCH_FM_LIST: {
      return {
        ...state,
        fmList: payload,
      };
    }
    default:
      return state;
  }
}
