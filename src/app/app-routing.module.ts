import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErpHomeComponent } from './layout-framework/erp-home/erp-home.component';
import { AuthGuard } from './module/auth/auth.guard';
import { LoginComponent } from './module/auth/login.component';


const routes: Routes = [{
  path: "home",
  canActivate: [AuthGuard],
  component: ErpHomeComponent,
  //loadChildren()=>
},
{
  path: "login",
  component: LoginComponent,
},
{
  path: "",
  redirectTo: '/home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
