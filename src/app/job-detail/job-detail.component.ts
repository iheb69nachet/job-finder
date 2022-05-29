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
  comments:any

  comment:string=""
  constructor(private route: ActivatedRoute, private service: JobServiceService) { }

  ngOnInit(): void {
    let id:number
    id=this.route.snapshot.params['id'];
    this.service.getJobById(id).subscribe((res:any)=>{
      this.jobs=res.data.job
      this.comments=res.data.comments
      console.log(this.comments);
      

    })
   
   
  }
  getComment(){
    if(this.comment!==""){
      
      let id:number
      id=this.route.snapshot.params['id'];
      let data={
        job_id:this.route.snapshot.params['id'],
        comment:this.comment
      }
      this.service.PostComment(data).subscribe((res:any)=>{
        this.service.getJobById(id).subscribe((res:any)=>{
          this.jobs=res.data.job
          this.comments=res.data.comments
    
        })
      })
    }
   
  }

}
