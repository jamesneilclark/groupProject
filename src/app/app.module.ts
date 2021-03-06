import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialDesignModule } from '../material-design/material-design.module';

import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';

import { CheckoutComponent } from './checkout/checkout.component';
import { ToastModule } from './toast/toast.module';
import { AboutComponent } from './about/about.component';
import { PaymentComponent } from './payment/payment.component';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { SharedServicesModule } from './shared-services/shared-services.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CheckoutComponent,
    AboutComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    AppRoutes,
    HttpClientModule,
    ToastModule,
    SharedComponentsModule,
    SharedServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
