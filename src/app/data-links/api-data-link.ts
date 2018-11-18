import { Observable, of as ObservableOf } from 'rxjs';
import { IDataLink } from '../core/IDataLink';
import { HttpClient } from '@angular/common/http';

export class ApiDataLink implements IDataLink<ArednApi.ApiResponse> {
    /**
     *
     */
    constructor(private page: string, private http: HttpClient) {
    }

    selectResult<TResponse>(input: ArednApi.ApiResponse, key: string): TResponse {
        return input['pages'][this.page][key] as TResponse;
    }
    /**
     * Handles fetching data
     */
    resolveData(keys: string[]): Observable<ArednApi.ApiResponse> {
        return ObservableOf({
            // tslint:disable
            "pages": {
              "status": {
                "meshrf": {
                  "band": "",
                  "ssid": "AREDN-5-v3",
                  "channel": "174",
                  "device": "radio0",
                  "chanbw": "5",
                  "frequency": ""
                },
                "memory": {
                  "freeram": 31956,
                  "sharedram": 216,
                  "bufferram": 3380
                },
                "storage": {
                  "rootfree": 752,
                  "tmpfree": 30276
                },
                "sysinfo": {
                  "date": "Sat Nov 17 2018",
                  "uptime": "0 days, 1:53:20",
                  "time": "23:36:47 UTC",
                  "model": "NanoStation M5 XW ",
                  "location": [],
                  "loads": [
                    0.050000000000000003,
                    0.12,
                    0.11
                  ],
                  "node": "KM6WUH-RB",
                  "firmware_version": "438-a997ef9"
                },
                "location": {
                  "lon": "-118.388286",
                  "lat": "33.824437",
                  "gridsquare": ""
                },
                "olsr": {
                  "nodes": "387",
                  "entries": "1281"
                },
                "ip": {
                  "wifi": "10.194.46.248",
                  "wan": "10.0.0.130",
                  "gateway": "10.0.0.1",
                  "lan": "10.34.239.129"
                }
              }
            }
            // tslint:enable
          });
    }


}
