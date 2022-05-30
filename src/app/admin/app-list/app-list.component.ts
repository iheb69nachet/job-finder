import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '@app/_services/admin.service';
import { JobServiceService } from '@app/_services/job-service.service';
import { UserService } from '@app/_services/user.service';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.less']
})
export class AppListComponent implements OnInit {

  constructor( private service: JobServiceService, private ar: ActivatedRoute,private admin:AdminService) { }
  applications:any
  application:Array<Object>

  ngOnInit(): void {
    let id:number
    id=this.ar.snapshot.params['id'];
    this.admin.ViewApplies(id).subscribe((res:any)=>{
      this.applications=res.data
      console.log(this.applications)
    })
  }
  deleteCat(id:any){
    this.admin.deleteCan(id).subscribe(()=>
    window.location.reload()
   )
  }

}
