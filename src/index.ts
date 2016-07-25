/// <reference path="../typings/index.d.ts"/>

import 'reflect-metadata';
import 'zone.js/dist/zone';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { JSONP_PROVIDERS, HTTP_PROVIDERS } from '@angular/http';
import { InitialConfig } from './app/services/init.service';

import './app/theme/theme.styl';

bootstrap(AppComponent, [
    InitialConfig,
    APP_ROUTER_PROVIDERS,
    JSONP_PROVIDERS,
    HTTP_PROVIDERS
])
    .catch(err => console.error(err));