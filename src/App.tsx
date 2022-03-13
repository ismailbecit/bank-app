import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import { ActionType } from "./redux/reducers/bankReducers/actionTypes";

function App() {
  const money = useSelector((state: RootState) => state.bank);
  const dispatch = useDispatch();
  return (
    <div className="app">
      <div className="app_modal">
        {money}
        <button
          className="app_button"
          onClick={() => {
            dispatch({ type: ActionType.DEPOSIT_REQUEST, payload: 1000 });
          }}
        >
          Deposit
        </button>

        <button
          className="app_button"
          onClick={() => {
            dispatch({ type: ActionType.WITHDRAW_REQUEST, payload: 1000 });
          }}
        >
          WithDraw
        </button>

        <button
          className="app_button"
          onClick={() => {
            dispatch({ type: ActionType.BANKRUPT_REQUEST });
          }}
        >
          BankRupt
        </button>
      </div>
    </div>
  );
}

export default App;
