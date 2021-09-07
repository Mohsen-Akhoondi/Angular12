import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseHttpClient } from 'src/app/Services/BaseService/BaseHttpClient';
@Injectable({ providedIn: 'root' })
export class DealTypeService {
    constructor(private http: BaseHttpClient) {
    }
    GetDealTypeList() {
        return this.http.get(window.location.origin + '/DealType/GetDealTypeList', null , false);
    }
}
