import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly authService: AuthService = inject(AuthService);
  private readonly router: Router = inject(Router);

  ngOnInit(): void {
    this.createRegisterForm();
  }

  registerForm!: FormGroup;
  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      rePassword: [null, [Validators.required]],
      phone: [null, [Validators.required]],
    });
  }

  submitRegister() {
    if (this.registerForm.valid)
    {
      this.authService.signUp(this.registerForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/login']);
        },
      })
    }
  }
}
