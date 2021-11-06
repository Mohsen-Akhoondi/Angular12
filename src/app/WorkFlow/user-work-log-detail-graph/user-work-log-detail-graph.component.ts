import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Graph, Layout, Edge, Node } from '@swimlane/ngx-graph';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { isUndefined } from 'util';
import { WorkflowService } from 'src/app/Services/WorkFlowService/WorkflowServices';


@Component({
  selector: 'app-user-work-log-detail-graph',
  templateUrl: './user-work-log-detail-graph.component.html',
  styleUrls: ['./user-work-log-detail-graph.component.css']
})
export class UserWorkLogDetailGraphComponent implements OnInit {
  @Input() InputParam;
  @Output() Closed: EventEmitter<any> = new EventEmitter<any>();
  @Input() PopupMaximized;
  nodes: Node[];
  links: Edge[];
  WorkFlowInstanceID;
  autoZoom: boolean = false;
  autoCenter: boolean = true;
  viewsize = [1100 ,520];
  constructor(private workFlowService: WorkflowService, private router: Router,) {
  }

  ngOnInit() {
    this.WorkFlowInstanceID = this.InputParam.WorkFlowInstanceIdSelected;

    this.workFlowService.GetNodesByInstance(this.WorkFlowInstanceID).subscribe(res => {
      this.nodes = res;
    });

    this.workFlowService.GetEdgesByInstance(this.WorkFlowInstanceID).subscribe(res => {
      this.links = res;
    });

  }
  ngOnChanges(changes): void {

    if (changes.PopupMaximized && !isUndefined(changes.PopupMaximized.currentValue)) {
      this.viewsize = changes.PopupMaximized.currentValue ? [1356 ,580] : [1100 ,520];
      
    }
 }

 closeModal() {
  this.Closed.emit(true);
}
}
