import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Class } from '@app/_models/class';
import { AdminService} from '@app/_services/admin.service';
import{JobServiceService} from '@app/_services/job-service.service'


@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.less']
})
export class UpdateJobComponent implements OnInit {

  constructor(private router: Router, private service: AdminService, private jobService:JobServiceService,private ar: ActivatedRoute) { }
  id:any
  jobs:Class

  ngOnInit(): void {
    this.ar.paramMap.subscribe((params:Params)=>{
      this.id=params['get']('id')
      this.jobService.getJobById(this.id).subscribe((data:any)=>{
        console.log(data);
        
        this.jobs=data
        
      })
    })
  }
  update(){
    return this.service.updatejob(this.id,this.jobs).subscribe(()=>{
    this.router.navigate(['/admin/offers/list'])
    })
  }

}
