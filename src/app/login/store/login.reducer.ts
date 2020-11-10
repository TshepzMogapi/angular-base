import { User } from "src/app/shared/user.model";
import * as LoginActions from "./login.actions";

export interface State {
  user: User;
}
const initialState: State = {
  user: new User("", ""),
};

export function loginReducer(
  state = initialState,
  action: LoginActions.LoginActions
) {
  switch (action.type) {
    case LoginActions.ENTER_USERNAME_PASSWORD:
      const user = new User(action.payload.email, action.payload.password);
      return {
        ...state,
        user: user
      }

    default:
      return state;
  }
}
