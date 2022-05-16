import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/_services';
import { Router, ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  selectedIndex:any=0;
  activeLinkIndex = -1; 
  activeTab = 'condidate';
  submitted = false;
  error = '';
  loading=false
  registerForm: FormGroup;
  data:any={}
  search(activeTab: string, $event: MouseEvent): void{
    $event.preventDefault();
    this.activeTab = activeTab;
  }

  result(activeTab: string, $event: MouseEvent): void{
    $event.preventDefault();
    this.activeTab = activeTab;
  }
  constructor(    private router: Router,    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
) {
 

  }
  
  ngOnInit(): void {  
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required ],
      birthdate: ['', Validators.required],
      phone: ['', Validators.required],
      adress: ['', Validators.required],
      diploma: ['', Validators.required]
  });
  }
  resetTabIndex() {
    this.selectedIndex = 0;
    console.log('tab index has been reset');
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.loading = true;
    this.data=this.registerForm.getRawValue()
    this.data.role=this.activeTab
    this.authenticationService.register(this.data)
        .subscribe(
            data => {
              console.log(data);

                // this.router.navigate([""]);
            },
            error => {
                this.error = error;
                console.log(error);
                
                this.loading = false;
            });
}
  
}
