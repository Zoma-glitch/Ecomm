import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email, form } from '@angular/forms/signals';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { json } from 'node:stream/consumers';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  private readonly authService : AuthService = inject(AuthService)
  private readonly router : Router = inject(Router)

  loginForm : FormGroup = new FormGroup({
    email:new FormControl(null ,  [Validators.required,Validators.email]),
    password:new FormControl(null , [Validators.required ])})

submitLogin()
{
if(this.loginForm.valid){
  this.authService.signIn(this.loginForm.value).subscribe({
    next:(res)=>{
      console.log(res)
        localStorage.setItem('freshtoken' , res.token)
        localStorage.setItem('freshUser' ,JSON.stringify(res.user))

        this.router.navigate(['/home'])

        this.loginForm.reset()

        this.authService.isLogged.set(true)

    }
  })
}
else{
this.loginForm.markAllAsTouched()
}
}

}
