import { Component, OnInit } from '@angular/core';
import { StatusApiService } from '../status-api-servce';

@Component({
  selector: 'aredn-status-page',
  templateUrl: './status-page.component.html',
})
export class StatusPageComponent implements OnInit {

  constructor(dataService: StatusApiService) {
    console.log(dataService);
  }

  ngOnInit() {
  }

}
