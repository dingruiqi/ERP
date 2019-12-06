import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErpHomeComponent } from './layout-framework/erp-home/erp-home.component';
import { AuthGuard } from './module/auth/auth.guard';
import { PageNotFoundComponent } from './layout-framework/page-not-found/page-not-found.component';
import { WelcomeComponent } from './layout-framework/welcome/welcome.component';
import { GuideComponent } from './layout-framework/guide/guide.component';


const routes: Routes = [{
  path: "home",
  canActivate: [AuthGuard],
  component: ErpHomeComponent,
  data: {
    breadcrumb: '首页'
  },
  children: [
    {
      path: "",
      component: WelcomeComponent,
      //outlet: 'content'
    },
    {
      path: "guide",
      component: GuideComponent,
      data: {
        breadcrumb: '新手引导'
      },
    },
    {
      path: "systemdatahome",
      loadChildren: () => import("./module/system-data-input/system-data-input.module").then(mod => mod.SystemDataInputModule),
      data: {
        breadcrumb: '基础资料'
      },
    },
    {
      path: "systemsetting",
      loadChildren: () => import("./module/system-setting/system-setting.module").then(mod => mod.SystemSettingModule),
      data: {
        breadcrumb: '系统设置'
      },
    }
  ]
},
{
  path: "login",
  loadChildren: () => import("./module/auth/auth.module").then(mod => mod.AuthModule)
},

{
  path: "",
  redirectTo: 'home',
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
