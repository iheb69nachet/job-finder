import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, UserService } from '@app/_services';

@Component({
  selector: 'app-profil-candidat',
  templateUrl: './profil-candidat.component.html',
  styleUrls: ['./profil-candidat.component.less']
})
export class ProfilCandidatComponent implements OnInit {
  profileinfo:any
  constructor( private router:Router, private service:AuthenticationService) { }

  ngOnInit(): void {
    this.profileinfo=this.service.currentUserValue


    console.log(this.profileinfo);
    
    if(!this.profileinfo){
      this.router.navigateByUrl('/admin/login')
    }
  }

}
