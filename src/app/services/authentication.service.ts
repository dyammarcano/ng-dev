/**
 * path src/app/services/authentication.ts
 * Created by dyam on 25/07/16.
 */

import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class AuthenticateService {

    private _isAuthenticated: boolean = false;
    private _credentials = [];

    constructor(private _http:Http) {
        /** */
    }

    authenticateUser(_url:string, _data:string[]) {

        let body = 'username=' + _data[username] + '&password=' + _data[password];

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(_url, body, {
            headers: headers
        })
            .map(response => response.json())
            .subscribe(
                response => this.storeToken(response.token),
                this.logError,
                () => console.log('Authentication Complete')
            );
    }

    storeToken(data: string) {
        window.localStorage.setItem('token', data);
        this._isAuthenticated = true;
    }

    insertData(data:string) {
        this._credentials.push(data);
    }
}
