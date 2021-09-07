import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseHttpClient } from 'src/app/Services/BaseService/BaseHttpClient';
@Injectable({ providedIn: 'root' })
export class DealMethodServices {
    constructor(private http: BaseHttpClient) {
    }
    GetDealMethodType(IsCost?: boolean) {
        return this.http.get(window.location.origin + '/ProductRequest/GetDealMethodType', {IsCost} , false);
    }
}
