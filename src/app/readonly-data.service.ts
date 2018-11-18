import { OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { pluck, switchMap, take, map } from 'rxjs/operators';
import { RequestBuffer } from './RequestBuffer';

export abstract class BufferedReadOnlyDataService implements OnDestroy {

    /**
     * Configure buffer to drain ever 200ms or when buffer reaches 5 items.
     */
    private _requestBuffer = new RequestBuffer<string>(200, 5);

    private _resolveSubject = new Subject<any>();
    /**
     *
     */
    constructor() {
        this.startWatchingBuffer();
    }

    /**
     * Called by the constructor
     * to attach listener to watch buffer
     * to fire the requests when buffer capacity
     * or buffer time is reached
     */
    private startWatchingBuffer() {
        this._requestBuffer.valueChanges.pipe(
            switchMap((values) => this._handleGet(values)),
        ).subscribe(next => {
           this._resolveSubject.next(next);
       });
    }

    /**
     * Request data by a key and returns the repponse.
     *
     * EG: 'sysinfo'
     * @param key key of data to retrieve.
     */
    get<TResponse>(key: string) {
        // Push the key into the request buffer.
        this._requestBuffer.buffer(key);

        // return the an observable which will
        // resolve the data value for th key
        return this._resolveSubject.pipe(
            take(1),
            map(getResponse => this._resultSelector(getResponse, key))
        ) as Observable<TResponse>;
    }

    protected abstract _resultSelector<TResponse>(data: any, key: string): TResponse;

    /**
     * Derived class will implement the exact details for how
     * to retrieve data for the keys.
     * @param keys - keys to retrieve, will come from the request buffer.
     */
    protected abstract _handleGet(keys: string[]): Observable<{[key: string]: any}>;

    ngOnDestroy() {
        this._resolveSubject.complete();
        this._requestBuffer.destroy();
    }

}
