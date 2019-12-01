import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorporationSettingComponent } from './corporation-setting/corporation-setting.component';


const routes: Routes = [
  {
    path: "", component: CorporationSettingComponent,
    //canActivate: [AuthGuard],
    //canActivateChild: [AuthGuard],
    children: [
      // { path: "productlist", component: ProductInfoComponent },
      // { path: "addproduct", component: AddProductComponent },
      // { path: "addproducttype", component: AddProductTypeComponent },
      // { path: "addproductunit", component: AddProductUnitComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemSettingRoutingModule { }
