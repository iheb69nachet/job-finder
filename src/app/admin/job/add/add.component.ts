import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobServiceService } from '@app/_services/job-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';  

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class AddComponent implements OnInit {
  NewJob: FormGroup;
  submitted: boolean;
  loading: boolean;
  data: any;
  error: any;

  constructor(private formBuilder: FormBuilder,private jobService: JobServiceService) { }

  ngOnInit(): void {
    this.NewJob = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      placesAvailable: ['', Validators.required],
      qualifications: ['', Validators.required],
      technologiesReq: ['', Validators.required],
      diplomaReq: ['', Validators.required ],
      jobtypes: ['', Validators.required],
      localisation:['',Validators.required]

  });
  }
  get f() { return this.NewJob.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.NewJob.invalid) {
        return;
    }
    this.loading = true;
    this.data=this.NewJob.getRawValue()
    this.jobService.addNew(this.data)
        .subscribe(
            data => {
              Swal.fire('Done', 'You submitted a Job succesfully!', 'success')  
            },
            error => {
                this.error = error;
                console.log(error);
                
                this.loading = false;
            });
}
}
