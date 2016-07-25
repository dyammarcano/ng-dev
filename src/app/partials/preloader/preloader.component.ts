/**
 * path src/app/partials/preloader/preloader.component.ts
 * Created by dyam on 24/07/16.
 */

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'preloader',
    //template: require('./preloader.html'),
    styles: [require('./preloader.styl')],
    encapsulation: ViewEncapsulation.Native
})
export class PreloaderComponent {
    public preloaderMessage: string;

    constructor() {
        this.preloaderMessage = 'cargando';
    }
}
