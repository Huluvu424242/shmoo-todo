// Quelle: https://www.ngdevelop.tech/loading-external-libraries-from-cdn-in-angular-application/
import { Injectable } from '@angular/core';
interface Scripts {
    name: string;
    src: string;
}
export const ScriptStore: Scripts[] = [
    { name: 'chainsafe', src: 'https://cdn.jsdelivr.net/npm/@chainsafe/libp2p-gossipsub@11.1.0/dist/index.min.js' },
    { name: 'helia', src: 'https://cdn.jsdelivr.net/npm/helia@4.0.0/dist/index.min.js' },
    { name: 'orbitdb', src: 'https://cdn.jsdelivr.net/npm/@orbitdb/core@2.0.1/dist/orbitdb.min.js' }
];

@Injectable({
    providedIn: 'root'
})
export class ScriptService {

    private scripts: any = {};

    constructor() {
        ScriptStore.forEach((script: any) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }

    load(...scripts: string[]) {
        const promises: any[] = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }

    loadScript(name: string) {
        return new Promise((resolve, reject) => {
            // resolve if already loaded
            if (this.scripts[name].loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            } else {
                // load script
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                script.onload = () => {
                    this.scripts[name].loaded = true;
                    console.log(`### Script: ${name} Loaded.`);
                    resolve({ script: name, loaded: true, status: 'Loaded' });
                };
                script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        });
    }
}