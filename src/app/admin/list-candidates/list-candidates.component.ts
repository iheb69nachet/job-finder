import { Component, OnInit } from '@angular/core';
import { User } from '@app/_models';
import { AdminService } from '@app/_services/admin.service';

@Component({
  selector: 'app-list-candidates',
  templateUrl: './list-candidates.component.html',
  styleUrls: ['./list-candidates.component.less']
})
export class ListCandidatesComponent implements OnInit {
  public candidates:Array<Object>
  constructor(
    private adminService: AdminService,

  ) { }

  ngOnInit(): void {
    this.adminService.GetCandidates().subscribe(res=>{
      console.log(this.candidates)
      
    })

  }

}
