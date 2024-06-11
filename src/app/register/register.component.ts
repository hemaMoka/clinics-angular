import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _ToastrService:ToastrService,private _Router:Router,private _AuthService:AuthService){}

  register:FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[1 2 0 5][0-9]{8}$/)]),
    password:new FormControl(null,[Validators.required])
  })

  handleRegister(form: FormGroup) {
    this._AuthService.signup(form.value).subscribe({
      next: () => {
        this._Router.navigate(['/login']);
        this._ToastrService.success("Register Confirm", "Success");
      },
      error: (err) => {
        this._ToastrService.error("Error Sign Up", "Technecal Error")
        console.log(err);

      }
    })
  }

}
