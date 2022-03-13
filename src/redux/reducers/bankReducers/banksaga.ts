import { ActionType, DepositAction, WithDrawAction } from "./actionTypes";
import { all, put, takeEvery } from "redux-saga/effects";

function* depositHandler({ payload }: DepositAction) {
  yield put({ type: ActionType.DEPOSIT, payload: payload });
}

function* withdrawHandler({ payload }: WithDrawAction) {
  yield put({ type: ActionType.WITHDRAW, payload: payload });
}

function* bankruptHandler() {
  yield put({ type: ActionType.BANKRUPT });
}

export function* rootSaga() {
  yield all([
    takeEvery(ActionType.DEPOSIT_REQUEST, depositHandler),
    takeEvery(ActionType.WITHDRAW_REQUEST, withdrawHandler),
    takeEvery(ActionType.BANKRUPT_REQUEST, bankruptHandler),
  ]);
}
