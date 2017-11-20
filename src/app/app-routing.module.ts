import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {AnnouncementComponent} from "./announcement/announcement.component";
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'register',       component: RegisterComponent },
  { path: 'login',       component: LoginComponent },
  { path: 'home',       component: HomeComponent },
  { path: 'edit',       component: UserDetailsComponent },
    {path: 'announcement', component: AnnouncementComponent},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
