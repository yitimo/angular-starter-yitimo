import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import './styles/styles.scss';

declare const __ENVDATA__: {
  isDevServer: boolean,
  enableProdMode: boolean
};

if (__ENVDATA__ && __ENVDATA__.enableProdMode) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
