import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';

import { FormsModule,  } from '@angular/forms'; 
@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    RegistrationComponent, 
    ProfileComponent, 
    
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    FormsModule
  ],

  providers: [],

  bootstrap: [AppComponent],
  
})
export class AppModule {}
