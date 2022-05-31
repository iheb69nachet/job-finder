import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { JobServiceService } from '@app/_services/job-service.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    jobs:Array<Object>;
    user:any;
    favs:any
    constructor(private userService: UserService,private jobsService: JobServiceService) {
        this.user=userService.getUserData()
        console.log(this.user)
     }

    ngOnInit() {
        this.jobsService.getApproved()
        .subscribe(
            (data:any) => {
              this.jobs=data.data;
              this.jobsService.GetFavorites().subscribe((favs:any)=>{
                  this.favs=favs.data
                  console.log(favs)
              })
            },
            error => {
                console.log(error);
                
            });
    }
    favorite(id){
        let data={
            "id":id
        }
        this.jobsService.AddFavorites(data).subscribe(res=>{
            this.jobsService.GetFavorites().subscribe((favs:any)=>{
                this.favs=favs.data
                console.log(favs)
            })
        })
        
    }
    Removefavorite(id){
        let data={
            "id":id
        }
        this.jobsService.DeleteFavorites(data).subscribe(res=>{
            this.jobsService.GetFavorites().subscribe((favs:any)=>{
                this.favs=favs.data
            })
        })
    }
//     click( {target} )
// {

//   target.style = "  color: red";
//   target.class = "aaa";

// }
}