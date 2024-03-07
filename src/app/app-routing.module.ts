import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cours1Component } from './components/cours/cours-1/cours-1.component';
import { Cours2Component } from './components/cours/cours-2/cours-2.component';
import { Cours10Component } from './components/cours/cours-10/cours-10.component';
import { Cours11Component } from './components/cours/cours-11/cours-11.component';
import { Cours12Component } from './components/cours/cours-12/cours-12.component';
import { Cours3Component } from './components/cours/cours-3/cours-3.component';
import { Cours4Component } from './components/cours/cours-4/cours-4.component';
import { Cours5Component } from './components/cours/cours-5/cours-5.component';
import { Cours6Component } from './components/cours/cours-6/cours-6.component';
import { Cours7Component } from './components/cours/cours-7/cours-7.component';
import { Cours8Component } from './components/cours/cours-8/cours-8.component';
import { Cours9Component } from './components/cours/cours-9/cours-9.component';

const routes: Routes = [
  { path: '', redirectTo: 'cours/1', pathMatch: 'full' },
  { path: 'cours/1', component: Cours1Component },
  { path: 'cours/2', component: Cours2Component },
  { path: 'cours/3', component: Cours3Component },
  { path: 'cours/4', component: Cours4Component },
  { path: 'cours/5', component: Cours5Component },
  { path: 'cours/6', component: Cours6Component },
  { path: 'cours/7', component: Cours7Component },
  { path: 'cours/8', component: Cours8Component },
  { path: 'cours/9', component: Cours9Component },
  { path: 'cours/10', component: Cours10Component },
  { path: 'cours/11', component: Cours11Component },
  { path: 'cours/12', component: Cours12Component },
  { path: '**', redirectTo: 'cours/1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
