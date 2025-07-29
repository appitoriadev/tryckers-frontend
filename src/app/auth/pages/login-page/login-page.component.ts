
import { Component, inject, signal } from '@angular/core';
import { FocusTrapModule } from 'primeng/focustrap';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AutoFocusModule } from 'primeng/autofocus';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, FocusTrapModule, ButtonModule, FormsModule, InputTextModule, CheckboxModule, IconFieldModule, InputIconModule, AutoFocusModule, RouterLink],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

  fb = inject(FormBuilder)
  hasError = signal(false)
  isPosting = signal(false)
  router = inject(Router);

  authService = inject(AuthService);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSumbit() {
    if(this.loginForm.invalid){
      this.hasError.set(true)
      setTimeout(() => {
        this.hasError.set(false)
      }, 2000);
      return;
    }

    const {email = '', password = '' } = this.loginForm.value

    this.authService.login(email!,password!).subscribe((isAuthenticated)=>{
        if(isAuthenticated){
          this.router.navigateByUrl('/')
          return;
        }

        this.hasError.set(true);
        setTimeout(() => {
        this.hasError.set(false)
      }, 2000);
    })
  }
}
