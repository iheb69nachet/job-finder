import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobServiceService } from '@app/_services/job-service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less']
})
export class CommentsComponent implements OnInit {
  comments:Array<Object>
  id:number
  constructor(private jobsServices: JobServiceService, private ar: ActivatedRoute) { 
    this.id=this.ar.snapshot.params['id'];
  }

  ngOnInit(): void {
   
   
    this.jobsServices.Comments(this.id).subscribe((res:any)=>{
      this.comments=res.data
   
      
    })
  }
  delete(id){
    this.jobsServices.DeleteComment(id).subscribe(res=>{
      this.jobsServices.Comments(this.id).subscribe((res:any)=>{
        this.comments=res.data
     
        
      })
      
    })
  }
  action(action:string,id:string){
    let status=action=="approve"?"Approved":"Disapproved"
    let data={
      id:id,
      status:status
    }
  this.jobsServices.UpdateCommentStatus(data).subscribe(res=>{
    this.jobsServices.Comments(this.id).subscribe((res:any)=>{
      this.comments=res.data
   
      
    })
    
  })
  }

}
