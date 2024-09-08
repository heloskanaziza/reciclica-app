import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/AppState';
import { register } from 'src/store/register/register.actions';
import { RegisterState } from 'src/store/register/RegisterState';
import { show, hide } from 'src/store/loading/loading.action';
import { ToastController } from '@ionic/angular';
import { login } from 'src/store/login/login.actions';
import { Subscription } from 'rxjs';
import { RegisterPageForm } from './form/register.page.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit, OnDestroy {

  registerForm!: FormGroup;
  registerStateSubscription!: Subscription;

  constructor(private formBuilder: FormBuilder, private store: Store<AppState>,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    // Buat instance dari RegisterPageForm dan ambil form dari situ
    const registerPageForm = new RegisterPageForm(this.formBuilder);
    this.registerForm = registerPageForm.getForm();

    this.watchRegisterState();
  }

  ngOnDestroy(){
    this.registerStateSubscription.unsubscribe();
  }

  register() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      this.store.dispatch(register({ userRegister: this.registerForm.value }));
    }
  }

  private watchRegisterState() {
    this.registerStateSubscription = this.store.select('register').subscribe(state => {
      this.toggleLoading(state);
      this.onRegistered(state);
      this.onError(state);
    });
  }

  private onRegistered(state: RegisterState) {
    if (state.isRegistered) {
      this.store.dispatch(login({
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      }));
    }
  }

  private onError(state: RegisterState) {
    if (state.error) {
      this.toastController.create({
        message: state.error.message,
        duration: 5000,
        header: 'Registration not done'
      }).then(toast => toast.present());
    }
  }

  private toggleLoading(state: RegisterState) {
    if (state.isRegistering) {
      this.store.dispatch(show());
    } else {
      this.store.dispatch(hide());
    }
  }
}
