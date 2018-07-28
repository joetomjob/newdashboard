import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdentityComponent } from './shared/components/identity/identity.component';
import { ConfigurationComponent } from './shared/components/configuration/configuration.component';
import { StateofchargeComponent } from './shared/components/stateofcharge/stateofcharge.component';
import { DriverstateComponent } from './shared/components/driverstate/driverstate.component';
import { BodycontrolsComponent } from './shared/components/bodycontrols/bodycontrols.component';
import { HvacComponent } from './shared/components/hvac/hvac.component';
import { FirmwareComponent } from './shared/components/firmware/firmware.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCommonModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    IdentityComponent,
    ConfigurationComponent,
    StateofchargeComponent,
    DriverstateComponent,
    BodycontrolsComponent,
    HvacComponent,
    FirmwareComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
