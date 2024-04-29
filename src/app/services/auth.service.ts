import { Inject, Injectable } from '@angular/core';
import { LoginRequest } from '../interfaces/login-request';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { response } from 'express';
import { LoginResponse } from '../interfaces/login-response';
import { Router } from '@angular/router';
import { RegisterRequest } from '../interfaces/register-request';
import { RegisterResponse } from '../interfaces/register-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
apiUrl = environment.apiUrl;

tokenKey: string = 'token';
router=Inject(Router)

  login(data:LoginRequest):Observable<RegisterResponse>{
 return this.http.post<RegisterResponse>(`${this.apiUrl}Users/Login`,data).pipe(
  map((response)=> {
    if(response.isSuccess){
      localStorage.setItem(this.tokenKey , response.token)
      }
        this.router.navigate(['/register'])
      
      return response
  })
 )
  }


  register(data: RegisterRequest): Observable<string>{
    return this.http.post<string>(`${this.apiUrl}Users/Register`,data).pipe(
      map((response)=>{
        if(response == "Qilichdek Qilichbek"){
          this.router.navigate(['/login'])
        }
        this.router.navigate(['/register'])
        return response
      })
    );

}


}
