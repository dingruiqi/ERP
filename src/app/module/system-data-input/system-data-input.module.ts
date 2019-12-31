import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { SystemDataInputRoutingModule } from './system-data-input-routing.module';
import { ProductInfoComponent } from './product-info/product-info.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductTypeComponent } from './add-product-type/add-product-type.component';
import { AddProductUnitComponent } from './add-product-unit/add-product-unit.component';
import { SystemDataHomeComponent } from './system-data-home/system-data-home.component';


@NgModule({
  declarations: [ProductInfoComponent, AddProductComponent, AddProductTypeComponent, AddProductUnitComponent, SystemDataHomeComponent],
  imports: [
    CommonModule,
    NzCardModule,
    NzTreeModule,
    NzIconModule,
    SystemDataInputRoutingModule
  ]
})
export class SystemDataInputModule { }
