import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobServiceService } from '@app/_services/job-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.less']
})
export class ApplicationComponent implements OnInit {
  user:any;
  apply: FormGroup;

 id:any
  get f(){
    return this.apply.controls;
  }
  onFileChange(event) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.apply.patchValue({
        fileSource: file
      });
    }
  }
  constructor(private route: ActivatedRoute,private userService: AuthenticationService,private formBuilder: FormBuilder,private jobsService: JobServiceService) {
    this.user=userService.currentUserValue
   
    
   }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.apply = this.formBuilder.group({
      cv: ['', [Validators.required]],
      fileSource: ['', [Validators.required]],
      motivation:['']
    });
  }
  submit(){
    const formData = new FormData();
    formData.append('cv', this.apply.get('fileSource').value);
    formData.append('motivation', this.apply.get('motivation').value);
    formData.append('job_id', this.id);


    if (this.f.invalid) {
      return;
  }
  this.jobsService.apply(formData).subscribe(res=>{
    console.log(res);
    
  })


  }
}
