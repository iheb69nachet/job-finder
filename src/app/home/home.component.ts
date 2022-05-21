import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import { JobServiceService } from '@app/_services/job-service.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    jobs:Array<Object>;
    constructor(private userService: UserService,private jobsService: JobServiceService) { }

    ngOnInit() {
        this.jobsService.getApproved()
        .subscribe(
            (data:any) => {
              this.jobs=data.data;
              console.table(this.jobs)
            },
            error => {
                console.log(error);
                
            });
    }
}