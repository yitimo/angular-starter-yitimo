import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ENV_PROVIDERS } from './environment';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [ ENV_PROVIDERS ]
})
export class AppModule {  }
