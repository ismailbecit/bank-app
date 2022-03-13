export interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

export interface WithDrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}
export interface BankruptAction {
  type: ActionType.BANKRUPT;
}

export enum ActionType {
  DEPOSIT = "DEPOSIT",
  DEPOSIT_REQUEST = "DEPOSIT_REQUEST",
  WITHDRAW = "WITHDRAW",
  WITHDRAW_REQUEST = "WITHDRAW_REQUEST",
  BANKRUPT = "BANKRUPT",
  BANKRUPT_REQUEST = "BANKRUPT_REQUEST",
}

export type Action = DepositAction | WithDrawAction | BankruptAction;
