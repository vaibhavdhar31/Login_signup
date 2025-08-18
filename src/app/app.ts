import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, RegisterComponent],
  template: `
    <div class="container">
      <h1 class="text-center my-4">Welcome to Login and Register page !</h1>
      <div class="row">
        <div class="col-md-6"><app-register></app-register></div>
        <div class="col-md-6"><app-login></app-login></div>
      </div>
    </div>
  `
})
export class AppComponent {}

bootstrapApplication(AppComponent);
