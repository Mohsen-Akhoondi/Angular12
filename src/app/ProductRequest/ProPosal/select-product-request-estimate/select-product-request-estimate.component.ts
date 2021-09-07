import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { of, forkJoin } from 'rxjs';
import { ContractPayService } from 'src/app/Services/ContractService/ContractPayServices/ContractPayService';
import { ProductRequestService } from 'src/app/Services/ProductRequest/ProductRequestService';

@Component({
  selector: 'app-select-product-request-estimate',
  templateUrl: './select-product-request-estimate.component.html',
  styleUrls: ['./select-product-request-estimate.component.css']
})
export class SelectProductRequestEstimateComponent implements OnInit {

  colDefLeft;
  colDefRight;
  rowDataLeft;
  rowDataRight;
  ProductID;
  LeftApi;
  RightApi;
  PriceListPatternIDs;
  ContractPayNo;
  @Input() InputParam;
  @Output() Closed: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() OutputParam: EventEmitter<any> = new EventEmitter<any>();
  CostFactorID: any;
  constructor( private ProductRequest: ProductRequestService) {
    this.colDefRight = [
      {
        headerName: 'ردیف',
        field: 'ItemNo',
        width: 50,
        resizable: true
      },
      {
        headerName: 'ردیف فهرست بها',
        field: 'PriceListNo',
        width: 140,
        resizable: true
      },
      {
        headerName: 'شرح فهرست بها',
        field: 'PriceListName',
        width: 230,
        resizable: true
      },
      {
        headerName: 'نوع ردیف',
        field: 'IsStar',
        width: 70,
        resizable: true
      },
      {
        headerName: 'واحد',
        field: 'WorkUnitName',
        width: 80,
        resizable: true
      },
      {
        headerName: 'مبلغ برآورد',
        field: 'Amount',
        width: 80,
        resizable: true
      },
      {
        headerName: 'تعداد',
        field: 'Qty',
        width: 80,
        resizable: true,
      },
      {
        headerName: 'مبلغ',
        field: 'FinalAmount',
        width: 100,
        resizable: true
      }
    ];

    this.colDefLeft = [
      {
        headerName: 'ردیف',
        field: 'ItemNo',
        width: 50,
        resizable: true
      },
      {
        headerName: 'ردیف فهرست بها',
        field: 'PriceListNo',
        width: 140,
        resizable: true
      },
      {
        headerName: 'شرح فهرست بها',
        field: 'PriceListName',
        width: 230,
        resizable: true
      },
      {
        headerName: 'نوع ردیف',
        field: 'IsStar',
        width: 70,
        resizable: true
      },
      {
        headerName: 'واحد',
        field: 'WorkUnitName',
        width: 80,
        resizable: true
      },
      {
        headerName: 'مبلغ برآورد',
        field: 'Amount',
        width: 80,
        resizable: true
      },
      {
        headerName: 'تعداد',
        field: 'Qty',
        width: 80,
        resizable: true,
      },
      {
        headerName: 'مبلغ',
        field: 'FinalAmount',
        width: 100,
        resizable: true
      }
    ];
  }

  ngOnInit() {
    this.rowDataLeft = of([]);
    this.rowDataRight = of([]);
    this.CostFactorID = this.InputParam.CostFactorID;
    this.ProductID = this.InputParam.ProductID;
    this.PriceListPatternIDs = this.InputParam.PriceListPatternIDs;
    this.ContractPayNo = this.InputParam.ContractPayNo;

    forkJoin([
      this.rowDataRight = this.ProductRequest.GetProductRequestEstimateListWithProduct(this.CostFactorID,
                                                                                      this.ProductID,
                                                                                      this.PriceListPatternIDs,
                                                                                     1),
      this.rowDataLeft = this.ProductRequest.GetProductRequestEstimateListWithProduct(this.CostFactorID,
                                                                                      this.ProductID,
                                                                                      this.PriceListPatternIDs,
                                                                                      0)
    ]);
  }

  close() {
    this.Closed.emit(true);
  }

  addRightToLeft() {
    const selectedItems = this.RightApi.getSelectedRows();
    this.RightApi.updateRowData({ remove: selectedItems });
    this.LeftApi.updateRowData({ add: selectedItems });
  }

  addLeftToRight() {
    const selectedItems = this.LeftApi.getSelectedRows();
    this.LeftApi.updateRowData({ remove: selectedItems });
    this.RightApi.updateRowData({ add: selectedItems });
  }

  addAllRightToLeft() {
    const rowData = [];
    this.RightApi.forEachNode(node => rowData.push(node.data));
    this.RightApi.updateRowData({ remove: rowData });
    this.LeftApi.updateRowData({ add: rowData });

  }

  addAllLeftToRight() {
    const rowData = [];
    this.LeftApi.forEachNode(node => rowData.push(node.data));
    this.LeftApi.updateRowData({ remove: rowData });
    this.RightApi.updateRowData({ add: rowData });
  }

  LeftRowClick(event) {

  }

  RightRowClick(event) {

  }

  onLeftGridReady(params: { api: any; }) {
    this.LeftApi = params.api;
  }

  onRightGridReady(params: { api: any; }) {
    this.RightApi = params.api;
  }

  onConfirm() {
    const rowData = [];
    this.LeftApi.forEachNode(node => {
      node.data.Qty = 0;
      rowData.push(node.data);
    });
    this.OutputParam.emit(rowData);
    this.close();
  }
}
