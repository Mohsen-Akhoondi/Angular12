import { Injectable } from '@angular/core';
import { BaseHttpClient } from '../BaseService/BaseHttpClient';


@Injectable({ providedIn: 'root' })
export class ProductPatternService {
  selectedObject: any;
  constructor(private http: BaseHttpClient) { }

  GetProductPatternRoots(RegionGroupCode) {
    return this.http.get(window.location.origin + '/CustomerOrder/GetProductPatternRoots', { RegionGroupCode});
  }

  GetProductPatternChildren(ProductPatternID) {
    return this.http.get(window.location.origin + '/CustomerOrder/GetProductPatternChildren', { ProductPatternID: ProductPatternID });
  }

  GetProductPatternProductsList( ProductPatternID) {
    return this.http.get(window.location.origin + '/CustomerOrder/GetProductPatternProductsList', { ProductPatternID: ProductPatternID });
  }

  DeleteProductPatternProductsList(ProductPatternProductsID,ModuleCode) {
    return this.http.get(window.location.origin + '/CustomerOrder/DeleteProductPatternProductsList', {
      ProductPatternProductsID,
      ModuleCode
    });
  }

SaveProductPattern(ProductPattern,ProductPatternID,ModuleCode) {
  return this.http.post(window.location.origin + '/CustomerOrder/SaveProductPattern',
      {
        ProductPattern,
        ProductPatternID,
        ModuleCode
      });
}

DeleteProductPatternEntry(ProductPatternID,ModuleCode) {
  return this.http.get(window.location.origin + '/CustomerOrder/DeleteProductPatternEntry', {ProductPatternID,ModuleCode});
}   
GetProductPatternEntry(ProductPatternID) {
  return this.http.get(window.location.origin + '/CustomerOrder/GetProductPatternEntry', {ProductPatternID});
}
UpdateProductPattern(ProductPattern,ProductPatternID,ModuleCode) {
  return this.http.post(window.location.origin + '/CustomerOrder/UpdateProductPattern',
      {
        ProductPattern,
        ProductPatternID,
        ModuleCode
      });
}
}