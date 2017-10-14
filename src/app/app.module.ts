import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.route';
import { WildcardRoutingModule } from './wildcard.route';
import { ENV_PROVIDERS } from './environment';
import { AppComponent } from './app.component';
import { YupModule } from 'yeui';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import '../styles/global.css';
import 'hammerjs';

import { HomeComponent } from './home';
import { NotFoundComponent } from './notfound';
import { YeuiModule } from './yeui';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent, HomeComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, YupModule,
    AppRoutingModule, YeuiModule, ReactiveFormsModule, FormsModule,
    WildcardRoutingModule // 此模块用作全局的缺省路由，所以必须放在imports数组的最后一个
  ],
  providers: [
    ENV_PROVIDERS
  ],
  entryComponents: []
})
export class AppModule {}
