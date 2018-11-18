import { ReadOnlyDataService } from './core/readonly-data.service';
import { MockApiDataLink } from './data-links/mock-api-data-link';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StatusPageDataService extends ReadOnlyDataService<ArednApi.ApiResponse> {
    constructor() {
        super(new MockApiDataLink('status'));
    }
}
