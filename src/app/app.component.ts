import {Component, OnInit} from '@angular/core';
import {OrbitDBService} from "./services/OrbitDBService";

declare function greet(): void;

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

    constructor(private orbitDBService:OrbitDBService) {
    }


    async ngOnInit(): Promise<void> {
        greet();
        await this.orbitDBService.init();
    }
}
