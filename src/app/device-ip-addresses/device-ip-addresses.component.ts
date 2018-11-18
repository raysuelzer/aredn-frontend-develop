import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatusApiService, StatusPageSections } from '../status-api-servce';
import { DisposableComponent } from '../DisposableComponent';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'aredn-device-ip-addresses',
  templateUrl: './device-ip-addresses.component.html',
})
export class DeviceIpAddressesComponent extends DisposableComponent implements OnInit, OnDestroy {

  data: ArednApi.IPAddresses;

  constructor(private dataService: StatusApiService) {
    super();
  }

  ngOnInit() {
    this.dataService.get<ArednApi.IPAddresses>(StatusPageSections.ip)
    .pipe(
      takeUntil(this.disposer)
    )
    .subscribe(
      result => this.data = result,
      error => console.error(error),
      () => {/*done*/}
    );
  }

}
