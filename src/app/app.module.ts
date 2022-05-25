import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';;
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component'
;
import { IfRolesDirective } from './if-roles.directive'
;
import { AppheaderComponent } from './admin/appheader/appheader.component'
;
import { AppfooterComponent } from './admin/appfooter/appfooter.component'
;
import { DashboardComponent } from './admin/dashboard/dashboard.component'
;
import { SidebarComponent } from './admin/sidebar/sidebar.component'
;
import { AdminhomeComponent } from './admin/adminhome/adminhome.component'
;
import { ListCandidatesComponent } from './admin/list-candidates/list-candidates.component'
;
import { AddComponent } from './admin/job/add/add.component'
;
import { ListComponent } from './admin/job/list/list.component'
;
import { ListCompaniesComponent } from './admin/list-companies/list-companies.component'
;
import { ListJobsComponent } from './admin/list-jobs/list-jobs.component'
;
import { JobDetailComponent } from './job-detail/job-detail.component'

import { FormsModule } from '@angular/forms';
import { ApplicationComponent } from './application/application.component';;
import { AppliesListComponent } from './application/applies-list/applies-list.component'
;
import { ProfileCompanyComponent } from './profile-company/profile-company.component'
;
import { AddCatComponent } from './admin/category/add-cat/add-cat.component'
;

import { CommonModule } from '@angular/common';
import { CategoryComponent } from './admin/category/category/category.component';
import {UpdateCatComponent} from './admin/category/update-cat/update-cat.component'



@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent ,
        FooterComponent ,
        RegisterComponent ,
        IfRolesDirective ,
        AppheaderComponent,
        AppfooterComponent,
        DashboardComponent,
        SidebarComponent ,
        AdminhomeComponent ,
        ListCandidatesComponent ,
        AddComponent ,
        ListCompaniesComponent,
        ListJobsComponent,
        ListComponent,
        JobDetailComponent,
        ApplicationComponent,
        AppliesListComponent,
        ProfileCompanyComponent,
        AddCatComponent,
        CategoryComponent,
        UpdateCatComponent
        
          
    ],
       
        
      
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }