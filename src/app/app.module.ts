import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { SharedModule } from "./shared.module";
import { ItineraryModule } from './itinerary/itinerary.module';
import { UsersModule } from './users/users.module';
import { LoginComponent } from './login/login.component';
import { RegisterBusinessManComponent } from './login/register-business-man/register-business-man.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { CompanyModule } from './company/company.module';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    RegisterBusinessManComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ItineraryModule,
    UsersModule,
    HttpClientModule,
    CompanyModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RegisterBusinessManComponent, ForgotPasswordComponent]
})
export class AppModule {}
