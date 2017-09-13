import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YUPModule } from 'yeui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.route';
import { ENV_PROVIDERS } from './environment';
import { AppComponent } from './app.component';

import '../styles/global.css';

import { HomeModule } from './home';
import { YeuiModule } from './yeui';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, YUPModule,
    AppRoutingModule, HomeModule, YeuiModule
  ],
  providers: [
    ENV_PROVIDERS
  ]
})
export class AppModule {}
