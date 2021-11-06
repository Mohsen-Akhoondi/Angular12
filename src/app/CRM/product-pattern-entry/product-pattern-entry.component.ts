import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Console } from 'console';
import { ProductPatternService } from 'src/app/Services/CRM/ProductPatternService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-pattern-entry',
  templateUrl: './product-pattern-entry.component.html',
  styleUrls: ['./product-pattern-entry.component.css']
})
export class ProductPatternEntryComponent implements OnInit {
  @Output() Closed: EventEmitter<any> = new EventEmitter<any>();
  @Input() InputParam;
  @Output() OutPutParam: EventEmitter<any> = new EventEmitter<any>();
  ProductReqItems: any;
  RegionCode;
  ProductPatternID;
  ModuleCode;
  IsInsert = false;
  isClicked: boolean;
  PopUpType: string;
  startLeftPosition: number;
  startTopPosition: number;
  alertMessageParams = { HaveOkBtn: true, message: '', HaveYesBtn: false, HaveNoBtn: false };
  SameLevel = true;
  gridApi: any;
  btnclicked = false;
  HaveHeader: boolean;
  HaveMaxBtn = false;
  ProductPatternCode;
  ProductPatternName;
  ChoosenISSameLevelRadioName;
  ChoosenISChildRadioName;
  type: string;
  CheckValidate = false;
  RegionParams: any;
  RegionGroupCode: any;
  ParentProductPatternID: any;
  SelectedID: any;
  IsEditable: true;
  Editable = true;
  constructor(
    private ProductPattern: ProductPatternService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.ModuleCode = +params['ModuleCode'];
    });
  }

  ngOnInit() {

    if (this.InputParam.Mode === 'EditMode') {

      this.ParentProductPatternID=this.InputParam.ParentProductPatternID;
     
      this.ProductPattern.GetProductPatternEntry(this.InputParam.ProductPatternID).subscribe(res => {
        this.ProductPatternCode = res.ProductPatternCode;
        this.ProductPatternName = res.ProductPatternName;
        this.ParentProductPatternID=res.ParentProductPatternID;
        this.IsEditable=true;
     
      });

    }

  }



  RedioClick(SameLevel) {
    this.SameLevel = SameLevel;
  }
  insert() {
    this.ProductPatternID = this.InputParam.ProductPatternID;
    this.RegionGroupCode = this.InputParam.RegionGroupCode;

    this.CheckValidate = true;
    let ValidateForm = true;
   
    if (ValidateForm) {
      const ProductPattern = {
        ProductPatternCode: this.ProductPatternCode,
        ProductPatternName: this.ProductPatternName,
        RegionGroupCode: this.RegionGroupCode,
        SameLevel: this.SameLevel,
        ParentProductPatternID: this.ParentProductPatternID,

      }




      if (this.InputParam.Mode === 'EditMode') {
       
        this.ParentProductPatternID = this.InputParam.ParentProductPatternID;
        this.RegionGroupCode = this.InputParam.RegionGroupCode;
        
        this.ProductPattern.UpdateProductPattern(ProductPattern, this.ProductPatternID, this.ModuleCode).subscribe((res: any) => {
          this.ShowMessageBoxWithOkBtn('اصلاح با موفقیت انجام شد');
          this.OutPutParam.emit(true);
    
        });
      }
      else {
        this.ProductPattern.SaveProductPattern(ProductPattern, this.ProductPatternID, this.ModuleCode).subscribe((res: any) => {
          this.ParentProductPatternID=res.ParentProductPatternID;
          this.ProductPatternCode=res.ProductPatternCode;
          this.RegionGroupCode = this.InputParam.RegionGroupCode;
          this.ShowMessageBoxWithOkBtn('ثبت با موفقیت انجام شد');
          this.OutPutParam.emit(true);
    
        });
      }

    }
  }

  closeModal() {
    this.Closed.emit(true);
  }

  ShowMessageBoxWithOkBtn(message) {
    this.isClicked = true;
    this.PopUpType = 'message-box';
    this.startTopPosition = 182;
    this.startLeftPosition = 557;
    this.alertMessageParams.message = message;
    this.alertMessageParams.HaveOkBtn = true;
    this.alertMessageParams.HaveYesBtn = false;
    this.alertMessageParams.HaveNoBtn = false;
  }

  popupclosed() {
    this.isClicked = false;
  }


  getOutPutParam(event) {

  }

}