import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErpHomeComponent } from './layout-framework/erp-home/erp-home.component';
import { PageNotFoundComponent } from './layout-framework/page-not-found/page-not-found.component';
//import { AuthModule } from './module/auth/auth.module';
//import { SystemDataInputModule } from './module/system-data-input/system-data-input.module';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule, NZ_ICON_DEFAULT_TWOTONE_COLOR, NZ_ICONS } from 'ng-zorro-antd/icon';
// 引入你需要的图标，比如你需要 fill 主题的 AccountBook Alert 和 outline 主题的 Alert，推荐 ✔️
import { CloseOutline } from '@ant-design/icons-angular/icons';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './layout-framework/welcome/welcome.component';
import { GuideComponent } from './layout-framework/guide/guide.component';

const icons: IconDefinition[] = [CloseOutline];

const ngZorroConfig: NzConfig = {
  // 注意组件名称没有 nz 前缀
  //tabs: { nzSize: 'small' },//小号
  icon: { nzTwotoneColor: '#00ff00', }// 不提供的话，即为 Ant Design 的主题蓝色
};

@NgModule({
  declarations: [
    AppComponent,
    ErpHomeComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //AuthModule,
    //SystemDataInputModule,
    NzPopoverModule,
    NzButtonModule,
    NzEmptyModule,
    NzAvatarModule,
    NzTabsModule,
    NzIconModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    //{ provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' }, // 不提供的话，即为 Ant Design 的主题蓝色
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
