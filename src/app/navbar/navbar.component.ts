import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private _Router:Router,private _AuthService: AuthService) {
    this._AuthService.isLogin.subscribe({
      next: () => {
        if (this._AuthService.isLogin.getValue() == true) {
          this.isLogin = true;
        } else {
          this.isLogin=false
        }
      }
    })
  }

  isLogin: boolean = true;

    logOut() {
    this._AuthService.isLogin.next(false);
    localStorage.removeItem('user');
    this._Router.navigate(['/login']);
  }
}
