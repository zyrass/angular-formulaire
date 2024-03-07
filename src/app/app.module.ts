import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Cours1Component } from './components/cours/cours-1/cours-1.component';
import { Cours2Component } from './components/cours/cours-2/cours-2.component';
import { Cours3Component } from './components/cours/cours-3/cours-3.component';
import { Cours4Component } from './components/cours/cours-4/cours-4.component';
import { Cours5Component } from './components/cours/cours-5/cours-5.component';
import { Cours6Component } from './components/cours/cours-6/cours-6.component';
import { Cours7Component } from './components/cours/cours-7/cours-7.component';
import { Cours8Component } from './components/cours/cours-8/cours-8.component';
import { Cours9Component } from './components/cours/cours-9/cours-9.component';
import { Cours10Component } from './components/cours/cours-10/cours-10.component';
import { Cours11Component } from './components/cours/cours-11/cours-11.component';
import { Cours12Component } from './components/cours/cours-12/cours-12.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Cours1Component,
    Cours2Component,
    Cours3Component,
    Cours4Component,
    Cours5Component,
    Cours6Component,
    Cours7Component,
    Cours8Component,
    Cours9Component,
    Cours10Component,
    Cours11Component,
    Cours12Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
