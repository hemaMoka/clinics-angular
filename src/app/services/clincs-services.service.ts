import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClincsServicesService {

  constructor(private _HttpClient: HttpClient) { }

  getClincs(): Observable<any>{
    return this._HttpClient.get('https://clinics-server-e274.onrender.com/clincs')
  }

  getSpacificClinc(id: string | null): Observable<any>{
    return this._HttpClient.get(`https://clinics-server-e274.onrender.com/clincs/${id}`)
  }
}
