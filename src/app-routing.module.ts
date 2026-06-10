import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { Cours13Component } from './components/cours/cours-13/cours-13.component';
import { Cours14Component } from './components/cours/cours-14/cours-14.component';
import { Cours15Component } from './components/cours/cours-15/cours-15.component';
import { Cours16Component } from './components/cours/cours-16/cours-16.component';
import { CoursComponent } from './components/cours/cours.component';
import { HomeComponent } from './components/home/home.component';
import { SetupComponent } from './components/setup/setup.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'setup', component: SetupComponent },
  {
    path: 'cours',
    component: CoursComponent,
  },
  { path: 'cours/reactive-form', component: Cours1Component },
  { path: 'cours/formulaire-reactif', component: Cours2Component },
  { path: 'cours/value-and-reset', component: Cours3Component },
  { path: 'cours/validateurs', component: Cours4Component },
  { path: 'cours/messages-erreurs', component: Cours5Component },
  { path: 'cours/classes-etats-abstractcontrols', component: Cours6Component },
  { path: 'cours/formgroups-imbrique', component: Cours7Component },
  { path: 'cours/formarray', component: Cours8Component },
  { path: 'cours/formbuilder', component: Cours9Component },
  { path: 'cours/formgroup-eventemitter', component: Cours10Component },
  { path: 'cours/checkbox-radio-select', component: Cours11Component },
  { path: 'cours/control-value-accessor', component: Cours12Component },
  { path: 'cours/signals-rxjs', component: Cours13Component },
  { path: 'cours/http-interceptor', component: Cours14Component },
  { path: 'cours/guards-fonctionnels', component: Cours15Component },
  { path: 'cours/defer-zoneless', component: Cours16Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
