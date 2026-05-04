import { Component, inject, signal, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-forgetpassword',
  imports: [RouterLink , ReactiveFormsModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css',
})
export class ForgetpasswordComponent {

private readonly fb:FormBuilder = inject(FormBuilder)
private readonly authService : AuthService = inject(AuthService)
private readonly router : Router = inject(Router)

step = signal <number>(1)

firstForm = this.fb.group({
  email: [null , [Validators.required , Validators.email]]
})
secondForm = this.fb.group({
  resetCode: [null , [Validators.required]]
})
thirdForm = this.fb.group({
  email: [null , [Validators.required , Validators.email]],
  newPassword: [null , [Validators.required]]
})

submitFirstForm(){

this.authService.sendEmail(this.firstForm.value).subscribe({
  next: (res) => {
    console.log("sending Code To Email");
    this.step.set(2)

  }
})



}
submitSecondForm(){

this.authService.sendVerifyCode(this.secondForm.value).subscribe({
  next: (res) => {
    console.log("sending Verify Code");
    this.step.set(3)

  }
})



}
submitThirdForm(){

this.authService.sendNewPassword(this.thirdForm.value).subscribe({
  next: (res) => {
    console.log("New Password added Success");
    this.router.navigate(['/login'])


  }
})



}




}
