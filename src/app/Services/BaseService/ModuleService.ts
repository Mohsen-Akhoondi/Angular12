import { Injectable } from '@angular/core';
import { BaseHttpClient } from './BaseHttpClient';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModuleService {
  constructor(private http: BaseHttpClient) { }

  GetModuleList(IsWeb: boolean, RegionCode: number) {
    return this.http.get(window.location.origin + '/Workflow/GetModuleList', {
      IsWeb: IsWeb,
      RegionCode: RegionCode
    });
  }
  GetModuleListByRegionCode(RegionCode: number, WorkflowObjectCodes) {
    return this.http.get(window.location.origin + '/Workflow/GetModuleListByRegionCode', {
      RegionCode,
      WorkflowObjectCodes
    });
  }
  GetModule4WorkFlowTypeModule() {
    return this.http.get(window.location.origin + '/Workflow/GetModule4WorkFlowTypeModule', null, false);
  }
  GetModuleViewTypeList() {
    return this.http.get(window.location.origin + '/Common/GetModuleViewTypeList', null, false);
  }
  GetModuleViewTypeCodeSequence(ModuleCode: number) {
    return this.http.get(window.location.origin + '/Common/GetModuleViewTypeCodeSequence', { ModuleCode: ModuleCode });
  }
  SaveModuleViewType(ModuleViewTypeList: any[], ModuleToLog: number) {
    return this.http.post(window.location.origin + '/Common/SaveModuleViewType',
      { ModuleViewTypeList: ModuleViewTypeList, ModuleToLog: ModuleToLog });
  }
  GetWebModules(Modulelist = null) {
    return this.http.get(window.location.origin + '/Common/GetWebModules', { Modulelist });
  }
  GetListByModuleCode(ModuleCode: number, loading: boolean) {
    return this.http.get(window.location.origin + '/Common/GetListByModuleCode', { ModuleCode }, loading);
  }
GetAutomationOrganizationList() {
    return this.http.get(window.location.origin + '/Common/GetAutomationOrganizationList', null);
    
  }
}
