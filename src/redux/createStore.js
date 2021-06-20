import { createStore, applyMiddleware, compose } from "redux";
import { middleware as sagaMiddleware } from "./sagas/middleware";
import { run as runSagas } from "./sagas/run";
import rootReducer from "./reducers";

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

runSagas();
