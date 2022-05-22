import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListCandidatesComponent } from './admin/list-candidates/list-candidates.component';
import { AddComponent } from './admin/job/add/add.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers';
import { ListComponent } from './admin/job/list/list.component';
import { ListCompaniesComponent } from './admin/list-companies/list-companies.component';
import { ListJobsComponent } from './admin/list-jobs/list-jobs.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [
    { path: '', component: HomeComponent},

    { path: 'login', component: LoginComponent },
    { path: 'admin', component: DashboardComponent,canActivate:[AuthGuard],children:[
        { path: 'home', component: AdminhomeComponent},
        { path: 'Candidates/list', component:ListCandidatesComponent},
        {path: 'Companies/list',component: ListCompaniesComponent},
        {path:'offers/list', component:ListJobsComponent},
        { path: 'job/add', component:AddComponent},
        { path: 'job/list', component:ListComponent},



    ] },
    { path: 'job/:id', component: JobDetailComponent },
    {path:'application/:id',component:ApplicationComponent},


    

    { path: 'register', component: RegisterComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
