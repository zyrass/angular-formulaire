import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cours1Component } from './components/cours/cours-1/cours-1.component';
import { Cours2Component } from './components/cours/cours-2/cours-2.component';

const routes: Routes = [
  { path: '', redirectTo: 'cours', pathMatch: 'full' },
  {
    path: 'cours',
    children: [
      { path: 'reactive-form', component: Cours1Component },
      { path: 'formulaire-reactif', component: Cours2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
