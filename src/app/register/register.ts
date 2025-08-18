import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Users, User } from '../users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  <div class="container mt-5">
    <h2>Register</h2>
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="card p-4 shadow">

      <div class="mb-3">
        <label>Username</label>
        <input type="text" formControlName="userName" class="form-control" />
        <div class="text-danger" *ngIf="registerForm.get('userName')?.invalid && registerForm.get('userName')?.touched">
          Username is required
        </div>
      </div>

      <div class="mb-3">
        <label>Password</label>
        <input type="password" formControlName="password" class="form-control" />
        <div class="text-danger" *ngIf="registerForm.get('password')?.invalid && registerForm.get('password')?.touched">
          Min 6 characters required
        </div>
      </div>

      <div class="mb-3">
        <label>First Name</label>
        <input type="text" formControlName="firstName" class="form-control" />
      </div>

      <div class="mb-3">
        <label>Last Name</label>
        <input type="text" formControlName="lastName" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary" [disabled]="registerForm.invalid">Register</button>
    </form>
  </div>
  `
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: [''],
      lastName: ['']
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const newUser: User = {
        ...this.registerForm.value as User,
        userId: Users.length + 1
      };
      Users.push(newUser);
      alert('User Registered Successfully!');
      this.registerForm.reset();
      console.log('Users:', Users);
    }
  }
}
