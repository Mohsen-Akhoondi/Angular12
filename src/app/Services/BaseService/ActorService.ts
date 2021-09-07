import { Injectable } from '@angular/core';
import { BaseHttpClient } from './BaseHttpClient';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActorService {
  constructor(private http: BaseHttpClient) { }

  GetPersonList(RoleID: number, RegionCode: number = null, HaveLoading: boolean) {
    return this.http.get(window.location.origin + '/Home/GetPersonList', { RoleID, RegionCode }, HaveLoading);
  }
  GetPhoneNumberVerifyCode(PhoneNumber) {
    return this.http.get(window.location.origin + '/Account/PhoneNumberVerifyCode', { PhoneNumber });
  }
  CheckValidatePhoneNumberVerifyCode(VerifyCode) {
    return this.http.get(window.location.origin + '/Account/CheckValidatePhoneNumberVerifyCode', { PhoneNumberVerifyCode: VerifyCode });
  }
  GetConsultPersonDetails(IdentityNo) {
    return this.http.get(window.location.origin + '/Contract/GetConsultPersonDetails', { IdentityNo });
  }
  SaveConsultPersonDetaile(ConsultPersonList: any) {
    return this.http.post(window.location.origin + '/Contract/SaveConsultPersonDetaile', { ConsultPersonList });
  }

  GetPersonListAll() {
    return this.http.get(window.location.origin + '/Home/GetPersonListAll', null);
  }

  GetPersonPaging(PageNumber, PageSize,
    SearchTerm, SearchOption,
    ActorID = null, RegionCode: number = null) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(window.location.origin + '/Home/GetPersonPaging', {
      PageNumber, PageSize, SearchTerm, SearchOption, ActorID, RegionCode
    }, false);
  }
  GetPersonPagingByActorIdList(PageNumber, PageSize, SearchTerm, SearchOption, ActorID = null,
    RegionCode: number = null) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(window.location.origin + '/Home/GetPersonPagingByActorIdList', {
      PageNumber, PageSize, SearchTerm,
      SearchOption, ActorID, RegionCode
    }, false);
  }
  GetPersonsWidthUsersPaging(PageNumber, PageSize, SearchTerm, SearchOption, IsExternal: any, ActorID = null,
    RegionCode: number = null) {
    return this.http.get(window.location.origin + '/Home/GetPersonsWidthUsersPaging', {
      PageNumber, PageSize, SearchTerm, SearchOption, IsExternal, ActorID, RegionCode
    }, false);
  }
  GetAllPersonsPaging(PageNumber, PageSize, SearchTerm, SearchOption, ActorID = null, RegionCode: number = null) {
    return this.http.get(window.location.origin + '/Home/GetAllPersonsPaging', {
      PageNumber, PageSize, SearchTerm, SearchOption, ActorID, RegionCode
    }, false);
  }
  GetActorPagingBasedOnRegion(PageNumber,
    PageSize,
    SearchTerm,
    SearchOption,
    ActorType,
    IsUseProviders,
    IsLoading,
    ActorID = null) {
    return this.http.get(window.location.origin + '/Home/GetActorPagingBasedOnRegion', {
      PageNumber,
      PageSize,
      SearchTerm,
      SearchOption,
      ActorType,
      IsUseProviders,
      ActorID
    }, IsLoading);
  }
  GetAllPersonsPagingByRoleID(
    PageNumber,
    PageSize,
    SearchTerm,
    SearchOption,
    ActorType,
    IsUseProviders,
    IsLoading,
    ActorID = null) {
    return this.http.get(window.location.origin + '/Home/GetAllPersonsPagingByRoleID', {
      PageNumber,
      PageSize,
      SearchTerm,
      SearchOption,
      ActorType,
      IsUseProviders,
      ActorID
    }, IsLoading);
  }
  GetActorPaging(PageNumber,
    PageSize,
    SearchTerm,
    SearchOption,
    ActorType,
    IsUseProviders,
    IsLoading,
    ActorID = null,
    IdentityNo = null,
    RegionCode?,
    IsRelatedCorporate = false,
    CostFactorID = null,
    HasAllowState = false,
    NotShowMuncipalityPersonel: boolean = null) {
    return this.http.get(window.location.origin + '/Home/GetActorPaging', {
      PageNumber,
      PageSize,
      SearchTerm,
      SearchOption,
      ActorType,
      IsUseProviders,
      ActorID,
      IdentityNo,
      RegionCode,
      IsRelatedCorporate,
      CostFactorID,
      HasAllowState,
      NotShowMuncipalityPersonel
    }, IsLoading);
  }
  GetAllActorsPaging(PageNumber,
    PageSize,
    SearchTerm,
    SearchOption,
    ActorType,
    IsUseProviders,
    IsLoading,
    ActorID = null,
    IdentityNo = null) {
    return this.http.get(window.location.origin + '/Home/GetAllActorsPaging', {
      PageNumber,
      PageSize,
      SearchTerm,
      SearchOption,
      ActorType,
      IsUseProviders,
      ActorID,
      IdentityNo
    }, IsLoading);
  }
  GetActorByIdentityNo(IdentityNo: string, BirthDate: string, IsPerson: boolean, PostCode) {
    return this.http.get(window.location.origin + '/Contract/GetActorByIdentityNo', { IdentityNo, BirthDate, IsPerson, PostCode });
  }
  GetActorByActorID(ActorID: any, ContractorType: any) {
    return this.http.get(window.location.origin + '/Contract/GetActorByActorID', { ActorID, ContractorType });
  }

  SavePerson(PersonObject: any, ModuleCode: number) {
    return this.http.post(window.location.origin + '/Contract/SavePerson', { PersonObject, ModuleCode });
  }

  SaveCorporate(CorporateObject: any, ModuleCode: number) {
    return this.http.post(window.location.origin + '/Contract/SaveCorporate', { CorporateObject, ModuleCode });
  }

  UpdateActorPerson(PersonObject: any) {
    return this.http.post(window.location.origin + '/Actor/UpdateActorPerson', { PersonObject });
  }

  SaveActorPerson(PersonObject: any) {
    return this.http.post(window.location.origin + '/Actor/SaveActorPerson', { PersonObject });
  }

  GetPersonByIdentityNo(IdentityNo: any, PersonID, RegionCode) {
    return this.http.get(window.location.origin + '/Actor/GetPersonByIdentityNo', { IdentityNo, PersonID, RegionCode });
  }

  GetCorporateByIdentityNo(IdentityNo: any) {
    return this.http.get(window.location.origin + '/Actor/GetCorporateByIdentityNo', { IdentityNo });
  }
  GetCorporateSupplierByIdentityNo(IdentityNo: any, CorporateID, RegionCode) {
    return this.http.get(window.location.origin + '/Actor/GetCorporateSupplierByIdentityNo', { IdentityNo, CorporateID, RegionCode });
  }
  GetCorporateByInquiry(IdentityNo: any, PostCode) {
    return this.http.get(window.location.origin + '/Actor/GetCorporateByInquiry', { IdentityNo, PostCode });
  }
  UpdateActorCorporate(CorporateObject: any, CorporatePositionList): any {
    return this.http.post(window.location.origin + '/Actor/UpdateActorCorporate', { CorporateObject, CorporatePositionList });
  }

  SaveActorCorporate(CorporateObject: any, CorporatePositionList: any) {
    return this.http.post(window.location.origin + '/Actor/SaveActorCorporate', { CorporateObject, CorporatePositionList });
  }

  GetUserRegionList(UserID) {
    return this.http.get(window.location.origin + '/Actor/GetUserRegionList', { UserID });
  }

  SaveUserRegion(UserID, UserRegionList: any) {
    return this.http.post(window.location.origin + '/Home/SaveUserRegion', { UserID, UserRegionList });
  }

  GetExeUnitListByRegionAndUser(ARegionCode, AUserID, IsLoading) {
    return this.http.get(window.location.origin + '/Actor/GetExeUnitListByRegionAndUser', { ARegionCode, AUserID }, IsLoading);
  }

  GetUnitPattern(AUserRegionID) {
    return this.http.get(window.location.origin + '/Actor/GetUnitPattern', { AUserRegionID });
  }

  GetUserCostCenter(AUserRegionID) {
    return this.http.get(window.location.origin + '/Actor/GetUserCostCenter', { AUserRegionID });
  }

  GetUser(ActorID, LoginName, IsExternal) {
    return this.http.get(window.location.origin + '/Actor/GetUser', { ActorID: ActorID, LoginName: LoginName, IsExternal: IsExternal });
  }
  GetUserWithRegionChecking(ActorID, LoginName, IsExternal, IsCorporate: any = null) {
    return this.http.get(window.location.origin + '/Actor/GetUserWithRegionChecking',
      { ActorID: ActorID, LoginName: LoginName, IsExternal: IsExternal, IsCorporate });
  }
  SetSelectedUserSessionForCartable(UserID: number) {
    return this.http.post(window.location.origin + '/Home/SetSelectedUserSessionForCartable', { UserID: UserID });
  }

  RemoveSelectedUserSessionForCartable() {
    return this.http.get(window.location.origin + '/Home/RemoveSelectedUserSessionForCartable', null);
  }

  GetUserRegionRole(AUserRegionID) {
    return this.http.get(window.location.origin + '/Actor/GetUserRegionRole', { AUserRegionID });
  }

  CheckUserExist(username) {
    return this.http.get(window.location.origin + '/Account/CheckUserExist', { username });
  }

  // UpdateActorPerson2(AFile: FormData) {
  //   return this.http.post(window.location.origin + '/Actor/UpdateActorPerson2', AFile);
  // }

  UpdateActorPerson2(
    ActorBusinessList: any,
    EducationHistoryList: any,
    ImmovablePropertyList: any,
    CertificateList: any,
    TrainingCourseList: any,
    PersonObject: any,
    UserLocalImage,
    FromWorkListCartable,
    IsMangerInfo: boolean,
    CorporateID: number = null) {
    return this.http.post(window.location.origin + '/Actor/UpdateActorPerson2', {
      ActorBusinessList,
      EducationHistoryList,
      ImmovablePropertyList,
      CertificateList,
      TrainingCourseList,
      PersonObject,
      UserLocalImage,
      FromWorkListCartable,
      IsMangerInfo,
      CorporateID
    });
  }

  SaveActorPerson2(AFile: FormData) {
    return this.http.post(window.location.origin + '/Actor/SaveActorPerson2', AFile);
  }

  GetRegisterRefrence() {
    return this.http.get(window.location.origin + '/Actor/GetRegisterRefrence', null);
  }
  UpdateActorCorporatee(ExecutionHistoryList: any,
    // MovableAssetList: any,
    ImmovablePropertyList: any,
    CorporateSharesList: any,
    ManagerCorporatePositionList: any,
    ActorBusinessList: any,
    OfficialGazetteList: any,
    TechnicalPersonnelCorporatePositionList: any,
    CorporateObject: any,
    selectedFile: any,
    equipmentandmachineryList: any,
    affordabilityList: any,
    ActorBankAccList: any, // RFC 52043-Item2
    SupplierActivities: any,
    //  ActorPropertyList: any,
    FromWorkListCartable
  ) {
    return this.http.post(window.location.origin + '/Actor/UpdateActorCorporatee', {
      ExecutionHistoryList,
      // MovableAssetList,
      ImmovablePropertyList,
      CorporateSharesList,
      ManagerCorporatePositionList,
      ActorBusinessList,
      OfficialGazetteList,
      TechnicalPersonnelCorporatePositionList,
      CorporateObject,
      selectedFile,
      equipmentandmachineryList,
      affordabilityList,
      ActorBankAccList, // RFC 52043-Item2
      SupplierActivities,
      //   ActorPropertyList,
      FromWorkListCartable
    });
  }
  UpdateCorporateOnWFSave(CorporateObject: any, ActorBusinessList: any, FromWorkListCartable: boolean) {
    return this.http.post(window.location.origin + '/Actor/UpdateCorporateOnWFSave', {
      CorporateObject,
      ActorBusinessList,
      FromWorkListCartable
    });
  }
  SaveActorCorporatee(AFile: FormData) {
    return this.http.post(window.location.origin + '/Actor/SaveActorCorporatee', AFile);
  }
  GetActorWithRoleID(RoleID: number, HaveLoading: boolean) {
    return this.http.get(window.location.origin + '/Home/GetActorWithRoleID', { RoleID }, HaveLoading);
  }
  GetEquipmentTypeList() {
    return this.http.get(window.location.origin + '/Common/GetEquipmentTypeList', null);
  }
  GetBusinessPatternListByRegionCode(RegionCode: number, HaveLoading: boolean) {
    return this.http.get(window.location.origin + '/Common/GetBusinessPatternListByRegionCode', { RegionCode }, HaveLoading);
  }
  GetBusinessPatternListByUnitPatternID(UnitPatternID: number, HaveLoading: boolean) {
    return this.http.get(window.location.origin + '/Common/GetBusinessPatternListByUnitPatternID', { UnitPatternID }, HaveLoading);
  }
  GetPriceListTopicByBusinesPatternID(BusinessPatternID: number, HaveLoading: boolean) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(window.location.origin + '/Common/GetPriceListTopicByBusinesPatternID', { BusinessPatternID }, HaveLoading);
  }
  GetAllWorkExperianceByActorID(ActorID: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(window.location.origin + '/Common/GetAllWorkExperianceByActorID', {
      ActorID
    }, false);
  }
  GetEduHistoryByActorID(ActorID: number) {
    return this.http.get(window.location.origin + '/Common/GetEduHistoryByActorID', {
      ActorID
    }, false);
  }
  GetRegionByActorID(ActorID: any) {
    return this.http.get(window.location.origin + '/Actor/GetRegionByActorID', { ActorID }, false);
  }
  SaveCorateCapacity(ModuleCode: any, CorporateCapacityObj: any,
    ACorporateCapacityDetailList: any) {
    return this.http.post(window.location.origin + '/Actor/SaveCorateCapacity', {
      ModuleCode,
      CorporateCapacityObj,
      ACorporateCapacityDetailList
    });
  }
  GetCorporateCapacityList(APriceListTopic: number) {
    return this.http.get(window.location.origin + '/Actor/GetCorporateCapacityList', { APriceListTopic });
  }
  GetCorporateCapacityByID(CorporateCapacityID: number) {
    return this.http.get(window.location.origin + '/Actor/GetCorporateCapacityByID', { CorporateCapacityID });
  }
  DeleteCorporateCapacity(CorporateCapacityID: number, ModuleCode: number) {
    return this.http.post(window.location.origin + '/Actor/DeleteCorporateCapacity', { CorporateCapacityID, ModuleCode });
  }
  GetAllPositionType() {
    return this.http.get(window.location.origin + '/Actor/GetAllPositionType', {});
  }
  GetPersonByAcorID(ActorID: number) {
    return this.http.get(window.location.origin + '/Actor/GetPersonByAcorID', { ActorID });
  }
  GetContractingCardSearch(
    ContractorType,
    Contractorname,
    IdentityNo,
    RegisterNo,
    PriceListTopicID,
    GradeID,
    UnitPatternID,
    BusinessPatternID,
    IsCheck,
    State) {
    return this.http.get(window.location.origin + '/Actor/GetContractingCardSearch',
      {
        ContractorType,
        Contractorname,
        IdentityNo,
        RegisterNo,
        PriceListTopicID,
        GradeID,
        UnitPatternID,
        BusinessPatternID,
        IsCheck,
        State
      });
  }

  GetContractorCardList(ActorID, PriceListTopicID, RegionCode , UnitPatternID) {
    return this.http.get(window.location.origin + '/Actor/GetContractorCardList',
      {
        ActorID,
        PriceListTopicID,
        RegionCode ,
        UnitPatternID
      });
  }

  AllowStateUpdate(ActorID: number,
    ActorBusinessID: number,
    AllowStateCode: number,
    ModuleCode,
    AllowStateCodeUpdateDec: any) {
    return this.http.get(window.location.origin + '/Actor/AllowStateUpdate',
      {
        ActorID,
        ActorBusinessID,
        AllowStateCode,
        ModuleCode,
        AllowStateCodeUpdateDec
      });
  }
  GetMovableAssetListByActorBusinessID(ActorId: number) {
    return this.http.get(window.location.origin + '/Actor/GetMovableAssetListByActorBusinessID', { ActorId });
  }
  ProvidersSearch(
    IsCorporate: boolean,
    Name: string = null,
    IdentityNo: string = null,
    ProviderDate = null,
    Cell: string = null,
    BusinessPatternCode: number = null,
    UnitPatternID: number = null,
    RoleID: number = null,
    LoginName: string = null
  ) {
    return this.http.get(window.location.origin + '/Actor/ProvidersSearch', {
      IsCorporate,
      Name,
      IdentityNo,
      ProviderDate,
      Cell,
      BusinessPatternCode,
      UnitPatternID,
      RoleID,
      LoginName
    });
  }
  onSaveRank(RankList: any, ActorID: number, IsCorporate: boolean, ModuleViewTypeCode: number = null, ModuleCode: number = null) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(window.location.origin + '/Common/SaveProviderRank', { RankList, ActorID, IsCorporate, ModuleViewTypeCode, ModuleCode });
  }

  SendSms(Text, PhoneNumber) {
    return this.http.get(window.location.origin + '/Account/SendSms', { Text, PhoneNumber });
  }
  SendSmsForContractContractors(Text, RegionCode) {
    return this.http.get(window.location.origin + '/Account/SendSmsForContractContractors', { Text, RegionCode });
  }
  GetListByRegionCode(RegionCode, CostCenterID, SubCostCenterID) {
    return this.http.get(window.location.origin + '/Actor/GetListByRegionCode', { RegionCode, CostCenterID, SubCostCenterID });
  }
  GetCostCenterByRegion(RegionCode) {
    return this.http.get(window.location.origin + '/Actor/GetCostCenterByRegion', { RegionCode });
  }
  GetSubCostCenterByCostCenter(CostCenterId) {
    return this.http.get(window.location.origin + '/Actor/GetSubCostCenterByCostCenter', { CostCenterId });
  }
  GetActorDetailsByActorID(ActorID) {
    return this.http.get(window.location.origin + '/Actor/GetActorDetailsByActorID', { ActorID });
  }
  GetWorkflowInstance(ActorID) {
    return this.http.get(window.location.origin + '/Actor/GetWorkflowInstance', { ActorID });
  }
  ProviderRevocation(VWWorkList: any, WorkFlowID: any, ActorID: any, WorkflowTypeCode: any, ModuleCode: any, OrginalModuleCode?: any) {
    return this.http.post(window.location.origin + '/Actor/ProviderRevocation', {
      VWWorkList,
      WorkFlowID,
      ActorID,
      WorkflowTypeCode,
      ModuleCode,
      OrginalModuleCode
    });
  }

  CalculateRank(ActorID, PriceListTopicID) {
    return this.http.get(window.location.origin + '/Actor/CalculateRank', { ActorID, PriceListTopicID });
  }
  GetCorporateTypeItems() {
    return this.http.get(window.location.origin + '/Actor/GetCorporateTypeItems', {});
  }
  UpdateSignImageActorCorporate(CorporatePositionID: number, SignImageStr: string) {
    return this.http.get(window.location.origin + '/Actor/UpdateSignImageActorCorporate', {
      CorporatePositionID,
      SignImageStr
    }, true);
  }
}
