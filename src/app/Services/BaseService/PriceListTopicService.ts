import { Injectable } from '@angular/core';
import { BaseHttpClient } from './BaseHttpClient';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PriceListTopicService {
    constructor(private http: BaseHttpClient) { }

    GetParents() {
        return this.http.get(window.location.origin + '/Home/GetPriceListTopic', null);
    }

    GetApprovalPriceIndexList(finYearCode: number, attachmentNo: number, levelCode: number) {
        return this.http.get(window.location.origin + '/Home/GetApprovalPriceIndexList'
            , { finYearCode, durationNo: attachmentNo, levelCode });
    }

    UpdatePriceList(ApprovalPriceLst: any, selectedYear: any, selectedAttachmentNo: any, selectedLevelCode: any) {
        return this.http.post(window.location.origin + '/Home/UpdatePriceList'
            , { ApprovalPriceLst, selectedYear, selectedAttachmentNo, selectedLevelCode }, false);
    }
    GetPriceListPatternRasteh(levelCode: number, Year: number) {
        return this.http.get(window.location.origin + '/Home/GetPriceListPatternRasteh', { levelCode, Year } , false);
    }
    GetPriceListPatternReshteh(Level1Code: number, Year: number, selectedLevelCode: any) {
        return this.http.get(window.location.origin + '/Home/GetPriceListPatternReshteh', { Level1Code, Year , selectedLevelCode });
    }
    GetPriceListPatternFasl(Level1Code: number, Level2Code: number, Year: number, selectedLevelCode: any) {
        return this.http.get(window.location.origin + '/Home/GetPriceListPatternFasl', {Level1Code , Level2Code, Year, selectedLevelCode });
    }

    GetPriceListPatternRadif(Level1Code: number, Level2Code: number, Level3Code: number, Year: number, selectedLevelCode: any) {
        return this.http.get(window.location.origin + '/Home/GetPriceListPatternRadif', {Level1Code , Level2Code, Level3Code,
                                                                                         Year, selectedLevelCode });
    }
}
