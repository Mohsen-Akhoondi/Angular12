import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewActorRankComponent } from './view-actor-rank.component';

describe('ViewActorRankComponent', () => {
  let component: ViewActorRankComponent;
  let fixture: ComponentFixture<ViewActorRankComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewActorRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewActorRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
