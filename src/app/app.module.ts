import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErpHomeComponent } from './layout-framework/erp-home/erp-home.component';
import { AuthModule } from './module/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    ErpHomeComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
