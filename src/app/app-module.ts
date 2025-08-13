import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Rooms } from './rooms/rooms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomsList } from './rooms/rooms-list/rooms-list';
import { Header } from './header/header';
import { Cont } from './cont/cont';



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
    BrowserAnimationsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
