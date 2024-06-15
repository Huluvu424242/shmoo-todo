import {Injectable, OnInit} from "@angular/core";
import {createOrbitDB} from '@orbitdb/core'
import {createLibp2p} from "helia/dist/src/utils/libp2p";
import {createHelia} from "helia";
import {bitswap} from "@helia/block-brokers";
import {webSockets} from "@libp2p/websockets";
import {all} from "@libp2p/websockets/filters";
import {webRTC} from "@libp2p/webrtc";
import {circuitRelayTransport} from "@libp2p/circuit-relay-v2";
import {noise} from "@chainsafe/libp2p-noise";
import {yamux} from "@chainsafe/libp2p-yamux";
import {identify} from "@libp2p/identify";
import {gossipsub} from "@chainsafe/libp2p-gossipsub";
import {LevelBlockstore} from 'blockstore-level';
import {MemoryDatastore} from "datastore-core";


@Injectable({providedIn: "root"})
export class OrbitdbService implements OnInit {

    private isBrowser = typeof window !== 'undefined';
    private DefaultLibp2pOptions = {
        datastore: new MemoryDatastore(),
        addresses: {
            listen: ['/ip4/0.0.0.0/tcp/0/ws']
        },
        transports: [
            webSockets({
                filter: all
            }),
            webRTC(),
            circuitRelayTransport({
                discoverRelays: 1
            })
        ],
        connectionEncryption: [noise()],
        streamMuxers: [yamux()],
        connectionGater: {
            denyDialMultiaddr: () => false
        },
        services: {
            identify: identify(),
            pubsub: gossipsub({allowPublishToZeroPeers: true})
        }
    };

    private DefaultLibp2pBrowserOptions = {
        datastore: new MemoryDatastore(),
        addresses: {
            listen: ['/webrtc']
        },
        transports: [
            webSockets({
                filter: all
            }),
            webRTC(),
            circuitRelayTransport({
                discoverRelays: 1
            })
        ],
        connectionEncryption: [noise()],
        streamMuxers: [yamux()],
        connectionGater: {
            denyDialMultiaddr: () => false
        },
        services: {
            identify: identify(),
            pubsub: gossipsub({allowPublishToZeroPeers: true})
        }
    }


    async ngOnInit(): Promise<void> {

        const orbitdb = await this.startOrbitDB()
        const db1 = await orbitdb.open('db1')
        await db1.add('hello world!')
        console.log(await db1.all())
        await this.stopOrbitDB(orbitdb)
    }

    async startOrbitDB(id?: string, identity?: string, identities?: string[], directory?: string) {
        const options = this.isBrowser ? this.DefaultLibp2pBrowserOptions : this.DefaultLibp2pOptions
        const libp2p = await createLibp2p({...options})
        directory = directory || '.'
        const blockstore = new LevelBlockstore(`${directory}/ipfs/blocks`)
        const ipfs = await createHelia({libp2p, blockstore, blockBrokers: [bitswap()]})
        return await createOrbitDB({ipfs, id, identity, identities, directory});
    }

    /**
     * Stops the OrbitDB peer and associated services.
     * @function stopOrbitDB
     * @param {Object} orbitdb The OrbitDB instance to stop.
     */
    async stopOrbitDB(orbitdb: any): Promise<void> {
        await orbitdb.stop();
        await orbitdb.ipfs.stop();
        await orbitdb.ipfs.blockstore.unwrap().unwrap().close();
    };


}