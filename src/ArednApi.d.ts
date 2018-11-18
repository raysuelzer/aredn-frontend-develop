declare namespace ArednApi {

    interface ApiResponse {
        pages: {
            status?: StatusPage
        };
    }

    interface StatusPage {
        meshrf?: MeshRf;
        memory?: Memory;
        storage: Storage;
        sysinfo: SysInfo;
        location: Location;
        oslr: OSLR;
        ip: IPAddresses;
    }

    interface SysInfo {
        date: string;
        uptime: string;
        time: string;
        model: string;
        // TODO: Remove
        location?: [string, string];
        loads: number[];
        node: string;
        firmwareversion: string;
    }

    interface Storage {
        rootFree: number;
        tmpFree: number;
    }

    interface Memory {
        freeram: string;
        sharedram: string;
        bufferram: string;
    }

    interface MeshRf {
        band: string;
        ssid: string;
        channel: string;
        device: string;
        chanbw: string;
        frequency: string;
    }

    interface Location {
        latitude: string;
        longitude: string;
        gridsquare: string;
    }

    interface OSLR {
        nodes: string;
        entries: string;
    }

    interface IPAddresses {
        wifi: string;
        wan: string;
        gateway: string;
        lan: string;
    }

}