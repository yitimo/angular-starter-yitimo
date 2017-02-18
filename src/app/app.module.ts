import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ENV_PROVIDERS } from './environment';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent],
    imports: [
        BrowserModule
    ],
    providers: [ ENV_PROVIDERS ]
})
export class AppModule {  }
