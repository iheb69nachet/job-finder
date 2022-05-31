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
import { AppliesListComponent } from './application/applies-list/applies-list.component';
import { ProfileCompanyComponent } from './profile-company/profile-company.component';
import { AddCatComponent } from './admin/category/add-cat/add-cat.component';
import { CategoryComponent } from './admin/category/category/category.component';
import { CommonModule } from '@angular/common';
import { UpdateCatComponent } from './admin/category/update-cat/update-cat.component';
import { CommentsComponent } from './admin/comments/comments.component';
import { ProfilCandidatComponent } from './profil-candidat/profil-candidat.component';
import { WishlistComponent } from './profil-candidat/wishlist/wishlist.component';
import { UpdateJobComponent } from './admin/job/update-job/update-job.component';
import { AppListComponent } from './admin/app-list/app-list.component';
import { CandidacyComponent } from './profil-candidat/candidacy/candidacy.component';


const routes: Routes = [
    { path: '', component: HomeComponent},

    { path: 'login', component: LoginComponent },
    { path: 'admin', component: DashboardComponent,canActivate:[AuthGuard],children:[
        { path: 'home', component: AdminhomeComponent},
        { path: 'Candidates/list', component:ListCandidatesComponent},
        {path: 'Companies/list',component: ListCompaniesComponent},
        {path:'offers/list',component:ListJobsComponent},
        { path: 'job/add',component:AddComponent},
        { path: 'job/list',component:ListComponent},
        {path:'application/list/:id',component:AppliesListComponent},
        {path:'comments/:id',component:CommentsComponent},
        {path:'updateAd/:id',component:UpdateJobComponent},
        {path:'appList/:id',component:AppListComponent},

        {path:'profile',component:ProfileCompanyComponent},
        {path:'cat',component:AddCatComponent},
        {path:'getAllCat',component:CategoryComponent},
        {path:'updatCat/:id',component:UpdateCatComponent},
        



    ] },
    {path: 'job/:id', component: JobDetailComponent },
    {path:'application/:id',canActivate:[AuthGuard],component:ApplicationComponent},
    {path:'profile',component:ProfilCandidatComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'candidacy',component:CandidacyComponent},


    

    { path: 'register', component: RegisterComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{
       
            // Restore the last scroll position
            scrollPositionRestoration: "enabled",
            scrollOffset: [0, 0],
            // Enable scrolling to anchors
            anchorScrolling: "enabled",
          }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
