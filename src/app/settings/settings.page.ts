import {Component, OnInit} from '@angular/core';
import {OrbitDBService} from "../services/OrbitDBService";

interface DbAuswahl {
    name: string;
    hash: string;
}


@Component({
    selector: 'app-settings',
    templateUrl: 'settings.page.html',
    styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit {

    protected datenbanken: Map<string, DbAuswahl> = new Map();

    database: any;

    constructor(private orbitDBService: OrbitDBService) {
        this.datenbanken.set("new", {name: 'New', hash: ''});
        this.datenbanken.set("default", {name: 'Default', hash: '********************'});
        this.datenbanken.set("home", {name: 'Home', hash: '#3434-83839002-28292'});
        this.datenbanken.set("office", {name: 'Office', hash: '#3434-83839002-66666'});
    }

    ngOnInit(): void {
        this.database = this.orbitDBService.getDB();
    }

}
