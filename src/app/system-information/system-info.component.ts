import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatusApiService, StatusPageSections } from '../status-api-servce';
import { DisposableComponent } from '../DisposableComponent';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'aredn-system-info',
  templateUrl: './system-info.component.html',
})
export class SystemInfoComponent extends DisposableComponent implements OnInit, OnDestroy {

  data: ArednApi.SysInfo;

  constructor(private dataService: StatusApiService) {
    super();
  }

  ngOnInit() {
    this.dataService.get<ArednApi.SysInfo>(StatusPageSections.sysinfo)
      .pipe(
        takeUntil(this.disposer)
      )
      .subscribe(
        result => this.data = result,
        error => console.error(error),
        () => {/*done*/ }
      );
  }

}
