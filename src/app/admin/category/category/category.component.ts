import { Component, OnInit } from '@angular/core';
import { AdminService } from '@app/_services/admin.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {
  categories:Array<Object>

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllCat().subscribe(
      (data:any) => {
        this.categories=data.data;
        console.table(this.categories)
      },
      error => {
          console.log(error);
          
      });
}
  
  deleteCat(id:any){
    this.adminService.deleteCat(id).subscribe(()=>
    window.location.reload()
   )
  }


}
