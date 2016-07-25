/**
 * path src/app/app.component.ts
 * Created by dyam on 24/07/16.
 */

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'root',
    template: `
        <router-outlet></router-outlet>
     `,
    //styles: [require('./theme/theme.styl')],
    directives: [ROUTER_DIRECTIVES]
})
 export class AppComponent {

 }