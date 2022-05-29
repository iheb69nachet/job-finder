import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, UserService } from '@app/_services';

@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
  styleUrls: ['./profile-company.component.less']
})
export class ProfileCompanyComponent implements OnInit {
  profileinfo:any

  constructor(private service:AuthenticationService, private inject:Injector,private router:Router) { }

  ngOnInit(): void {
    
      this.profileinfo=this.service.currentUserValue


      console.log(this.profileinfo);
      
      if(!this.profileinfo){
        this.router.navigateByUrl('/admin/login')
      }
        
      
      
 
    
  }

}
