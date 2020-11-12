import { Action } from "@ngrx/store";

export const ENTER_USERNAME_PASSWORD = "ENTER_USERNAME_PASSWORD";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const UPDATE_USERNAME = "UPDATE_USERNAME";

export class EnterUsernamePassword implements Action {
  readonly type = ENTER_USERNAME_PASSWORD;

  constructor(public payload: {username: string, password: string}) {}
}

export class UpdatePassword implements Action {
  readonly type = UPDATE_PASSWORD;

  constructor(public payload: {password: string}) {}
}

export class UpdateUsername implements Action {
  readonly type = UPDATE_USERNAME;

  constructor(public payload: {username: string}) {}
}

export type LoginActions =
  | EnterUsernamePassword
  | UpdatePassword
  | UpdateUsername;
