import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseHttpClient } from 'src/app/Services/BaseService/BaseHttpClient';
@Injectable({ providedIn: 'root' })
export class ContractPayDetailsService {
  constructor(private http: BaseHttpClient) {
  }
  GetContractDetails(AContractID: any) {
    return this.http.get(window.location.origin + '/ContractPay/GetContractDetails', { AContractID });
  }
  GetContractOperationName(AContractOperationID: any) {
    return this.http.get(window.location.origin + '/ContractPay/GetContractOperationName', { AContractOperationID });
  }
  GetMaxContractPayNo(ACostFactorID: any) {
    return this.http.get(window.location.origin + '/ContractPay/GetMaxContractPayNo', { ACostFactorID });
  }
  GetContractPayType() {
    return this.http.get(window.location.origin + '/ContractPay/GetContractPayType', null);
  }
  CheckContractOperation(CostFactorID: number) {
    return this.http.get(window.location.origin + '/ContractPay/CheckContractOperation', { CostFactorID });
  }
  GetContractOrder(ContractID: number,
    ContractPayNo: string,
    Date: any,
    ProductIDs: any,
    IsContractPayEstimate: number,
    IsLoad: boolean ,
    ContractOperationID = null) {

    return this.http.get(window.location.origin + '/Contract/GetContractOrder', {
      ContractID,
      ContractPayNo,
      Date,
      ProductIDs,
      IsContractPayEstimate,
      ContractOperationID
    },
      IsLoad);
  }

  GetLastContractOrder(ContractID: number, HasOpenRequest: boolean) {
    return this.http.get(window.location.origin + '/Contract/GetLastContractOrder', { ContractID, HasOpenRequest });
  }

  SaveContractPay(ContractPay: any,
    ContractPayItemList: any,
    BankList: any,
    HaveBank: any,
    HasCheck25Percent = false,
    CheckMultiInvoiceType = false ,
    ModuleCode , 
    ModuleViewTypeCode) {

    return this.http.post(window.location.origin + '/Contract/SaveContractPay', {
      ContractPay,
      ContractPayItemList,
      BankList,
      HaveBank,
      HasCheck25Percent,
      CheckMultiInvoiceType,
      ModuleCode,
      ModuleViewTypeCode
    });
  }

  GetContractPay(CostFactorID: any, ContractAgentCode: number) {
    return this.http.get(window.location.origin + '/ContractPay/GetContractPay', { CostFactorID, ContractAgentCode });
  }

  UpdateContractPay(ContractPay: any,
    ContractPayItemList: any,
    ContractAgentCode: number,
    ModuleCode: number,
    HasCheck25Percent = false,
    CheckMultiInvoiceType = false,
    BankList: any,
    HaveBank: any,
    ModuleViewTypeCode) {

    return this.http.post(window.location.origin + '/Contract/UpdateContractPay', {
      ContractPay,
      ContractPayItemList,
      ContractAgentCode,
      ModuleCode,
      BankList,
      HaveBank,
      HasCheck25Percent,
      CheckMultiInvoiceType,
      ModuleViewTypeCode
    }
    );
  }

  DeleteContractPay(CostFactorID: any) {
    return this.http.post(window.location.origin + '/Contract/DeleteContractPay', { CostFactorID });
  }
  GetContractAgent() {
    return this.http.get(window.location.origin + '/Contract/GetContractAgent', null);
  }

  GetContractPrsonEstimate(ContractID: number,
    ContractPayNo: string,
    Date: any,
    StratDate: any,
    ProductID: any,
    PersonIDs: any,
    IsLoad: boolean
  ) {
    return this.http.get(window.location.origin + '/Contract/GetContractPrsonEstimate',
      {
        ContractID,
        ContractPayNo,
        Date,
        StratDate,
        ProductID,
        PersonIDs
      },
      IsLoad);
  }

