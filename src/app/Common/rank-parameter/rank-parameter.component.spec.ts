import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RankParameterComponent } from './rank-parameter.component';

describe('RankParameterComponent', () => {
  let component: RankParameterComponent;
  let fixture: ComponentFixture<RankParameterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RankParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
