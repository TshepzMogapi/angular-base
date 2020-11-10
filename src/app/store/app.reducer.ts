import * as fromLogin from '../login/store/login.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  login: fromLogin.State;
}
export const appReducer: ActionReducerMap<AppState> = {
  login: fromLogin.loginReducer
}
