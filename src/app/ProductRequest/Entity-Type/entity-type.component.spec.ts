import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EntityTypeComponent } from './entity-type.component';

describe('EntityTypeComponent', () => {
  let component: EntityTypeComponent;
  let fixture: ComponentFixture<EntityTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
