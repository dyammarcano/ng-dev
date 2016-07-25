/**
 * path src/app/authentication/authentication.component.ts
 * Created by dyam on 24/07/16.
 */

import { Component } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';

@Component({
    selector: 'login',
    template: require('./login.html'),
    styles: [require('./login.styl')],
    directives: [],
    providers: [AuthenticateService]
})
export class AuthenticationComponent {

    private _credentials = {
        'username': 'dyam',
        'password': '0111100101101111'
    };

    constructor(private _authenticate: AuthenticateService) {

        validateUser() {
            this._authenticate.authenticateUser('http://192.168.1.50:3000/auth', this._credentials);
        })
    }
}