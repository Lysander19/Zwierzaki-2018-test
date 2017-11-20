import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {AuthenticationService} from "../../authentication/authentication.service";
import {User} from "../user";


@Injectable()
export class UserDetailsService {

    private userUrl = 'http://localhost:8080/user';

    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
    });

    constructor(private http: Http,
                private authenticationService: AuthenticationService) {
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred: ', error); // for demo only
        return Promise.reject(error.message || error);
    }


    getUser(name: string): Promise<User> {
        return this.http
            .post('http://localhost:8080/user/get', JSON.stringify({username: name}), {headers: this.headers})
            .toPromise()
            .then(response => response.json() as User)
            .catch(this.handleError);
    }

    create(name: string, password: string) {
        let user: any = {};
        return this.http
            .post('http://localhost:8080/user/registration', JSON.stringify({
                username: name,
                email: name,
                password: password
            }), {headers: this.headers})
            .toPromise()
            .catch(this.handleError)
    }

    update(user: User): Promise<User> {
        const url = 'http://localhost:8080/user/edit';
        return this.http
            .put(url, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(() => user)
            .catch(this.handleError);
    }

}
