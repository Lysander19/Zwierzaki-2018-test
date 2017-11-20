import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AnnouncementService} from "./announcement.service";

@Component({
    moduleId: module.id,
    selector: 'announcement',
    templateUrl: './announcement.component.html',
    styleUrls: ['./announcement.component.scss'],
    providers: []
})
export class AnnouncementComponent implements OnInit {
    model: any = {};

    constructor(private router: Router, private announcementService: AnnouncementService) {
    }

    ngOnInit() {
        this.announcementService.addAnnouncement("test1", "test2")
        console.log(this.announcementService.getAllAnnouncements());
    }

    addAnnoucment() {
        console.log('add');
        return null;
    }

    editAnnoucment() {
        console.log('edit');
        return null;
    }

    removeAnnoucment() {
        console.log('remove');
        return null;
    }
}
