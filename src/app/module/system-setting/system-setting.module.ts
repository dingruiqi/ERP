import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
//import { NzFormModule } from 'ng-zorro-antd/form';
//mport { NzInputModule } from 'ng-zorro-antd/input';
import { SystemSettingRoutingModule } from './system-setting-routing.module';
import { CorporationSettingComponent } from './corporation-setting/corporation-setting.component';


@NgModule({
  declarations: [CorporationSettingComponent],
  imports: [
    CommonModule,
    NzTabsModule,
    //NzFormModule,
    //NzInputModule,
    FormsModule,
    SystemSettingRoutingModule
  ]
})
export class SystemSettingModule { }
