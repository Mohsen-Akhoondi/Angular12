import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActorService } from 'src/app/Services/BaseService/ActorService';
import { Router } from '@angular/router';
import { CustomCheckBoxModel } from 'src/app/Shared/custom-checkbox/src/public_api';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  BirthDateSearch: any;
  IdentityNoSearch: string;
  PostCodeSearch: any;
  Validate = true;
  ActorId = 0;
  FirstName: any;
  LastName: any;
  PersonObject: any;
  Nationality: any;
  PassportNo: any;
  PersonelCode: any;
  Gender: any;
  Address: any;
  Tel: any;
  Cell: any;
  Email: any;
  Web: any;
  PostCode: any;
  RegionCode: any;
  RegionName: any;
  IsMale: boolean;
  IsFemale: boolean;
  IsEditable = true;

  alertMessageParams = { HaveOkBtn: true, message: '', HaveYesBtn: false, HaveNoBtn: false };
  isClicked: boolean;
  PopUpType: string;
  HaveHeader: boolean;
  HaveMaxBtn: boolean;
  startLeftPosition: number;
  startTopPosition: number;
  IdentityNo: any;
  BirthDate: any;
  CustomCheckBoxConfig: CustomCheckBoxModel = new CustomCheckBoxModel();
  IsValid: boolean;

  constructor(private Actor: ActorService,
    private router: Router) { }

  ngOnInit() {
    this.CustomCheckBoxConfig.color = 'state p-primary';
    this.CustomCheckBoxConfig.icon = 'fa fa-check';
    this.CustomCheckBoxConfig.styleCheckBox = 'pretty p-icon p-rotate';
    this.CustomCheckBoxConfig.AriaWidth = 50;
  }

  OnBirthDateChange(ADate) {
    this.BirthDateSearch = ADate.MDate;
  }

  onSearch() {

    this.Actor.GetPersonByIdentityNo(this.IdentityNoSearch, null, null).subscribe(res2 => {
      if (res2) {
        this.PersonObject = res2; // کل آبجکت شخص و اکتور
        this.Validate = res2.Validate;
        this.ActorId = res2.ActorId;
        this.FirstName = res2.FirstName;
        this.LastName = res2.LastName;
        this.Gender = res2.Gender;
        this.IdentityNo = res2.IdentityNo;
        this.BirthDate = res2.ShortBirthDate;
        this.Nationality = res2.Nationality;
        this.PassportNo = res2.PassportNo;
        this.PersonelCode = res2.PersonelCode;
        this.Address = res2.Address;
        this.Tel = res2.Tel;
        this.Cell = res2.Cell;
        this.Email = res2.Email;
        this.Web = res2.Web;
        this.PostCode = res2.PostCode;
        this.RegionCode = res2.RegionCode;
        this.RegionName = res2.RegionName;
        this.IsMale = res2.Gender === 0;
        this.IsFemale = res2.Gender === 1;
        this.IsValid = res2.IsValid;
        this.IsEditable = this.ActorId > 0 ? false : true; // RFC 60302
      } else {
        this.ShowMessageBoxWithOkBtn('اطلاعات شخص در سیستم یافت نشد لطفا استعلام بگیرید');
        this.FirstName = '';
        this.LastName = '';
        this.IdentityNo = '';
        this.BirthDate = '';
        this.BirthDateSearch = '';
        this.Nationality = '';
        this.PassportNo = '';
        this.PersonelCode = '';
        this.Address = '';
        this.Tel = '';
        this.Cell = '';
        this.Email = '';
        this.Web = '';
        this.PostCode = '';
        this.RegionName = '';
        this.IsMale = true;
      }
    });
  }

  onSearchInquiry() {
    if (!this.IdentityNoSearch) {
      this.ShowMessageBoxWithOkBtn('شناسه ملی نمی تواند خالی باشد');
    }
    if (!this.PostCodeSearch) {
      this.ShowMessageBoxWithOkBtn('کد پستی نمی تواند خالی باشد');
    }
    if (!this.BirthDateSearch) {
      this.ShowMessageBoxWithOkBtn('تاریخ تولد نمی تواند خالی باشد');
    }
    this.Actor.GetActorByIdentityNo(this.IdentityNoSearch, this.BirthDateSearch, true, this.PostCodeSearch).subscribe(res => {
      if (res) {
        this.Validate = res.Validate;
        this.PersonObject = res; // کل آبجکت شخص و اکتور
        this.ActorId = res.ActorId;
        this.FirstName = res.FirstName;
        this.LastName = res.LastName;
        this.Gender = res.Gender;
        this.IdentityNo = res.IdentityNo;
        this.BirthDate = res.ShortBirthDate;
        this.Nationality = res.Nationality;
        this.PassportNo = res.PassportNo;
        this.PersonelCode = res.PersonelCode;
        this.Address = res.Address;
        this.Tel = res.Tel;
        this.Cell = res.Cell;
        this.Email = res.Email;
        this.Web = res.Web;
        this.PostCode = res.PostCode;
        this.RegionCode = res.RegionCode;
        this.RegionName = res.RegionName;
        this.IsMale = res.Gender === 0;
        this.IsFemale = res.Gender === 1;
        this.IsValid = res.IsValid;
        this.IsEditable = this.ActorId > 0 ? false : true;
      }
    });
  }



  RedioClick(data) {

  }
  OnCheckBoxChange(event) {
    this.IsValid = event;
  }
  onSave() {
    if (this.PersonObject) {
      this.PersonObject.BirthDate = this.PersonObject.ShortBirthDate;
      this.PersonObject.Web = this.Web;
      this.PersonObject.PostCode = this.PostCode;
      this.PersonObject.RegionName = this.RegionName;
      this.PersonObject.Tel = this.Tel;
      this.PersonObject.Cell = this.Cell;
      this.PersonObject.Email = this.Email;
      this.PersonObject.Address = this.Address;
      this.PersonObject.Nationality = this.Nationality;
      this.PersonObject.PersonelCode = this.PersonelCode;
      this.PersonObject.PassportNo = this.PassportNo;
      this.PersonObject.IsValid = this.IsValid;

      if (this.ActorId > 0) {
        this.Actor.UpdateActorPerson(this.PersonObject).subscribe(res => {
          this.PersonObject = res;
          this.Validate = this.PersonObject.Validate;
          this.ShowMessageBoxWithOkBtn('ویرایش اطلاعات با موفقیت انجام شد');
        });
      } else {
        this.Actor.SaveActorPerson(this.PersonObject).subscribe(res => {
          this.PersonObject = res;
          this.Validate = this.PersonObject.Validate;
          this.ActorId = this.PersonObject.ActorId;
          this.ShowMessageBoxWithOkBtn('ثبت اطلاعات با موفقیت انجام شد');
        });
      }
      return;
    }
  }

  onClose() {
    this.router.navigate([{ outlets: { primary: 'Home', PopUp: null } }]);
  }
  popupclosed(event) {

    this.isClicked = false;
    this.PopUpType = '';
  }

  ShowMessageBoxWithOkBtn(message) {
    this.isClicked = true;
    this.PopUpType = 'message-box';
    this.HaveHeader = true;
    this.HaveMaxBtn = false;
    this.startLeftPosition = 530;
    this.startTopPosition = 200;
    this.alertMessageParams.message = message;
    this.alertMessageParams.HaveOkBtn = true;
    this.alertMessageParams.HaveYesBtn = false;
    this.alertMessageParams.HaveNoBtn = false;
  }
}
