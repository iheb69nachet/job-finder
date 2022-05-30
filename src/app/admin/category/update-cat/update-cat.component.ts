import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from '@app/_services/admin.service';

@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.less']
})
export class UpdateCatComponent implements OnInit {
  name: any;

  constructor( private ar:ActivatedRoute,private service:AdminService, private router:Router) { }
  cat:any
  id:any

  ngOnInit(): void {
    this.ar.paramMap.subscribe((params:Params)=>{
      this.id=params['get']('id')
      this.service.getCatId(this.id).subscribe((data:any)=>{
        console.log(data);
        
        this.cat=data.data
        
      })
    })
  }
  update(){
    let data={
      id:this.id,
      cat:this.cat
    }
    this.service.updateCat(data).subscribe(()=>this.router.navigate(['/admin/getAllCat']))

  }

}
