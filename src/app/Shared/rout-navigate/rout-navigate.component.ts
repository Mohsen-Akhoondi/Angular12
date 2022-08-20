import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rout-navigate',
  templateUrl: './rout-navigate.component.html',
  styleUrls: ['./rout-navigate.component.css']
})
export class RoutNavigateComponent implements OnInit {
  ModuleCode;
  ModuleName: any;

  constructor(private router: Router,
    private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe((params: any) => {
      this.ModuleCode = params.get('ModuleCode');
      this.ModuleName = params.get('ModuleName');
    });
  }

  ngOnInit(): void {
    this.router.navigate([{ outlets: { PopUp: ['PopUp', this.ModuleCode, this.ModuleName] } }]);
  }

}
