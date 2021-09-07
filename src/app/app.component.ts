import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';
  IsAdvertising;
  NeedsPhoneNumber = false;
  ShowMessage = false;
  IsShow = false;
  IsTestMode = false;
  alertMessageParams = { HaveOkBtn: true, message: '', HaveYesBtn: false, HaveNoBtn: false };
  IsShowVersion = false;
  UrlIsProviders;
  columnDef = [
    {
      headerName: 'ردیف ',
      field: 'FlowNo',
      width: 80,
      resizable: true
    },
    {
      headerName: '',
      field: 'FlowPrompt',
      width: 180,
      resizable: true,
      sortable: true,
    },
    {
      headerName: 'بدهکار',
      field: 'CreditAmount',
      width: 120,
      resizable: true,
      sortable: true,
    },
    {
      headerName: 'بستانکار',
      field: 'DebitAmount',
      width: 120,
      resizable: true
    },
  ];
  constructor() {
  }
  ngOnInit() {
    
  }
  popupclosed(event) {
    this.ShowMessage = false;
  }
  onDownloadHellpFiles(DocTypeCode) {

  }
}
