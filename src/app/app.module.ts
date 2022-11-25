import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientGateway } from './domain/models/gateways/PatientGateway';
import { PatientsService } from './infraestructure/driver_adapters/laboratoryApi/patients.service';
import { InterceptorInterceptor } from './infraestructure/helpers/interceptor.interceptor';
import { HomeComponent } from './UI/home/home.component';
import { CreateComponent } from './UI/patients/create/create.component';
import { ListComponent } from './UI/patients/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true},
  {provide: PatientGateway, useClass: PatientsService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
