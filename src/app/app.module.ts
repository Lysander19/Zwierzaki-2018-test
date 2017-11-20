import {BrowserModule} from "@angular/platform-browser";
import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {UserDetailsService} from "./user/user-details/user-details.service";
import {AuthenticationService} from "./authentication/authentication.service";
import {AnnouncementComponent} from "./announcement/announcement.component";
import {AnnouncementService} from "./announcement/announcement.service";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        UserDetailsComponent,
        AnnouncementComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [UserDetailsService, AuthenticationService, AnnouncementService],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
