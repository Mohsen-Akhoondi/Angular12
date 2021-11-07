import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';

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
