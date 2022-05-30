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
  addCat(data:any){
    return this.http.post(`${environment.apiUrl}/admin/category`,data)
  }
  getAllCat(){
    return this.http.get(`${environment.apiUrl}/admin/getallCat`)
  }
  deleteCat(id:any){
    return this.http.delete(`${environment.apiUrl}/admin/deleteCat/`+id)
  }
  updateCat(data){
    return this.http.post(`${environment.apiUrl}/admin/updateCat`,data)
  }
  getCatId(id:any){
    return this.http.get(`${environment.apiUrl}/admin/catById/`+id)
  }
  updatejob(id:any,data:any){
    return this.http.put(`${environment.apiUrl}/jobs/updatejobAd/`+id,data)
  }
  ViewApplies(id:any){
    return this.http.get(`${environment.apiUrl}/jobs/applications?id=`+id)

  }
  deleteCan(id:any){
    return this.http.delete(`${environment.apiUrl}/admin/deletecan/`+id)
  }
}
