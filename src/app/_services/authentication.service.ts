import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    gOnInit() {
        // this.currentUser.subscribe(user => 
        //     {
        //         if (this.jwtHelper.isTokenExpired(user.token)) 
        //         {
        //             this.logout()
        //         }else{

        //         }
        //     }
        //     );
      }
    login(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth/login`, { email, password })
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user.data));
                
                this.currentUserSubject.next(user.data);
                return user;
            }));
    }
    register(data:Object){
    return this.http.post(`${environment.apiUrl}/auth/register`,data)
    }
    registerCompany(data:Object){
        return this.http.post(`${environment.apiUrl}/auth/registerCompany`,data)
        }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    
}