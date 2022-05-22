import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  GetCandidates(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/admin/users`)
  }
  GetCompany():Observable<any>{
    return this.http.get(`${environment.apiUrl}/admin/companies`)
  }
  GetJobs():Observable<any>{
    return this.http.get(`${environment.apiUrl}/admin/offers`)
  }
  ApporveJob(id:any):Observable<any>{
    return this.http.get(`${environment.apiUrl}/jobs/approve?id=${id}`)

  }
  DisapporveJob(id:any):Observable<any>{
    return this.http.get(`${environment.apiUrl}/jobs/dispprove?id=${id}`)

  }
}
