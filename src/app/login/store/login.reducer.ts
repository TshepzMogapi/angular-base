import * as LoginActions from "./login.actions";

export interface State {
  username: string;
  password: string;
}
const initialState: State = {
  username: "tshepzmogapi@gmail.com",
  password: "Password468",
};

export function loginReducer(
  state: State = initialState,
  action: LoginActions.LoginActions
) {
  switch (action.type) {
    case LoginActions.ENTER_USERNAME_PASSWORD:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };
    case LoginActions.UPDATE_PASSWORD:
      let newPassword = action.payload.password;
      return {
        ...state,
        username: state.username,
        password: newPassword
      };
    default:
      return state;
  }
}
