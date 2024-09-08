import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap, switchMap, tap } from "rxjs/operators";
import { AuthService } from "src/app/services/auth/auth.service";
import { ParseSourceFile } from "@angular/compiler";
import { register, registerFail, registerSuccess } from "./register.actions";
import { UserRegister } from "src/app/model/user/UserRegister";

@Injectable()
export class RegisterEffects {

    constructor(private actions$: Actions, private authService: AuthService) {

    }

    register$ = createEffect(() => this.actions$.pipe(
        ofType(register),
        switchMap((payload: {userRegister: UserRegister})=>
        this.authService.register(payload.userRegister).pipe(
            map(() => registerSuccess()),
            catchError(error => of(registerFail({error})))
            )
        )
    ))
}
