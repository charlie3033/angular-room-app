import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { App } from './app';
import { AppModule } from './app-module';
import { serverRoutes } from './app.routes.server';



@NgModule({
  imports: [AppModule],
  providers: [provideServerRendering(withRoutes(serverRoutes))],
  bootstrap: [App],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppServerModule {}
