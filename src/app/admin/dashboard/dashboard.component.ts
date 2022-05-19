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
    this.authenticationService.currentUser.subscribe(x => 
      {
        this.currentUser = x
        if(!this.roles.includes(x.role)){
          alert(x.role);
          this.router.navigate(['/']);
        }
      }
      );

  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(x => 
      {
        this.currentUser = x
        console.log(x)
      }
      );
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
