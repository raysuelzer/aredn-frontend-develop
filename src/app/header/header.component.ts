import { Component, OnDestroy, OnInit } from '@angular/core';
import { DisposableComponent } from '../DisposableComponent';
import { StatusPageDataService } from '../status-page-data.service';

@Component({
  selector: 'aredn-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent extends DisposableComponent implements OnInit, OnDestroy {

  data: ArednApi.IPAddresses;

  constructor(private dataService: StatusPageDataService) {
    super();
  }

  ngOnInit() {
  }

}
