import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErpHomeComponent } from './layout-framework/erp-home/erp-home.component';
import { AuthGuard } from './module/auth/auth.guard';


const routes: Routes = [{
  path: "home",
  canActivate: [AuthGuard],
  component: ErpHomeComponent,
  //loadChildren()=>
},
{
  path: "auth",
  // component: LoginComponent,
  loadChildren: () => import("./module/auth/auth.module").then(mod => mod.AuthModule)
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
