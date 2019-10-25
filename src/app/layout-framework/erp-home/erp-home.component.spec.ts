import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpHomeComponent } from './erp-home.component';

describe('ErpHomeComponent', () => {
  let component: ErpHomeComponent;
  let fixture: ComponentFixture<ErpHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErpHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
