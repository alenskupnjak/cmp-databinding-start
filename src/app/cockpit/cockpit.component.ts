import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string, dodatak: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string, dodatak: string}>();
  newServerName = '';
  newServerContent = '';
  treciPodatak = '';

  constructor() {}


  ngOnInit() {
  }

  onAddServer(newServerName: HTMLInputElement) {
    this.serverCreated.emit({serverName: newServerName.value, serverContent: this.newServerContent, dodatak: this.treciPodatak});
  }

  onAddBlueprint(newServerName) {
    this.blueprintCreated.emit({serverName: newServerName.value, serverContent: this.newServerContent, dodatak: this.treciPodatak});
  }


}
