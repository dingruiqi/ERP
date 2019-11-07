import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErpHomeComponent } from './layout-framework/erp-home/erp-home.component';
import { AuthGuard } from './module/auth/auth.guard';
import { PageNotFoundComponent } from './layout-framework/page-not-found/page-not-found.component';


const routes: Routes = [{
  path: "home",
  //canActivate: [AuthGuard],
  component: ErpHomeComponent,
  children: [
    {
      path: "systemdatahome",
      loadChildren: () => import("./module/system-data-input/system-data-input.module").then(mod => mod.SystemDataInputModule)
    }
  ]
},
{
  path: "login",
  loadChildren: () => import("./module/auth/auth.module").then(mod => mod.AuthModule)
},

{
  path: "",
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: "**",
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
