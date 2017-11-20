import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication/authentication.service";
import {UserDetailsService} from "../user/user-details/user-details.service";

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})

export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    static ERROR_MESSAGE = 'Rejestracja nie powiodła się, podana nazwa użytkownika lub email został już użyty.';

    constructor(private router: Router,
                private authenticationService: AuthenticationService,
                private userService: UserDetailsService) {
    }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    register() {
        this.loading = true;
        this.userService.create(this.model.email, this.model.password)
            .then(
                user => {
                    console.log(this.model);
                    this.error ='';
                    this.router.navigate(['login']);
                },
                error => {
                    this.error = RegisterComponent.ERROR_MESSAGE;
                }
            )
    }
}
