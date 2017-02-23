import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ENV_PROVIDERS } from './environment';

import { AudioModule } from './audio/audio.module';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AudioModule
    ],
    providers: [ ENV_PROVIDERS ]
})
export class AppModule { }
