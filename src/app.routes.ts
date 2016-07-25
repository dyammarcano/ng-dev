/**
 * path src/app/app.routes.ts
 * Created by dyam on 24/07/16.
 */

import { provideRouter, RouterConfig } from '@angular/router';
import { HelloComponent } from './app/hello';
import { PreloaderComponent } from './app/partials/preloader';
import { AuthManager } from './app/services/manager.service';

// Route config let's you map routes to components
const routes: RouterConfig = [
  {
    path: '',
    component: HelloComponent
  },
  {
    path: 'load',
    component: PreloaderComponent, canActivate: [AuthManager]
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];