import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers/index";
import { rootSaga } from "./reducers/bankReducers/banksaga";

const saga = createSagaMiddleware();

export const store = createStore(reducers, applyMiddleware(saga));
saga.run(rootSaga);
