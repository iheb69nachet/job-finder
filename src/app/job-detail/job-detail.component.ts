import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobServiceService } from '@app/_services/job-service.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.less']
})
export class JobDetailComponent implements OnInit {
  jobs:any

  constructor(private route: ActivatedRoute, private service: JobServiceService) { }

  ngOnInit(): void {
    let id:number
    id=this.route.snapshot.params['id'];
    this.service.getJobById(id).subscribe(res=>{
     
      
      this.jobs=res})
      console.log(id);
      console.log(this.jobs);
      
   
  }

}
