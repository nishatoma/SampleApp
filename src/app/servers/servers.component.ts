import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  private serverCreationStatus: string = 'No server was created!';
  private serverName: string = '';
  serverCreated: boolean = false;
  servers: string[] = ["Server 1", "RU", "Moya Server"];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  setServerCreationStatus(status: string) {
    this.serverCreationStatus = status;
  }

  getServerCreationStatus(): string {
    return this.serverCreationStatus;
  }

  setServerName(name: string) {
    this.serverName = name;
  }

  getServerName(): string {
    return this.serverName;
  }

  onServerCreated() {
    if (this.serverName.length > 0) {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.setServerCreationStatus("Server was created! Server is " + this.serverName);
    }
  }

  onUpdateServerName(event: Event) {
    this.setServerName((<HTMLInputElement>event.target).value);
  }

}
