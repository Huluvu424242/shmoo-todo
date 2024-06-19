import {Injectable, OnInit} from '@angular/core';
import {ScriptService} from "./ScriptService";

interface Database {
    address: string;
}

declare let Helia: any;
declare let OrbitDB: any;
declare let ChainsafeLibp2PGossipsub: any;

@Injectable({
    providedIn: "root"
})
export class OrbitDBService {

    private database: Database | null = null;

    constructor(private scriptService: ScriptService) {
        // init called by AppComponent OnInit
    }

    public getDB(){
        return this.database;
    }
    async init(): Promise<void> {
        console.log('Loading External Scripts ...');
        await this.scriptService.load('chainsafe', 'helia', 'orbitdb');
        this.database = await this.startOrbitDB();
    }

    async startOrbitDB(): Promise<Database> {
        const {createHelia, libp2pDefaults} = Helia
        const {createOrbitDB} = OrbitDB
        const {gossipsub} = ChainsafeLibp2PGossipsub
        const libp2pOptions = libp2pDefaults()

        libp2pOptions.services.pubsub = gossipsub()

        const ipfs = await createHelia({libp2p: libp2pOptions})
        const orbitdb = await createOrbitDB({ipfs})
        const db = await orbitdb.open('shmoo-todo')
        console.log(`OrbitDB Address: ${db.address}`);
        return db;
    }


}