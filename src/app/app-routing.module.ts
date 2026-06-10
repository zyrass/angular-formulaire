import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SetupComponent } from './components/setup/setup.component';
import { CoursComponent } from './components/cours/cours.component';

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

// Cours Concepts Modernes (24–27)
import { Cours13Component } from './components/cours/cours-13/cours-13.component';
import { Cours14Component } from './components/cours/cours-14/cours-14.component';
import { Cours15Component } from './components/cours/cours-15/cours-15.component';
import { Cours16Component } from './components/cours/cours-16/cours-16.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'setup', component: SetupComponent },
  { path: 'cours', component: CoursComponent },

  // ─── Fondamentaux Angular (1–11) ─────────────────────────────────────────
  { path: 'cours/architecture-angular',    component: Cours17Component },
  { path: 'cours/composants-component',    component: Cours18Component },
  { path: 'cours/templates-data-binding',  component: Cours19Component },
  { path: 'cours/directives-structurelles',component: Cours20Component },
  { path: 'cours/pipes-transformation',    component: Cours21Component },
  { path: 'cours/services-injection',      component: Cours22Component },
  { path: 'cours/routing-navigation',      component: Cours23Component },
  { path: 'cours/communication-composants',component: Cours24Component },
  { path: 'cours/lifecycle-hooks',         component: Cours25Component },
  { path: 'cours/change-detection',        component: Cours26Component },
  { path: 'cours/standalone-components',   component: Cours27Component },

  // ─── Formulaires Réactifs (12–23) ────────────────────────────────────────
  { path: 'cours/reactive-form',              component: Cours1Component },
  { path: 'cours/formulaire-reactif',         component: Cours2Component },
  { path: 'cours/value-and-reset',            component: Cours3Component },
  { path: 'cours/validateurs',                component: Cours4Component },
  { path: 'cours/messages-erreurs',           component: Cours5Component },
  { path: 'cours/classes-etats-abstractcontrols', component: Cours6Component },
  { path: 'cours/formgroups-imbrique',        component: Cours7Component },
  { path: 'cours/formarray',                  component: Cours8Component },
  { path: 'cours/formbuilder',                component: Cours9Component },
  { path: 'cours/formgroup-eventemitter',     component: Cours10Component },
  { path: 'cours/checkbox-radio-select',      component: Cours11Component },
  { path: 'cours/control-value-accessor',     component: Cours12Component },

  // ─── Concepts Modernes (24–27) ───────────────────────────────────────────
  { path: 'cours/signals-rxjs',    component: Cours13Component },
  { path: 'cours/http-interceptor',component: Cours14Component },
  { path: 'cours/guards-fonctionnels', component: Cours15Component },
  { path: 'cours/defer-zoneless',  component: Cours16Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
