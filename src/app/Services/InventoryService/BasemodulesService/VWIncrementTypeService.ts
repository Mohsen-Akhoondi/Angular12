import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseHttpClient } from '../../BaseService/BaseHttpClient';

@Injectable({ providedIn: 'root' })
export class VWIncrementTypeService {
    constructor(private http: BaseHttpClient) {
    }

    GetVWIncrementType() {
        return this.http.get(window.location.origin + '/ProductRequest/GetVWIncrementType' , null);
    }
}
