import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

<<<<<<< HEAD
=======
import { validateConfig } from '@angular/router/src/config';
>>>>>>> cc89504d3d93049e4c1f456b13459f2807c870e3
import { Observable, observable } from 'rxjs';
import { BaseHttpClient } from './BaseHttpClient';

@Injectable({ providedIn: 'root' })
export class AuthService {
    IsAuth = false;
    constructor(private http: BaseHttpClient) { }

    CheckAuth() {
     return this.http.get(window.location.origin + '/Account/IsAuthenticate', null);
    }
}
