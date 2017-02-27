import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ENV_PROVIDERS } from './environment';

import { AudioModule } from 'ng2-firstyitimo';
import { AudioService } from 'ng2-firstyitimo';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AudioModule
    ],
    providers: [ ENV_PROVIDERS, AudioService ]
})
export class AppModule { }
