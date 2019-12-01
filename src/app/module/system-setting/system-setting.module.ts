import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemSettingRoutingModule } from './system-setting-routing.module';
import { CorporationSettingComponent } from './corporation-setting/corporation-setting.component';


@NgModule({
  declarations: [CorporationSettingComponent],
  imports: [
    CommonModule,
    SystemSettingRoutingModule
  ]
})
export class SystemSettingModule { }
