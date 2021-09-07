import { Injectable } from '@angular/core';
import { BaseHttpClient } from './BaseHttpClient';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AnalayzePriceListService {
    constructor(private http: BaseHttpClient) {}

    GetAnalayzePriceList(FinYearCode: number , AnalayzePriceTypeCode: number ) {
        return this.http.get(window.location.origin + `/Home/GetAnalayzePriceList`, {FinYearCode, AnalayzePriceTypeCode});
    }
}
