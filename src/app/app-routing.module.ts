import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ListCandidatesComponent } from './admin/list-candidates/list-candidates.component';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: HomeComponent},

    { path: 'login', component: LoginComponent },
    { path: 'admin', component: DashboardComponent,canActivate:[AuthGuard],children:[
        { path: 'home', component: AdminhomeComponent},
        { path: 'Candidates/list', component:ListCandidatesComponent}

    ] },

    { path: 'register', component: RegisterComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
