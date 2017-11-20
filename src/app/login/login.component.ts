import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication/authentication.service";


@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    static ERROR_MESSAGE = 'Logowanie nie powiodło się';

    constructor(private router: Router,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['home']);
                } else {
                    // login failed
                    this.error = LoginComponent.ERROR_MESSAGE;
                    this.loading = false;
                }
            }, error => {
                console.log(error);
                this.loading = false;
                this.error = LoginComponent.ERROR_MESSAGE;
            });
    }
}
