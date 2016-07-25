/// <reference path="../typings/index.d.ts"/>

import 'reflect-metadata';
import 'zone.js/dist/zone';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { JSONP_PROVIDERS } from '@angular/http';

import './index.styl';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS, JSONP_PROVIDERS
])
    .catch(err => console.error(err));