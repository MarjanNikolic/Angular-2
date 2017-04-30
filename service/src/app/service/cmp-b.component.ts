import { Component, OnInit } from '@angular/core';

import { LogService } from './log.service';
import { DataService } from './data.service';

@Component({
  selector: 'si-cmp-b',
  templateUrl: './cmp-b.component.html'
})
export class CmpBComponent implements OnInit {
    value = '';
    items: string[] = [];

    constructor (private logService: LogService, private dataService: DataService) {}

    onLog(value: string) {
      this.logService.writeToLog(value);
    }

    onStore(value: string) {
      this.dataService.addData(value);
    }

    onGet() {
      this.items = this.dataService.getData().slice(0);
    }

    onSend(value: string) {
   
    }

    ngOnInit() {
      this.dataService.pushedData.subscribe(
        data => this.value = data
      );
  }
}