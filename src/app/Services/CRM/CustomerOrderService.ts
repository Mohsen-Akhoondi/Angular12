import { Injectable } from '@angular/core';
import { BaseHttpClient } from '../BaseService/BaseHttpClient';


@Injectable({ providedIn: 'root' })
export class CustomerOrderService {
    constructor(private http: BaseHttpClient) {}

    DeleteCustomerOrder(CustomerOrderID,ModuleCode) {
        return this.http.get(window.location.origin + '/CustomerOrder/DeleteCustomerOrder', {CustomerOrderID,ModuleCode});
    }   

    GetOrderTypeList() {
        return this.http.get(window.location.origin + '/CustomerOrder/GetOrderTypeList', false);
    }

    GetCustomerOrder(CustomerOrderID) {
        return this.http.get(window.location.origin + '/CustomerOrder/GetCustomerOrder', { CustomerOrderID });
    }
    GetCustomerOrderList(RegionCode) {
        return this.http.get(window.location.origin + '/CustomerOrder/GetCustomerOrderList', { RegionCode});
    }

    SaveCustomerOrder(CustomerOrder, CustomerOrderItemList, ModuleCode) {
        return this.http.post(window.location.origin + '/CustomerOrder/SaveCustomerOrder',
            {
                CustomerOrder,
                CustomerOrderItemList,
                ModuleCode
            });
    }

    GetCustomerOrders(
        FromOrderRequestCode = null,
        ToOrderRequestCode = null,
        FromOrderRequestDate = null,
        ToOrderRequestDate = null,
        CustomerID = null) {
        return this.http.get(window.location.origin + '/CustomerOrder/GetCustomerOrders', 
        { FromOrderRequestCode,
            ToOrderRequestCode,
            FromOrderRequestDate,
            ToOrderRequestDate,
            CustomerID });
    }

}