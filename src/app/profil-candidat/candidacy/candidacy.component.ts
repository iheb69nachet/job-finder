import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/_services';

@Component({
  selector: 'app-candidacy',
  templateUrl: './candidacy.component.html',
  styleUrls: ['./candidacy.component.less']
})
export class CandidacyComponent implements OnInit {
 

  constructor(private user:UserService) { }
  apps:Array<Object>
  app:any

  ngOnInit(): void {
    this.user.getApplications().
    subscribe(
      (data:any) => {
        this.app=data.data;
        console.table(this.app)
      },
      error => {
          console.log(error);
          
      });
  }

}
