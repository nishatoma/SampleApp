import { Component } from '@angular/core';

@Component({
    // Html selector
    selector: 'app-server',
    // Html file
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }

        .offline {
            color: yellow;
        }
    `]
})
export class ServerComponent {
    serverId = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getServerId() {
        return this.serverId;
    }

    getColor() {
        return (this.serverStatus === 'offline' ? 'red' : 'green');
    }
}

