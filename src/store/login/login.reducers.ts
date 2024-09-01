import { createReducer, on } from "@ngrx/store";
import { LoginState } from "./LoginState";
import { login, loginFail, loginSuccess, recoverPassword, recoverPasswordFail, recoverPasswordSuccess } from "./login.actions";
import { AppInitialState } from "../AppInitialState";

const initialState: LoginState = AppInitialState.login;

const reducer = createReducer(initialState,
  on(recoverPassword, currentState => {
    return {
      ...currentState,
      error: null,
      isRecoveredPassword: false,
      isRecoveringpassword: true
    };
  }),
  on(recoverPasswordSuccess, currentState => {
    return {
      ...currentState,
      error: null,
      isRecoveredPassword: true,
      isRecoveringpassword: false
    };
  }),
  on(recoverPasswordFail, (currentState, action) => {
    return {
      ...currentState,
      error: action.error,
      isRecoveredPassword: false,
      isRecoveringpassword: false
    };
  }),
  on(login, currentState => {
    return {
      ...currentState,
      error: null,
      isLoggedIn: false,
      isLoggingIn: true
    };
  }),
  on(loginSuccess, currentState => {
    return {
      ...currentState,
      isLoggedIn: true,
      isLoggingIn: false
    };
  }),
  on(loginFail, (currentState, action) => {
    return {
      ...currentState,
      error: action.error,
      isLoggedIn: false,
      isLoggingIn: false
    };
  })
)

export function loginReducer(state: LoginState, action:any) {
  return reducer(state, action);
}
