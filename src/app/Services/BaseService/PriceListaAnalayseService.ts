import { Injectable } from '@angular/core';
import { BaseHttpClient } from './BaseHttpClient';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PriceListaAnalayseService {
    constructor(private http: BaseHttpClient) {}

    GetPriceListAnalayse(ID: number , AnalaysePriceTypeCode: number) {
        return this.http.get(window.location.origin + '/Home/GetPriceListAnalayse', {ID , AnalaysePriceTypeCode} );
    }
}
