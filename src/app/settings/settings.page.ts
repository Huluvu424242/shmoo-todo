import {Component, OnInit} from '@angular/core';
import {OrbitDBService} from "../services/OrbitDBService";

@Component({
    selector: 'app-settings',
    templateUrl: 'settings.page.html',
    styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit{


    // protected auswahl:string ="default";

    private  auswahlOptionen = new Map<string, string>([
        ["New", "new"],
        ["Default", "default"]
    ]);


    database:any;
    constructor(private orbitDBService: OrbitDBService) {
    }

    ngOnInit(): void {
       this.database=this.orbitDBService.getDB();
    }

}
