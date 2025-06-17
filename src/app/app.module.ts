/* import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module'; // Importa el módulo auth

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,  // Para que los componentes de auth funcionen
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } */





/*import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(AppRoutingModule)
  ]
});*/

/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }*/

/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
  AppComponent
    
  ],
  imports: [
    BrowserModule,
  //  HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserService],
 bootstrap: [AppComponent]
})
export class AppModule { }*/