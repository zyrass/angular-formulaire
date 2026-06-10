// Dépendances
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SetupComponent } from './components/setup/setup.component';
import { AsideComponent } from './components/aside/aside.component';
import { CoursComponent } from './components/cours/cours.component';
import { LessonService } from './shared/services/lesson.service';

// Cours Fondamentaux Angular (1–11)
import { Cours17Component } from './components/cours/cours-17/cours-17.component';
import { Cours18Component } from './components/cours/cours-18/cours-18.component';
import { Cours19Component } from './components/cours/cours-19/cours-19.component';
import { Cours20Component } from './components/cours/cours-20/cours-20.component';
import { Cours21Component } from './components/cours/cours-21/cours-21.component';
import { Cours22Component } from './components/cours/cours-22/cours-22.component';
import { Cours23Component } from './components/cours/cours-23/cours-23.component';
import { Cours24Component } from './components/cours/cours-24/cours-24.component';
import { Cours25Component } from './components/cours/cours-25/cours-25.component';
import { Cours26Component } from './components/cours/cours-26/cours-26.component';
import { Cours27Component } from './components/cours/cours-27/cours-27.component';

// Cours Formulaires Réactifs (12–23)
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
import { StarRatingComponent } from './components/cours/cours-12/star-rating.component';

// Cours Concepts Modernes (24–27)
import { Cours13Component } from './components/cours/cours-13/cours-13.component';
import { Cours14Component } from './components/cours/cours-14/cours-14.component';
import { Cours15Component } from './components/cours/cours-15/cours-15.component';
import { Cours16Component } from './components/cours/cours-16/cours-16.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SetupComponent,
    AsideComponent,
    CoursComponent,
    // Fondamentaux Angular (1–11)
    Cours17Component,
    Cours18Component,
    Cours19Component,
    Cours20Component,
    Cours21Component,
    Cours22Component,
    Cours23Component,
    Cours24Component,
    Cours25Component,
    Cours26Component,
    Cours27Component,
    // Formulaires Réactifs (12–23)
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
    StarRatingComponent,
    // Concepts Modernes (24–27)
    Cours13Component,
    Cours14Component,
    Cours15Component,
    Cours16Component,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [provideClientHydration(), LessonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
