import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErpHomeComponent } from './layout-framework/erp-home/erp-home.component';
import { AuthGuard } from './module/auth/auth.guard';


const routes: Routes = [{
  path: "home",
  //canActivate: [AuthGuard],
  component: ErpHomeComponent
},
{
  path: "login",
  loadChildren: () => import("./module/auth/auth.module").then(mod => mod.AuthModule)
},
{
  path: "systemdatahome",
  loadChildren: () => import("./module/system-data-input/system-data-input.module").then(mod => mod.SystemDataInputModule)
},
{
  path: "",
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: "**",
  redirectTo: '/home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
