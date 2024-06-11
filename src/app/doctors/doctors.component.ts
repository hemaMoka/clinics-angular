import { Component, OnInit } from '@angular/core';
import { ClincsServicesService } from '../services/clincs-services.service';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit{
  constructor(private _ClincsServicesService:ClincsServicesService){}
  clincs:any[]=[]
  ngOnInit(): void {
    this._ClincsServicesService.getClincs().subscribe({
      next: (res) => {
        this.clincs = res;
      }
    })
  }
}
