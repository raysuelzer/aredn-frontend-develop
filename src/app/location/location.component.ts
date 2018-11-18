import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatusApiService, StatusPageSections } from '../status-api-servce';
import { DisposableComponent } from '../DisposableComponent';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'aredn-location',
  templateUrl: './location.component.html',
})
export class LocationComponent extends DisposableComponent implements OnInit, OnDestroy {

  data: ArednApi.Location;

  constructor(private dataService: StatusApiService) {
    super();
  }

  ngOnInit() {
    this.dataService.get<ArednApi.Location>(StatusPageSections.location)
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
