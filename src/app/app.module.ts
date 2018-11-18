import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusPageComponent } from './status-page/status-page.component';
import { DeviceIpAddressesComponent } from './device-ip-addresses/device-ip-addresses.component';
import { MeshRfComponent } from './mesh-rf/mesh-rf.component';
import { SystemInfoComponent } from './system-information/system-info.component';
import { LocationComponent } from './location/location.component';

const CardComponents = [
  DeviceIpAddressesComponent,
  MeshRfComponent,
  SystemInfoComponent,
  LocationComponent
];

@NgModule({
  declarations: [
    AppComponent,
    StatusPageComponent,
    ...CardComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
