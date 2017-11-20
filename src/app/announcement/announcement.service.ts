import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {AuthenticationService} from "../authentication/authentication.service";
import {Announcement} from "./announcement";


@Injectable()
export class AnnouncementService {

    private userUrl = 'http://localhost:8080/announcement';

    private headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
    });

    constructor(private http: Http,
                private authenticationService: AuthenticationService) {
    }

    getAnnouncement(id: string): Promise<Announcement> {
        return this.http
            .post('http://localhost:8080/announcement/get', JSON.stringify(
                {id: id}),
                {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Announcement)
            .catch(this.handleError);
    }

    getAllAnnouncements(): Promise<Announcement[]> {
        return this.http
            .post('http://localhost:8080/announcement/getAll', null,
                {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Announcement[])
            .catch(this.handleError);
    }

    addAnnouncement(title: string, description: string) {
        return this.http
            .post('http://localhost:8080/announcement/add', JSON.stringify(
                {
                    title: title,
                    description: description,
                }),
                {headers: this.headers})
            .toPromise()
            .catch(this.handleError)
    }

    updateAnnouncement(announcement: Announcement): Promise<Announcement> {
        const url = 'http://localhost:8080/edit';
        return this.http
            .put(url, JSON.stringify(announcement), {headers: this.headers})
            .toPromise()
            .then(() => announcement)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred: ', error); // for demo only
        return Promise.reject(error.message || error);
    }

}
