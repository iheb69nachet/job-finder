import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { AdminService } from '@app/_services/admin.service';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.less']
})
export class ListJobsComponent implements OnInit {
   jobs: Array<Object>
   company:Array<Object>
   user:User[]

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.GetJobs().subscribe(res=>{
      this.jobs=res.data
    })
    this.adminService.GetCompany().subscribe(res=>{
      this.company=res.data
    })
  }

}
