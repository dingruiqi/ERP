import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDataHomeComponent } from './system-data-home.component';

describe('SystemDataHomeComponent', () => {
  let component: SystemDataHomeComponent;
  let fixture: ComponentFixture<SystemDataHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemDataHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemDataHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
