/**
 * path src/app/environment.ts
 * Created by dyam on 25/07/16.
 */

import { enableProdMode } from '@angular/core';

if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}