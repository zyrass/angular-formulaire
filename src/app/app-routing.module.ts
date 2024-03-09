import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cours1Component } from './components/cours/cours-1/cours-1.component';
import { Cours2Component } from './components/cours/cours-2/cours-2.component';
import { Cours3Component } from './components/cours/cours-3/cours-3.component';
import { CoursComponent } from './components/cours/cours.component';

const routes: Routes = [
  { path: '', redirectTo: 'cours', pathMatch: 'full' },
  {
    path: 'cours',
    component: CoursComponent,
  },
  { path: 'cours/reactive-form', component: Cours1Component },
  { path: 'cours/formulaire-reactif', component: Cours2Component },
  { path: 'cours/value-and-reset', component: Cours3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
