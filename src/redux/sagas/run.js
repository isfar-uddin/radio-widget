import { all } from "redux-saga/effects";
import { middleware } from "./middleware";
import { root as widgetSaga } from "./widget";

function* root() {
  yield all([widgetSaga()]);
}

export function run() {
  middleware.run(root);
}