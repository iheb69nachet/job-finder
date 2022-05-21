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





@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        
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
        DashboardComponent
,
        SidebarComponent ,
        AdminhomeComponent ,
        ListCandidatesComponent ,
        AddComponent ,
        ListComponent],
      
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }