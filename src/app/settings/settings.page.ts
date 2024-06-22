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

    getOrderedDbAuswahlen():string[]{
        const orderedKeys:string[] = [];
        orderedKeys.push('new');
        orderedKeys.push('default');
        this.datenbanken.forEach((value,key)=>{
            if(key==='new'|| key==='default'){
                // diese Keys sind schon enthalten
            }else{
                orderedKeys.push(key);
            }
        });
        return orderedKeys;
    }

    database: any;

    constructor(private orbitDBService: OrbitDBService) {
        this.datenbanken.set("office", {name: 'Office', hash: '#3434-83839002-66666'});
        this.datenbanken.set("new", {name: 'New', hash: ''});
        this.datenbanken.set("default", {name: 'Default', hash: '********************'});
        this.datenbanken.set("home", {name: 'Home', hash: '#3434-83839002-28292'});
    }

    ngOnInit(): void {
        this.database = this.orbitDBService.getDB();
    }

}
