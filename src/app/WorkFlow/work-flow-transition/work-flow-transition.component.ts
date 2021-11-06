import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { WorkFlowGraphService } from 'src/app/Services/WorkFlowService/WorkFlowGraphService';
import { Graph, Layout, Edge, Node } from '@swimlane/ngx-graph';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { isUndefined } from 'util';

@Component({
  selector: 'app-work-flow-transition',
  templateUrl: './work-flow-transition.component.html',
  styleUrls: ['./work-flow-transition.component.css']
})

export class WorkFlowTransitionComponent implements OnInit {
  @Input() InputParam;
  @Input() PopupMaximized;
  viewsize=[1100,520];
  @Output() Closed: EventEmitter<any> = new EventEmitter<any>();
  nodes: Node[];
  links: Edge[];
  PopupParam;
  Note;
  WorkFlowTypeCode: any;
  autoZoom: boolean = false;
  autoCenter: boolean = true;
  btnclicked = false;
  type: string;
  paramObj;
  HaveHeader: boolean;
  OverstartLeftPosition: number;
  OverstartTopPosition: number;
  MinHeightPixel;
  PixelHeight;
  HaveMaxBtn = false;
  HoverNode = false;
  x;
  y;
  falg= true;
  HaveMax = true;
  constructor(private workFlowGraghService: WorkFlowGraphService, private router: Router,) {
  }

  ngOnInit() {
    this.WorkFlowTypeCode = this.InputParam.workFlowTypeCodeSelected;

    this.workFlowGraghService.GetNodeList(this.WorkFlowTypeCode).subscribe(res => {
      this.nodes = res;
    });

    this.workFlowGraghService.GetEdgeWorkFlow(this.WorkFlowTypeCode).subscribe(res => {
      this.links = res;
    });

  }
  mouseEnter(event: MouseEvent) {
    // if(this.falg) {
    //   this.workFlowGraghService.GetNoteGraph(1, 2).subscribe(res => {
    //     this.Note = res;
    //   });
    //   this.x = event.clientX;
    //   this.y = event.clientY;
    //   this.HoverNode = true;
    //   this.NodeHover(this.x, this.y);
    //   this.falg = false;
    // }   
     
    
  }

  mouseleave() {
    // this.HoverNode = false;
    // this.falg = true;
  }

  NodeHover(x: any, y: any) {
    this.type = 'graph-hover';
    this.btnclicked = true;
    this.HaveHeader = true;
    this.HaveMaxBtn = true;
    this.OverstartTopPosition = y;
    this.OverstartLeftPosition = x;
    this.MinHeightPixel = 100;
    this.PixelHeight = 200;
    this.paramObj = {
      HeaderName: 'مشاهده جزئیات'
    };
  }
  closeModal() {
    this.Closed.emit(true);
  }
  ngOnChanges(changes): void {

    if (changes.PopupMaximized && !isUndefined(changes.PopupMaximized.currentValue)) {
      this.viewsize = changes.PopupMaximized.currentValue ? [1356 ,580] : [1100 ,520];
      
    }
  }
}
