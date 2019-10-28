import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductUnitComponent } from './add-product-unit.component';

describe('AddProductUnitComponent', () => {
  let component: AddProductUnitComponent;
  let fixture: ComponentFixture<AddProductUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
