import { all, takeLatest, put } from "redux-saga/effects";
import { REQUEST_STATION_LIST, FETCH_STATION_LIST } from "redux/actions/widget";
import { fetchstationListApi } from "services/api/widget";

function* watchStationList() {
  const { payload } = yield fetchstationListApi();
  yield put({
    type: FETCH_STATION_LIST,
    payload,
  });
}

//Take the latest api call
export function* root() {
  yield all([
    yield takeLatest(
      REQUEST_STATION_LIST,
      watchStationList
    ),
  ]);
}
