import { createStore, applyMiddleware, compose } from "redux";
import { middleware as sagaMiddleware } from "./sagas/middleware";
import { run as runSagas } from "./sagas/run";
import rootReducer from "./reducers";

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

runSagas();
