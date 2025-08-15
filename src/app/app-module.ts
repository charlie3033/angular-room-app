import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Rooms } from './rooms/rooms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsList } from './rooms/rooms-list/rooms-list';
import { Header } from './header/header';
import { Cont } from './cont/cont';
import { Employee } from "./employee/employee";
import { APP_CONFIG, APP_SERVICE_CONFIG } from './AppConfig/appconfig.service';



@NgModule({
  declarations: [
    App,
    Rooms,
    RoomsList,
    Header

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Cont,
    Employee
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    {
      provide: APP_SERVICE_CONFIG,
      useValue: APP_CONFIG,

    }
  ],
  bootstrap: [App]
})
export class AppModule { }
