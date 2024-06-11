import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) {
    if (localStorage.getItem('user') != null) {
      this.isLogin.next(true)
    } else {
      this.isLogin.next(false)
    }
  }

  isLogin = new BehaviorSubject<boolean>(false);

  signup(userData:any): Observable<any>{
    return this._HttpClient.post('https://clinics-server-e274.onrender.com/signup',userData)
  }

  getUsers(): Observable<any>{
    return this._HttpClient.get('https://clinics-server-e274.onrender.com/signup')
  }
}
