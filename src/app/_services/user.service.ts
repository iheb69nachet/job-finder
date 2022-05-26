import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    ApporveApp(id:any):Observable<any>{
        return this.http.get(`${environment.apiUrl}/jobs/approveApp?id=${id}`)
    
    }
    getUserData(){
        var data=localStorage.getItem('currentUser')||''
        if(data==''){
          return false
        }else{
          return JSON.parse(data)
        }
      }

    DisproveApp(id:any):Observable<any>{
      return this.http.get(`${environment.apiUrl}/jobs/dispproveApp?id=${id}`)
    }
}