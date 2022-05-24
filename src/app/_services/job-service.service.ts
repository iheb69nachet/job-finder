import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  constructor(private http: HttpClient) { }
  addNew(data:any){
    return this.http.post(`${environment.apiUrl}/jobs/add`,data)

  }
  getJobs(){
    return this.http.get(`${environment.apiUrl}/jobs/list`)

  }
  getApproved(){
    return this.http.get(`${environment.apiUrl}/jobs/approved`)

  }
  deleteJob(){
    return this.http.get(`${environment.apiUrl}/auth/register`)
  }
  ApproveJob(){
    return this.http.get(`${environment.apiUrl}/auth/register`)

  }
  getJobById(id:any){
    return this.http.get(`${environment.apiUrl}/jobs/detail?id=`+id)
  }
  deletejobs(id:any){
    return this.http.delete(`${environment.apiUrl}/deletejob/`+id)
  }
  apply(data:any){
    return this.http.post(`${environment.apiUrl}/jobs/apply`,data)

  }
  ViewApplies(id:any){
    return this.http.get(`${environment.apiUrl}/jobs/applies?id=`+id)

  }
}
