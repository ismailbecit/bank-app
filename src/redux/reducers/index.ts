import { combineReducers } from "redux";

import bankReducers from "./bankReducers/bankReducers";

const reducers = combineReducers({
  bank: bankReducers,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
