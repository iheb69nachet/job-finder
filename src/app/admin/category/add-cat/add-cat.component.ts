import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '@app/_services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.less']
})
export class AddCatComponent implements OnInit {
  NewCat:FormGroup
  submitted: boolean;
  loading: boolean;
  data: any;
  error: any;

  constructor(private fb:FormBuilder, private admin:AdminService,private route: Router) { }

  ngOnInit(): void {
    this.NewCat = this.fb.group({
      name: ['', Validators.required],
      

  });
  }
  get f() { return this.NewCat.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.NewCat.invalid) {
        return;
    }
    this.loading = true;
    this.data=this.NewCat.getRawValue()
    this.admin.addCat(this.data)
        .subscribe(
            data => {
              Swal.fire('Done', 'You submitted a Category succesfully!', 'success')
              this.route.navigate(['/admin/getAllCat'])

            },
            error => {
                this.error = error;
                console.log(error);
                
                this.loading = false;
            });
}

}
