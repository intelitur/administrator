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
import { EventModule } from './event/event.module';
import { CategoryModule } from './category/category.module';
import { AdsModule } from './ads/ads.module';
import { FrecuentQustionsModule } from './frequent-questions/frequent-questions.module';
import { OfferModule } from './offers/offer.module';
import { ServiceModule } from './services/service.module';
import { ThemeService } from 'ng2-charts';
import { ContestsModule } from './contests/contests.module';
import { TouristRoutesModule } from './tourist-routes/tourist-routes.module';
import { ImagesModule } from './images/images.module';
import { TransportServicesModule } from './transport-services/transport-services.module';
import { QrCodesModule } from './qr-codes/qr-codes.module';

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
    CompanyModule,
    EventModule,
    CategoryModule,
    AdsModule,
    FrecuentQustionsModule,
    OfferModule,
    ServiceModule,
    TouristRoutesModule,
    ContestsModule,
    ImagesModule,
    TransportServicesModule,
    QrCodesModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent],
  entryComponents: [RegisterBusinessManComponent, ForgotPasswordComponent]
})
export class AppModule {
}