  GetContractPayCoefList(ContractPayID: number) {
    return this.http.get(window.location.origin + '/ContractPay/GetContractPayCoefList', { ContractPayID });
  }
  SaveContractPayCoefList(ContractPayID: number, ContractPayCoefList: any) {
    return this.http.post(window.location.origin + '/ContractPay/SaveContractPayCoefList', {
      ContractPayID,
      ContractPayCoefList
    });
  }
  GetSumContractCoef(ContractID: number) {
    return this.http.get(window.location.origin + '/Contract/GetSumContractCoef', { ContractID });
  }
  GetRegioNameByCode(RegionCode: number) {
    return this.http.get(window.location.origin + '/Contract/GetRegioNameByCode', { RegionCode });
  }
  GetFirstContractOrder(ContractID: number) {
    return this.http.get(window.location.origin + '/Contract/GetFirstContractOrder', { ContractID });
  }
  GetContractTimeExtension(ContractID: number, CurrProductRequestItemList: any, CostFactorID: number = null) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(window.location.origin + '/Contract/GetContractTimeExtension', { ContractID, CurrProductRequestItemList, CostFactorID });
  }
  GetRequestItemEntityList(ContractID, ProductID) {
    return this.http.get(window.location.origin + '/ContractPay/GetRequestItemEntityList'
      , { ContractID, ProductID });
  }
  GetRequestItemEntityItemList(ID) {
    return this.http.get(window.location.origin + '/ContractPay/GetRequestItemEntityItemList'
      , { ID });
  }
  GetBeforeLastContractOrder(ContractID: number) {
    return this.http.get(window.location.origin + '/Contract/GetBeforeLastContractOrder', { ContractID });
  }
  GetSumContractPayEstimateQty(CostContractID: number, ContractPayDate: any, ContractPayID?: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(window.location.origin + '/Contract/GetSumContractPayEstimateQty', { CostContractID, ContractPayDate, ContractPayID });
  }
  GetAmountOfCoef(ContractID: number, ContractOrderItemID: number, Amount: number) {
    return this.http.get(window.location.origin + '/Contract/GetAmountOfCoef',
      { ContractID, ContractOrderItemID, Amount });
  }

  GetIsVolumetric(ContractID: number) {
    return this.http.get(window.location.origin + '/Contract/GetIsVolumetric',
      { ContractID });
  }
  GetContractOrderByPagination(
    SearchOption: number,
    ARegionCode: number,
    SearchTerm: string,
    PageNumber: number,
    PageSize: number,
    ContractID: number,
    ContractPayNo: string,
    Date: any,
    ProductIDs: any,
    ProductTypeCode: any,) {

    return this.http.get(window.location.origin + '/Contract/GetContractOrderByPagination', {
      SearchOption,
      ARegionCode,
      SearchTerm,
      PageNumber,
      PageSize,
      ContractID,
      ContractPayNo,
      Date,
      ProductIDs,
      ProductTypeCode
    });
  }
  GetProductAmount(ProductID, PriceID) {
    return this.http.get(window.location.origin + '/Contract/GetProductAmount', {
      ProductID, PriceID,
    });
  }
  SaveContractPayAmount(ContractPay: any) {
    return this.http.post(window.location.origin + '/Contract/SaveContractPayAmount', {
      ContractPay
    });
  }
  GetUnderTakeItemsList(ContractPayCostFactorID) {
    return this.http.get(window.location.origin + '/ContractPay/GetUnderTakeItemsList', {
      ContractPayCostFactorID
    });
  }
  GetContractAgents() {
    return this.http.get(window.location.origin + '/Contract/GetContractAgents', null);
  }
  CheckIsOver25Percent(ContractID, ProductID, ContractPayNo, ContractPayDate, PriceListPatternIDs) {
    return this.http.get(window.location.origin + '/ContractPay/CheckIsOver25Percent', {
      ContractID, ProductID, ContractPayNo, ContractPayDate, PriceListPatternIDs
    });
  }
  GetcostCenterActorName(CostFactorID: number, SelectedContractID: number) {
    return this.http.get(window.location.origin + '/Contract/GetcostCenterActorName', {
      CostFactorID,
      SelectedContractID
    });
  }
  GetSubCostCenterNameBycntractCostFactorID(CostFactorID: number, SelectedContractID: number) {
    return this.http.get(window.location.origin + '/Home/GetSubCostCenterNameBycntractCostFactorID', {
      CostFactorID,
      SelectedContractID
    });
  }
  GetContractOrderByProductID(ContractID: number,
    Date: any,
    ProductID: any,
    IsLoad: boolean) {

    return this.http.get(window.location.origin + '/Contract/GetContractOrderByProductID', {
      ContractID,
      Date,
      ProductID
    },
      IsLoad);
  }
}
