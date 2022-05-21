import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '@app/_services/job-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  jobs:Array<Object>
  constructor(private jobService: JobServiceService) { }

  ngOnInit(): void {
    this.jobService.getJobs()
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
