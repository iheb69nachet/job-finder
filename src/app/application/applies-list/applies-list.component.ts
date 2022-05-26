import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@app/_services';
import { JobServiceService } from '@app/_services/job-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-applies-list',
  templateUrl: './applies-list.component.html',
  styleUrls: ['./applies-list.component.less']
})
export class AppliesListComponent implements OnInit {
  applications:any
  application:Array<Object>

  constructor(private service: JobServiceService, private ar: ActivatedRoute,private user:UserService) { }

  ngOnInit(): void {
    let id:number
    id=this.ar.snapshot.params['id'];
    this.service.ViewApplies(id).subscribe((res:any)=>{
      this.applications=res.data
    })
   
  }
  approve(id: any){
    this.user.ApporveApp(id).subscribe(res=>{
      Swal.fire('Done', res.message, 'success') 
      this.service.ViewApplies(id).subscribe((res:any)=>{
        this.applications=res.data
        
      }) 
      
    })

  }
  Disapporve(id){
    this.user.DisproveApp(id).subscribe(res=>{
      Swal.fire('Dissproved', res.message, 'success') 
      this.service.ViewApplies(id).subscribe((res:any)=>{
        this.applications=res.data
        
      }) 
    })
  }

}
