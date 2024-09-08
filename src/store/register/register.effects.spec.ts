import { TestBed } from "@angular/core/testing";
import { Action, StoreModule } from "@ngrx/store";
import { Actions, EffectsModule } from "@ngrx/effects";
import { AuthService } from 'src/app/services/auth/auth.service';
import { RegisterEffects } from "./register.effects";
import { Observable, of, throwError } from "rxjs";
import { provideMockActions } from "@ngrx/effects/testing";
import { User } from "src/app/model/user/User";
import { UserRegister } from "src/app/model/user/UserRegister";
import { register, registerSuccess, registerFail } from "./register.actions";

describe("Register Effects", () => {
    let effects: RegisterEffects;
    let actions$: Observable<Action>;
    let error = {error: 'error'};
    let user = new User();
    user.id = "anyUserId"

    let authServiceMock = {
        register(userRegister: UserRegister){
            if (userRegister.email == 'error@gmail.com') {
                return throwError(error);
            }
            return of({});
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule(
            {
                imports: [
                    StoreModule.forRoot([]),
                    EffectsModule.forRoot([]),
                    EffectsModule.forFeature([
                        RegisterEffects
                    ])
                ],
                providers: [
                    provideMockActions(() => actions$)
                ]
            }).overrideProvider(AuthService, {useValue: authServiceMock});

        effects = TestBed.inject(RegisterEffects);
    })

    it('should register return success', (done) => {
        actions$ = of(register({userRegister: new UserRegister()}));

        effects.register$.subscribe(newAction => {
            expect(newAction).toEqual(registerSuccess());
            done();
        })
    })

    it('should register return error', (done) => {
        const userRegister= new UserRegister();
        userRegister.email = 'error@gmail.com';

        actions$ = of(register({userRegister}));

        effects.register$.subscribe(newAction => {
            expect(newAction).toEqual(registerFail(error));
            done();
        })
    })
})
