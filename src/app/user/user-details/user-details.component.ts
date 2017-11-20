import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {UserDetailsService} from "./user-details.service";
import {AuthenticationService} from "../../authentication/authentication.service";

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  providers: [UserDetailsService]
})
export class UserDetailsComponent implements OnInit {
  model: any = {};

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private userDetailsService: UserDetailsService) {
  }
  ngOnInit() {
    this.getUser();
  }

  send() {
    this.updateUser();
  }

  getUser(): void {
    this.userDetailsService.getUser(this.authenticationService.getUsername())
        .then(
            user => this.model = user,
            error => {
                this.router.navigate(['login']);
                console.error('An error occurred in UserDetails component, navigating to login: ', error);
            }
        )
  }

  updateUser() {
      this.userDetailsService.update(this.model)
          .then(
              user => this.model = user,
              error => {
                  this.router.navigate(['login']);
                  console.error('An error occurred in UserDetails component, navigating to login: ', error);
              }
          )
  }

  isUserLogged(): boolean {
      return this.authenticationService.isLogged();
  }
}
