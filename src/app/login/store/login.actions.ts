import { Action } from "@ngrx/store";
import { User } from 'src/app/shared/user.model';

export const LOGIN = "LOGIN";
export const ENTER_USERNAME_PASSWORD = "ENTER_USERNAME_PASSWORD";

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: User) {}
}

export class EnterUsernamePassword implements Action {
  readonly type = ENTER_USERNAME_PASSWORD;

  constructor(public payload: User) {}
}

export type LoginActions = Login | EnterUsernamePassword;
