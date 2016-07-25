/**
 * path src/app/services/init.service.ts
 * Created by dyam on 25/07/16.
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InitialConfig {

    private _data: Object;

    constructor(private _http: Http) {
        this._http.get('../config/config.json')
            .map(response => response.json())
            .subscribe(data => this._data = data, err => console.log(err),
                () => console.log('Load config.json Completed'));
    }
}