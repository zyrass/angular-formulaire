// Dépendances
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Cours1Component } from './components/cours/cours-1/cours-1.component';
import { Cours2Component } from './components/cours/cours-2/cours-2.component';
import { Cours3Component } from './components/cours/cours-3/cours-3.component';
import { CoursComponent } from './components/cours/cours.component';
import { AsideComponent } from './components/aside/aside.component';
import { LessonService } from './shared/services/lesson.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Cours1Component,
    Cours2Component,
    Cours3Component,
    CoursComponent,
    AsideComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideClientHydration(), LessonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
