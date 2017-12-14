import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.route';
import { WildcardRoutingModule } from './wildcard.route';
import { AppComponent } from './app.component';

import '../styles/global.css';
import '../styles/global.scss';

import 'hammerjs';
import { HomeComponent } from './home';
import { NotFoundComponent } from './notfound';
import { SharedModule } from './-shared';
import { CoreModule } from './-core';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent, HomeComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    SharedModule, CoreModule,
    AppRoutingModule,
    WildcardRoutingModule // 此模块用作全局的缺省路由，所以必须放在imports数组的最后一个
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
