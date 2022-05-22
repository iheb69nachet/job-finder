import { Component, OnInit } from '@angular/core';
import { AdminService } from '@app/_services/admin.service';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.less']
})
export class ListCompaniesComponent implements OnInit {
  public companies:  Array<Object>

  constructor( private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.GetCompany().subscribe(res=>{
      this.companies=res.data
    })
  }

}
