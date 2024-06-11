import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClincsServicesService } from '../services/clincs-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-spacific-clinc',
  templateUrl: './spacific-clinc.component.html',
  styleUrls: ['./spacific-clinc.component.scss']
})
export class SpacificClincComponent implements OnInit {
  constructor(private _Router:Router ,private _ToastrService:ToastrService,private _ActivatedRoute:ActivatedRoute , private _ClincsServicesService:ClincsServicesService) {
  }

  id: string | null = null;
  clinc:any
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (res) => {
        this.id=res.get('id')
      }
    })
    this._ClincsServicesService.getSpacificClinc(this.id).subscribe({
      next:(res)=>{this.clinc=res}
    })
  }

    book: FormGroup = new FormGroup({
    name: new FormControl(JSON.parse(`${localStorage.getItem('user')}`).name, [Validators.required]),
    phone: new FormControl(JSON.parse(`${localStorage.getItem('user')}`).phone, [Validators.required]),
    clinic:new FormControl([Validators.required])
  })

  handleBook(form:FormGroup) {
    this._ToastrService.success("تم تأكيد الحجز سيتم التواصل معك ", "عمليه ناجحة");
    this._Router.navigate(['/home'])
  }

}
