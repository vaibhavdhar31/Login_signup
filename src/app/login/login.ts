import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Users } from '../users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  <div class="container mt-5" >
    <h2>Login</h2>
    <form [formGroup]="loginForm" (ngSubmit)="onLogin()" class="card p-4 shadow">

      <div class="mb-3">
        <label>Username</label>
        <input type="text" formControlName="userName" class="form-control" />
      </div>

      <div class="mb-3">
        <label>Password</label>
        <input type="password" formControlName="password" class="form-control" />
      </div>

      <button type="submit" class="btn btn-success" [disabled]="loginForm.invalid">Login</button>
    </form>

    <div *ngIf="loginMessage" class="alert mt-3" [class.alert-success]="isSuccess" [class.alert-danger]="!isSuccess">
      {{ loginMessage }}
    </div>
  </div>
  `
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginMessage: string = '';
  isSuccess: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    const { userName, password } = this.loginForm.value;
    const foundUser = Users.find(u => u.userName === userName && u.password === password);

    if (foundUser) {
      this.isSuccess = true; 
      this.loginMessage = `Welcome ${foundUser.firstName} ${foundUser.lastName}!`;
    } else { 
      this.isSuccess = false; 
      this.loginMessage = 'Invalid Username or Password'; 
    } 
  }
}
