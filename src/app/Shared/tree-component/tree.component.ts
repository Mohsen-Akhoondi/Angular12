import { Component, OnInit, ViewChild, Output, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { TreeComponent, TreeNode } from '@circlon/angular-tree-component';
import { PriceListService } from 'src/app/Services/BaseService/PriceListService';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class MyTreeComponent implements OnInit {
  @Input() PriceListTopicID = 0;
  @Input() DefPriceListPatternID;
  public scrollbarOptions = { axis: 'y', theme: 'inset-2-dark', scrollButtons: { enable: true } };
  constructor(private _PriceListService: PriceListService) { }
  nodes = [];
  FirstSelected = true;
  children = [];
  @Output() selectedchange: EventEmitter<any> =
    new EventEmitter<any>();
  @ViewChild(TreeComponent)
  private tree: TreeComponent;
  options = {
    rtl: true,
    getChildren: (node: TreeNode) => {
      return new Promise((resolve, reject) => {
        this.GetChildren(node.id).subscribe(data => {
          this.children = [];
          data.forEach(item => {
            this.children.push({
              name: item.PriceListTopiCodeName,
              id: item.PriceListPatternID.toString(),
              hasChildren: !item.IsLeaf,
              levelCode: item.PriceListLevelCode,
              TopicCode: item.PriceListTopiCode
            });
          });
          resolve(this.children);
        });
      });
    }
  };
  GetChildren(ParentID) {
    return this._PriceListService.GetPriceListChildren(ParentID);
  }
  ngOnInit() {
  }
  event(event) {
    if (event.eventName === 'toggleExpanded') {
      $('#price-list-sidebar').css('width', '-moz-max-content');
    } else if (event.eventName === 'activate') {
      if (!this.FirstSelected) {
        event.node.expand();
      } else {
        this.FirstSelected = false;
      }
      this.selectedchange.emit(event.node.data);
    }
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    this.FirstSelected = true;
    if (changes.DefPriceListPatternID && changes.DefPriceListPatternID.currentValue) {
      this.nodes = [];
      this._PriceListService.GetPriceListRoots(null, changes.DefPriceListPatternID.currentValue).subscribe(res => {
        res.forEach(item => {
          this.nodes.push({
            name: item.PriceListTopiCodeName,
            id: item.PriceListPatternID,
            hasChildren: !item.IsLeaf,
            levelCode: item.PriceListLevelCode,
            TopicCode: item.PriceListTopiCode
          });
          this.tree.treeModel.update();
          this.tree.treeModel.getFirstRoot().toggleActivated();
        });
      });
    } else {
      if (changes.PriceListTopicID && changes.PriceListTopicID.currentValue) {
        this.nodes = [];
        this._PriceListService.GetPriceListRoots(changes.PriceListTopicID.currentValue, null).subscribe(res => {
          res.forEach(item => {
            this.nodes.push({
              name: item.PriceListTopiCodeName,
              id: item.PriceListPatternID,
              hasChildren: !item.IsLeaf,
              levelCode: item.PriceListLevelCode,
              TopicCode: item.PriceListTopiCode
            });
            this.tree.treeModel.update();
            this.tree.treeModel.getFirstRoot().toggleActivated();
          });
        });
      }
    }
  }
}
