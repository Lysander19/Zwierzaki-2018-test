import {Component} from "@angular/core";
import {UserDetailsService} from "../user/user-details/user-details.service";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './rating.component.html',
    styleUrls: ['rating.component.scss'],
    providers: [UserDetailsService]
})
export class HomeComponent {

}
