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

  ngOnInit(): void {
    this.user.getApplications().
    subscribe(
      (data:any) => {
        this.apps=data.data;
        console.table(this.apps)
      },
      error => {
          console.log(error);
          
      });
  }

}
