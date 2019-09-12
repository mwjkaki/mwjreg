import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA , LOCALE_ID  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';

import { Tab01Component } from './tabs/tab01.component';
import { Tab02Component } from './tabs/tab02.component';
import { Tab03Component } from './tabs/tab03.component';
import { Tab04Component } from './tabs/tab04.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  MatButtonModule,
          MatCardModule,
          MatExpansionModule,
          MatIconModule,
          MatInputModule,
          MatRadioModule,
          MatSelectModule,
          MatTableModule   } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    Tab01Component,
    Tab02Component,
    Tab03Component,
    Tab04Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
