import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { MyPlatformService } from '../myPlatform/my-platform.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly myPlatformService: MyPlatformService = inject(MyPlatformService);

  isLogged = signal<boolean>(false);

  constructor(){
    if(this.myPlatformService.checkPlatform())
    this.checkLogged()
  }

  signIn(data: object): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/v1/auth/signin`, data);
  }
  signUp(data: object): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/v1/auth/signup`, data);
  }
  sendEmail(data: object): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/v1/auth/forgotpasswords`, data);
  }
  sendVerifyCode(data: object): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode`, data);
  }
  sendNewPassword(data: object): Observable<any> {
    return this.http.put(`${environment.baseUrl}/api/v1/auth/resetPassword`, data);
  }


  checkLogged() {
    if(localStorage.getItem("freshtoken"))
    this.isLogged.set(true)
  else
    this.isLogged.set(false)
  }




}
