import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductInfoComponent } from './product-info/product-info.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductTypeComponent } from './add-product-type/add-product-type.component';
import { AddProductUnitComponent } from './add-product-unit/add-product-unit.component';
import { SystemDataHomeComponent } from './system-data-home/system-data-home.component';
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [
  {
    path: "systemDataHome", component: SystemDataHomeComponent,
    //canActivate: [AuthGuard],
    //canActivateChild: [AuthGuard],
    children: [
      { path: "productList", component: ProductInfoComponent },
      { path: "addProduct", component: AddProductComponent },
      { path: "addProductType", component: AddProductTypeComponent },
      { path: "addProductUnit", component: AddProductUnitComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemDataInputRoutingModule { }
