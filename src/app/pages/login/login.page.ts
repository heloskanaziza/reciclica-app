import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form!: FormGroup; // Menggunakan tanda seru untuk mengatasi error TS2564

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  login() {
    if (this.form.valid) {
      this.router.navigate(['home']);
    } else {
      console.log('Form is invalid');
    }
  }

  register() {
    this.router.navigate(['register']);
  }

}
