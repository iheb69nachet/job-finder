import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services';
import { User } from '../_models';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router

  ) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit(): void {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
