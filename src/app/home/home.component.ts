import {Component} from "@angular/core";
import {UserDetailsService} from "../user/user-details/user-details.service";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['home.component.scss'],
    providers: [UserDetailsService]
})
export class HomeComponent {

}
