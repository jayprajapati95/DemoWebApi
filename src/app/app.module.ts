import { DemoServiceService } from './demo-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoMapAirPollutionMapComponent } from './demo-map-air-pollution-map/demo-map-air-pollution-map.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoMapAirPollutionMapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    DemoServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
