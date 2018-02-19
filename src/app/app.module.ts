import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { TapComponent } from './tap/tap.component';
import { PayComponent } from './pay/pay.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarJSModule } from 'ng-sidebarjs';
import { AccountComponent } from './account/account.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TravelComponent } from './travel/travel.component';
import {} from '@types/googlemaps';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TapComponent,
    PayComponent,
    MapComponent,
    AccountComponent,
    TravelComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatSlideToggleModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    SidebarJSModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: "API-KEY",
      libraries: ["places"]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }