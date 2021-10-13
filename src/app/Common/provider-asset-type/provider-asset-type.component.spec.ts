import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProviderAssetTypeComponent } from './provider-asset-type.component';

describe('ProviderAssetTypeComponent', () => {
  let component: ProviderAssetTypeComponent;
  let fixture: ComponentFixture<ProviderAssetTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderAssetTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderAssetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
