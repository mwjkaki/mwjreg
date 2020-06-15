import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA , LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';

import { Tab01Component } from './tabs/tab01.component';
import { Tab02Component } from './tabs/tab02.component';
import { Tab03Component } from './tabs/tab03.component';
import { Tab04Component } from './tabs/tab04.component';
import { CallbackComponent } from './components/auth/callback/callback.component';
import { NumberInputDirective } from './directives/number-input.directive';
import { PercentInputDirective } from './directives/percent-input.directive';
import { NumberInputPipe } from './pipes/number-input.pipe';
import { PercentInputPipe} from './pipes/percent-input.pipe';
import { TankaKbnPipe } from './pipes/tanka-kbn.pipe';
import { ZeiKbnPipe } from './pipes/zei-kbn.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';

import { FlexLayoutModule } from '@angular/flex-layout';
import {  MatButtonModule,
          MatBadgeModule,
          MatCardModule,
          MatCheckboxModule,
          MatExpansionModule,
          MatIconModule,
          MatInputModule,
          MatRadioModule,
          MatSelectModule,
          MatMenuModule,
          MatTableModule, MatToolbarModule, MatSidenavModule, MatListModule   } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { GraphQLModule } from './graph-ql/graph-ql.module';
import { UserNamePipe } from './user-name.pipe';
import { CounttblComponent } from './tbls/counttbl.component';

registerLocaleData(localeJa);

@NgModule({
  declarations: [
    AppComponent,
    Tab01Component,
    Tab02Component,
    Tab03Component,
    Tab04Component,
    CallbackComponent,
    NavbarComponent,
    UserNamePipe,
    CounttblComponent,
    NumberInputDirective,
    PercentInputDirective,
    NumberInputPipe,
    PercentInputPipe,
    TankaKbnPipe,ZeiKbnPipe
    // UserAttComponent
    // UserAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    FormsModule,
    FlexLayoutModule,
    MatMenuModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    GraphQLModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [ 
    { provide: LOCALE_ID, useValue: "ja-JP" },
    NumberInputPipe,PercentInputPipe 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
