import { Injectable } from '@angular/core';
import { BaseHttpClient } from './BaseHttpClient';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private http: BaseHttpClient) {}

    GetProductList(IsGoods: boolean , ARegionCode: number) {
        // tslint:disable-next-line:max-line-length
        return this.http.get(window.location.origin + '/Home/GetProductList' , {IsGoods: IsGoods , ARegionCode: ARegionCode}, false);
    }
}
