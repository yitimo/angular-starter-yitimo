import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core';
import { SharedModule } from '../shared';

import { AppRoutingModule } from './app.route';
import { AppComponent } from './app.component';
import { HomeComponent, NotfoundModule } from '../pages';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// for i18n
function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
const translateModuleConfig = {
    loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
    }
};

@NgModule({
    declarations: [
        AppComponent, HomeComponent
    ],
    imports: [
        BrowserModule, SharedModule, CoreModule,
        TranslateModule.forRoot(translateModuleConfig),
        AppRoutingModule,
        NotfoundModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        private translate: TranslateService
    ) {
        this.translate.setDefaultLang('en');
    }
}
