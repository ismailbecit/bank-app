import { ActionType } from "./actionTypes";
import { Action } from "./actionTypes";
const reducer = (state: number = 0, action: Action): number => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      if (state > 0) {
        return state - action.payload;
      } else return state;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};
export default reducer;
