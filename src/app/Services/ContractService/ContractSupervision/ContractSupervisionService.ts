import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseHttpClient } from '../../BaseService/BaseHttpClient';
@Injectable({ providedIn: 'root' })
export class ContractSupervisionService {
    constructor(private http: BaseHttpClient) {
    }

    GetContractSupervisionList(ContractID: number,
                               ContractSupervisionCode: number = null,
                               IsLoad: boolean = true) {
        return this.http.get(window.location.origin + '/ContractSupervision/GetContractSupervisionList', { ContractID,
                                                                                                           ContractSupervisionCode
                                                                                                         }, IsLoad);
    }

    GetMaxContractSupervisionCode(ContractID: any) {
        return this.http.get(window.location.origin + '/ContractSupervision/GetMaxContractSupervisionCode', {ContractID});
    }

    GetSupervisionContractOrder(ContractID: number,
                                ContractSupervisionCode: number,
                                Date: any,
                                ProductIDs: any,
                                IsLoad: boolean ) {

    return this.http.get(window.location.origin + '/ContractSupervision/GetSupervisionContractOrder', {ContractID,
                                                                                                       ContractSupervisionCode,
                                                                                                       Date,
                                                                                                       ProductIDs
                                                                                                       },
                                                                                                       IsLoad);
   }

   SaveContractSupervision(ContractSupervision: any ,
                           ContractSupervisionItemList: any) {

return this.http.post(window.location.origin + '/ContractSupervision/SaveContractSupervision', {ContractSupervision,
                                                                                                ContractSupervisionItemList}
             );
   }

   DeleteContractSupervision(ContractSupervisionID: any) {
    return this.http.post(window.location.origin + '/ContractSupervision/DeleteContractSupervision', {ContractSupervisionID});
}

GetContractSupervision(ContractSupervisionID: any) {
    return this.http.get(window.location.origin + '/ContractSupervision/GetContractSupervision', {ContractSupervisionID});
}

UpdateContractSupervision(ContractSupervision: any ,
                          ContractSupervisionItemList: any ) {

return this.http.post(window.location.origin + '/ContractSupervision/UpdateContractSupervision', {ContractSupervision,
                                                                                                  ContractSupervisionItemList}
                     );
}

}
