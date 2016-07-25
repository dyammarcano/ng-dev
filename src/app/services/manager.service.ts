/**
 * path src/app/services/manager.service.ts
 * Created by dyam on 25/07/16.
 *
 * Authentication router manager Service for CanActivate method.
 */

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthManager implements CanActivate {

    constructor(private _router: Router) {
        /** */
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(next.url[0].path == 'first') {
            if(window.localStorage.getItem('token')) {
                console.log('You are already logged in');
                return false;
            } else {
                return true;
            }
        }

        if(window.localStorage.getItem('token')) {
            return true;
        }

        console.log('You must be logged in');
        this.router.navigate(['/first']);
        return false;
    }
}
