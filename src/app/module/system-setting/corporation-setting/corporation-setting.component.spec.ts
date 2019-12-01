import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporationSettingComponent } from './corporation-setting.component';

describe('CorporationSettingComponent', () => {
  let component: CorporationSettingComponent;
  let fixture: ComponentFixture<CorporationSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporationSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporationSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
