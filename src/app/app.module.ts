import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiManagerService } from './services/api/api.manager.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AppPregnantPatientsModule } from './pages/pregnant-patients/app.pregnant-patients.module';
import { AppSharedModule } from './pages/shared/app.shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppPregnantPatientsModule,
    AppSharedModule,
    HttpClientModule,
  ],
  providers: [
    ApiManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
