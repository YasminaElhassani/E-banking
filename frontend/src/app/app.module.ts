import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
// katdefini la structures dialouek
// katdiclari les components dialouek and katiemporti les modules
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersComponent,
    AccountsComponent,
    NewCustomerComponent,
    CustomerAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule // pour gerer les formulaires et les valider
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }