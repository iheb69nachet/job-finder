import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.less']
})
export class AsideComponent implements OnInit {
  profileinfo: any;

  constructor(private router:Router,private service:AuthenticationService) { }

  ngOnInit(): void {
    this.profileinfo=this.service.currentUserValue


    console.log(this.profileinfo);
    
    if(!this.profileinfo){
      this.router.navigateByUrl('/admin/login')
    }
  }

}
