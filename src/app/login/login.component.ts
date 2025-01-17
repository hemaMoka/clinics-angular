  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';
  import { AuthService } from '../services/auth.service';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
  export class LoginComponent implements OnInit {
      constructor(private _Router: Router, private _AuthService: AuthService) {
    }
    users: any[] = [];
    messageError:string=""
    ngOnInit(): void {
      this._AuthService.getUsers().subscribe({
        next: (res) => {
          this.users = res;
        }
      })
    }

    login: FormGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password:new FormControl(null,[Validators.required])
    })

    handleLogin(form:FormGroup) {
      const { email, password } = form.value;
      const match = this.users.filter((user) => { return user.email == email && user.password == password });
      if (match.length != 0) {
        this._Router.navigate(['/home']);
        this._AuthService.isLogin.next(true);
        localStorage.setItem('user',JSON.stringify(match[0]))
      } else {
        this.messageError = "email or Password is Wrong";
      }
    }

    handleChange() {
      this.messageError = "";
    }
  }
