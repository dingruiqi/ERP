import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErpHomeComponent } from './layout-framework/erp-home/erp-home.component';
import { PageNotFoundComponent } from './layout-framework/page-not-found/page-not-found.component';
//import { AuthModule } from './module/auth/auth.module';
//import { SystemDataInputModule } from './module/system-data-input/system-data-input.module';

@NgModule({
  declarations: [
    AppComponent,
    ErpHomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    //AuthModule,
    //SystemDataInputModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
