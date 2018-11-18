import { Component, OnInit, OnDestroy } from '@angular/core';
import { StatusApiService, StatusPageSections } from '../status-api-servce';
import { DisposableComponent } from '../DisposableComponent';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'aredn-mesh-rf',
  templateUrl: './mesh-rf.component.html',
})
export class MeshRfComponent extends DisposableComponent implements OnInit, OnDestroy {

  data: ArednApi.MeshRf;

  constructor(private dataService: StatusApiService) {
    super();
  }

  ngOnInit() {
    this.dataService.get<ArednApi.MeshRf>(StatusPageSections.meshrf)
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
