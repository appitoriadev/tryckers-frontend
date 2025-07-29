import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { AutoFocusModule } from 'primeng/autofocus';
import { Router } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register-page',
  imports: [FormsModule, PasswordModule, IftaLabelModule,InputTextModule, IconFieldModule, InputIconModule, FloatLabelModule, ButtonModule, AutoFocusModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  username =signal<string>('');
  email = signal<string>('');
  value = signal<string>('');
  password = signal<string>('');

  countries = [
  { name: 'colombia', code: 'CO' },
  { name: 'chile', code: 'CL' }
];

selectedCountry: any = null;

fb = inject(FormBuilder)
  hasError = signal(false)
  isPosting = signal(false)
  router = inject(Router);

  authService = inject(AuthService);

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    country: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    if(this.registerForm.invalid){
      this.hasError.set(true)
      setTimeout(() => {
        this.hasError.set(false)
      }, 2000);
      return;
    }

    const {name = '', country = '' ,email = '', password = '' } = this.registerForm.value

    this.authService.register(name!,country!, email!,password!).subscribe((isAuthenticated)=>{
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
