import { Action, createReducer, on } from "@ngrx/store";
import { AppInitialState } from "../AppInitialState";
import { RegisterState } from "./RegisterState";
import { register, registerFail, registerSuccess } from "./register.actions";

const initialState = AppInitialState.register;
const reducer = createReducer(initialState,
    on(register, (state) => {
        return {
            ...state,
            error: null,
            isRegistering: true,
            isRegistered: false
        }
    }),
    on(registerSuccess, state => {
        return {
            ...state,
            isRegistering: false,
            isRegistered: true
        }
    }),
    on(registerFail, (state, action) => {
        return {
            ...state,
            error: action.error,
            isRegistering: false,
            isRegistered: false
        }
    })
);

export function registerReducer(state: RegisterState, action: Action<string>) {
    return reducer(state, action);
}
