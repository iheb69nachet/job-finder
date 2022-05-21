import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services';
import { User } from '../../_models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  currentUser: User;
  private roles:Array<string>=["admin","company"]

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router

  ) { 
  

  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe((x:any) => 
      {
        this.currentUser = x

        if(!this.roles.includes(this.currentUser.role)){
          this.router.navigate(['/']);
        }
      }
      );
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
