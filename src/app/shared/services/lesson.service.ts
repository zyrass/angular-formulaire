import { Injectable } from '@angular/core';
import { Lesson } from '../interfaces/Lesson.interface';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  private lessons: Lesson[] = [
    // ─── FONDAMENTAUX ANGULAR (1–11) ───────────────────────────────────────
    {
      num: 1,
      title: 'Architecture Angular',
      slug: 'architecture-angular',
      description: "Structure d'un projet Angular CLI, décorateurs TypeScript essentiels et choix entre NgModule et Standalone.",
      status: '✅',
      track: 'basics',
    },
    {
      num: 2,
      title: 'Composants & @Component',
      slug: 'composants-component',
      description: "Le composant est l'unité de base d'Angular — décorateur @Component, selector, template, styles et ViewEncapsulation.",
      status: '✅',
      track: 'basics',
    },
    {
      num: 3,
      title: 'Templates & Data Binding',
      slug: 'templates-data-binding',
      description: 'Les 4 mécanismes de liaison données-vue : interpolation, property binding, event binding et two-way binding.',
      status: '✅',
      track: 'basics',
    },
    {
      num: 4,
      title: 'Directives Structurelles',
      slug: 'directives-structurelles',
      description: '*ngIf, *ngFor, *ngSwitch en v17 et leurs équivalents modernes @if, @for, @switch introduits en Angular 17.',
      status: '✅',
      track: 'basics',
    },
    {
      num: 5,
      title: 'Pipes & Transformation de données',
      slug: 'pipes-transformation',
      description: 'Pipes natifs (date, currency, uppercase, async), pipes chaînés et création de pipes personnalisés.',
      status: '✅',
      track: 'basics',
    },
    {
      num: 6,
      title: 'Services & Injection de Dépendances',
      slug: 'services-injection',
      description: '@Injectable, providedIn: root, inject() fonctionnel et hiérarchie des injecteurs Angular.',
      status: '✅',
      track: 'basics',
    },
    {
      num: 7,
      title: 'Routing & Navigation',
      slug: 'routing-navigation',
      description: 'Configuration des routes, routerLink, navigation programmatique avec Router et lecture des paramètres avec ActivatedRoute.',
      status: '✅',
      track: 'basics',
    },
    {
      num: 8,
      title: 'Communication entre Composants',
      slug: 'communication-composants',
      description: '@Input(), @Output(), EventEmitter et @ViewChild — les patterns fondamentaux de communication parent-enfant.',
      status: '✅',
      track: 'basics',
    },
    {
      num: 9,
      title: 'Lifecycle Hooks',
      slug: 'lifecycle-hooks',
      description: "ngOnInit, ngOnDestroy, ngOnChanges, ngAfterViewInit — interceptez chaque phase de vie d'un composant.",
      status: '✅',
      track: 'basics',
    },
    {
      num: 10,
      title: 'Change Detection & OnPush',
      slug: 'change-detection',
      description: "Comprendre la détection de changements Angular, la stratégie OnPush et l'immutabilité pour optimiser les performances.",
      status: '✅',
      track: 'basics',
    },
    {
      num: 11,
      title: 'Standalone Components',
      slug: 'standalone-components',
      description: 'Architecture moderne sans NgModule — standalone: true, bootstrapApplication et migration des projets existants.',
      status: '✅',
      track: 'basics',
    },

    // ─── FORMULAIRES RÉACTIFS (12–23) ──────────────────────────────────────
    {
      num: 12,
      title: 'ReactiveForm',
      slug: 'reactive-form',
      description: "Introduction à l'approche réactive : création d'un FormControl isolé, lecture de sa valeur, abonnement à valueChanges et gestion du statut de validation.",
      status: '✅',
      track: 'forms',
    },
    {
      num: 13,
      title: 'Formulaire réactif',
      slug: 'formulaire-reactif',
      description: "Construction d'un formulaire complet avec FormGroup et FormBuilder : déclaration des champs, liaison au template via [formGroup] et [formControlName], et soumission.",
      status: '✅',
      track: 'forms',
    },
    {
      num: 14,
      title: 'Value et Reset',
      slug: 'value-and-reset',
      description: "La propriété value d'un FormGroup permet d'accéder ou de définir les valeurs des contrôles, tandis que reset() réinitialise ces valeurs aux valeurs initiales.",
      status: '✅',
      track: 'forms',
    },
    {
      num: 15,
      title: 'Les validateurs',
      slug: 'validateurs',
      description: "Les validateurs dans les formulaires réactifs d'Angular servent à définir des règles de validation pour les champs du formulaire, synchrones ou asynchrones.",
      status: '✅',
      track: 'forms',
    },
    {
      num: 16,
      title: "Les messages d'erreurs",
      slug: 'messages-erreurs',
      description: "Les messages d'erreurs dans les formulaires réactifs d'Angular permettent d'afficher des messages explicatifs lorsqu'un champ ne passe pas une validation donnée.",
      status: '✅',
      track: 'forms',
    },
    {
      num: 17,
      title: 'Les classes et états des abstractControls',
      slug: 'classes-etats-abstractcontrols',
      description: "Les classes et états des AbstractControls dans les formulaires réactifs d'Angular (valid, invalid, dirty, pristine, etc.) reflètent l'état de validation et d'interaction des contrôles.",
      status: '✅',
      track: 'forms',
    },
    {
      num: 18,
      title: 'Les formGroups imbriqué',
      slug: 'formgroups-imbrique',
      description: "Les FormGroups imbriqués dans les formulaires réactifs d'Angular permettent de modéliser des structures de données imbriquées et complexes de manière organisée.",
      status: '✅',
      track: 'forms',
    },
    {
      num: 19,
      title: 'FormArray',
      slug: 'formarray',
      description: "Le FormArray dans les formulaires réactifs d'Angular permet de gérer des groupes de FormControls dynamiques comme des tableaux de champs.",
      status: '✅',
      track: 'forms',
    },
    {
      num: 20,
      title: 'FormBuilder',
      slug: 'formbuilder',
      description: "Le FormBuilder dans les formulaires réactifs d'Angular facilite la création de groupe de contrôles et de formulaires en fournissant une syntaxe plus concise.",
      status: '✅',
      track: 'forms',
    },
    {
      num: 21,
      title: 'FormGroup et EventEmitter',
      slug: 'formgroup-eventemitter',
      description: "Dans les formulaires réactifs d'Angular, un FormGroup peut émettre des événements via EventEmitter pour notifier les changements de valeur ou d'état.",
      status: '✅',
      track: 'forms',
    },
    {
      num: 22,
      title: 'Case à cocher, boutons radio et listes déroulantes',
      slug: 'checkbox-radio-select',
      description: "Dans les formulaires réactifs d'Angular, les cases à cocher, boutons radio et listes déroulantes sont gérés respectivement par FormControl, FormArray et FormGroup.",
      status: '✅',
      track: 'forms',
    },
    {
      num: 23,
      title: 'ControlValueAccessor',
      slug: 'control-value-accessor',
      description: "Le ControlValueAccessor (CVA) permet de créer des composants de formulaire personnalisés réutilisables qui s'intègrent de manière transparente aux Reactive Forms d'Angular.",
      status: '✅',
      track: 'forms',
    },

    // ─── CONCEPTS MODERNES (24–27) ─────────────────────────────────────────
    {
      num: 24,
      title: 'Signals et RxJS',
      slug: 'signals-rxjs',
      description: "Le pont entre la programmation réactive par observables de RxJS et la réactivité fine par signaux d'Angular 18+.",
      status: '✅',
      track: 'advanced',
    },
    {
      num: 25,
      title: 'HttpClient et Intercepteurs',
      slug: 'http-interceptor',
      description: 'Configuration moderne de HttpClient et des intercepteurs fonctionnels pour la sécurité et la résilience.',
      status: '✅',
      track: 'advanced',
    },
    {
      num: 26,
      title: 'Guards Fonctionnels',
      slug: 'guards-fonctionnels',
      description: 'Sécurisation des accès aux pages et validation des sorties de formulaires (CanDeactivate) avec inject().',
      status: '✅',
      track: 'advanced',
    },
    {
      num: 27,
      title: 'Deferrable Views et Zoneless',
      slug: 'defer-zoneless',
      description: 'Optimisation des performances de rendu avec @defer et passage aux applications réactives sans Zone.js.',
      status: '✅',
      track: 'advanced',
    },
  ];

  public selectedVersion: string = 'v17';
  public activeTrack: string = 'forms';

  constructor() {
    this.loadStatuses();
    this.loadSelectedVersion();
  }

  private loadStatuses() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('angular_form_lessons_statuses');
      if (saved) {
        try {
          const statuses = JSON.parse(saved) as Record<number, string>;
          this.lessons.forEach((l) => {
            if (statuses[l.num]) {
              l.status = statuses[l.num];
            }
          });
        } catch (e) {
          console.error('Error parsing saved statuses', e);
        }
      }
    }
  }

  private saveStatuses() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const statuses: Record<number, string> = {};
      this.lessons.forEach((l) => {
        statuses[l.num] = l.status;
      });
      localStorage.setItem('angular_form_lessons_statuses', JSON.stringify(statuses));
    }
  }

  private loadSelectedVersion() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedVer = localStorage.getItem('angular_form_selected_version');
      if (savedVer) {
        this.selectedVersion = savedVer;
      }
    }
  }

  public setSelectedVersion(ver: string) {
    this.selectedVersion = ver;
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('angular_form_selected_version', ver);
    }
  }

  public getVersionSummary(version: string): string {
    const summaries: Record<string, string> = {
      v17: "⚙️ <strong>Angular v17 (Version du cours)</strong> : Cette version pose les fondations solides des formulaires réactifs en utilisant l'architecture standard par modules (NgModule) ou standalone.",
      v18: "⚡ <strong>Angular v18 (Évolutions)</strong> : Introduction du flux global <code>control.events</code> et généralisation définitive de l'architecture standalone par défaut.",
      v19: "💡 <strong>Angular v19 (Signaux & Modernisation)</strong> : Adoption générale des signaux pour le data-binding (<code>input()</code>, <code>model()</code>) et support natif du mode sans Zone.js (Zoneless).",
      v20: "🚀 <strong>Angular v20 (Recherche & Signals natifs)</strong> : Vers des formulaires totalement intégrés aux signaux natifs pour une réactivité optimale sans surcouche RxJS.",
      v21: "🔥 <strong>Angular v21 (Formulaires Natifs)</strong> : Stabilisation complète des architectures de formulaires basées sur les signaux, éliminant la dépendance à RxJS pour les états simples et intégration optimisée."
    };
    return summaries[version] || '';
  }

  public getVersionBadge(lessonNum: number, version: string): { text: string; class: string } {
    if (version === 'v17') {
      return { text: 'Standard', class: 'bg-slate-700/60 text-slate-300 border border-slate-600/40' };
    }
    // Basics lessons always show as stable on all versions
    const basicsLesson = this.lessons.find(l => l.num === lessonNum && l.track === 'basics');
    if (basicsLesson) {
      return { text: 'Stable', class: 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40' };
    }

    const updates: Record<string, Record<number, { text: string; class: string }>> = {
      v18: {
        12: { text: 'Standalone par défaut', class: 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 font-bold' },
        13: { text: 'Standalone imports', class: 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 font-bold' },
        14: { text: 'RxJS standard', class: 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/40' },
        15: { text: 'Async Validators +', class: 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 font-bold' },
        16: { text: 'Control Flow @if', class: 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 font-bold' },
        18: { text: 'Standalone nested', class: 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 font-bold' },
        19: { text: 'Control Flow @for', class: 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 font-bold' },
        20: { text: 'inject(FormBuilder)', class: 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 font-bold' },
        21: { text: 'control.events', class: 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 font-bold' },
        23: { text: 'CVA Standalone', class: 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/40' },
        24: { text: 'toSignal() intro', class: 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 font-bold' },
        25: { text: 'provideHttpClient', class: 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 font-bold' },
        26: { text: 'inject() in Guards', class: 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 font-bold' },
        27: { text: '@defer syntax', class: 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 font-bold' }
      },
      v19: {
        12: { text: 'Zoneless runtime', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' },
        13: { text: 'inject(FormBuilder)', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' },
        14: { text: 'toSignal()', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' },
        15: { text: 'Signal validation', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' },
        17: { text: 'State toSignal', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' },
        18: { text: 'inject() nested', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' },
        19: { text: 'TrackBy optimisé', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' },
        20: { text: 'inject() FB stable', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' },
        21: { text: 'toSignal() events', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' },
        22: { text: 'Loop @for option', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' },
        23: { text: 'Signal inputs/outputs', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' },
        24: { text: 'effect/computed stable', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' },
        25: { text: 'Functional interceptors', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' },
        26: { text: 'CanDeactivate fn', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' },
        27: { text: 'Zoneless config', class: 'bg-purple-900/60 text-purple-300 border border-purple-700/40 font-bold' }
      },
      v20: {
        12: { text: 'Zoneless stable', class: 'bg-rose-900/60 text-rose-300 border border-rose-700/40 font-bold' },
        13: { text: 'inject() stable', class: 'bg-rose-900/60 text-rose-300 border border-rose-700/40 font-bold' },
        14: { text: 'toSignal stable', class: 'bg-rose-900/60 text-rose-300 border border-rose-700/40 font-bold' },
        15: { text: 'Signal validators', class: 'bg-rose-900/60 text-rose-300 border border-rose-700/40 font-bold' },
        18: { text: 'Nested Zoneless', class: 'bg-rose-900/60 text-rose-300 border border-rose-700/40 font-bold' },
        19: { text: 'FormArray Zoneless', class: 'bg-rose-900/60 text-rose-300 border border-rose-700/40 font-bold' },
        20: { text: 'FB inject stable', class: 'bg-rose-900/60 text-rose-300 border border-rose-700/40 font-bold' },
        21: { text: 'Signal events', class: 'bg-rose-900/60 text-rose-300 border border-rose-700/40 font-bold' },
        22: { text: 'Signal select', class: 'bg-rose-900/60 text-rose-300 border border-rose-700/40 font-bold' },
        23: { text: 'Zoneless CVA', class: 'bg-rose-900/60 text-rose-300 border border-rose-700/40' },
        24: { text: 'linkedSignal', class: 'bg-rose-900/60 text-rose-300 border border-rose-700/40 font-bold' },
        25: { text: 'Interceptors stable', class: 'bg-rose-900/60 text-rose-300 border border-rose-700/40' },
        26: { text: 'Functional guards stable', class: 'bg-rose-900/60 text-rose-300 border border-rose-700/40' },
        27: { text: 'Zoneless stable', class: 'bg-rose-900/60 text-rose-300 border border-rose-700/40 font-bold' }
      },
      v21: {
        12: { text: 'Performance native', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' },
        13: { text: 'Control Signals', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' },
        14: { text: 'valueSignal', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' },
        15: { text: 'Signal validators', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' },
        16: { text: 'Signal validation', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' },
        17: { text: 'State Signals', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' },
        18: { text: 'Signal nesting', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' },
        19: { text: 'Signal track', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' },
        20: { text: 'SignalFormBuilder', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' },
        21: { text: 'Native Signals', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' },
        22: { text: 'Signal select', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' },
        23: { text: 'Signal-based CVA', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' },
        24: { text: 'Signal Store stable', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' },
        25: { text: 'Resource API', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' },
        26: { text: 'Modern Guards', class: 'bg-red-950/60 text-red-300 border border-red-800/40' },
        27: { text: 'Full Zoneless Runtime', class: 'bg-red-950/60 text-red-300 border border-red-800/40 font-bold' }
      }
    };

    return updates[version]?.[lessonNum] || { text: 'Stable', class: 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40' };
  }

  public getVersionNote(lessonNum: number, version: string): string {
    const notes: Record<string, Record<number, string>> = {
      v17: {},
      v18: {
        12: "Depuis Angular v18, l'architecture standalone est générée par défaut. On importe `ReactiveFormsModule` directement au niveau du composant.",
        13: "Le FormGroup est déclaré au sein d'un composant standalone (les dépendances sont importées dans `@Component.imports` au lieu d'un module).",
        14: "Lecture classique des données via `this.form.value` et souscription réactive standard à l'accesseur synchrone.",
        15: "En Angular v18, les validateurs asynchrones s'intègrent directement dans un composant standalone sans import de module supplémentaire. La syntaxe `Validators.compose()` reste identique.",
        16: "Adoption recommandée du nouveau Control Flow `@if (form.get('username').invalid)` au lieu de la directive historique `*ngIf`.",
        18: "Les FormGroups imbriqués dans un composant standalone déclarent leurs propres imports. On peut désormais découper chaque sous-formulaire en composant standalone autonome.",
        19: "Utilisation recommandée du nouveau bloc `@for` à la place de `*ngFor` pour itérer plus efficacement sur les contrôles dynamiques.",
        20: "En Angular v18, le `FormBuilder` peut être injecté via la fonction `inject(FormBuilder)` au lieu du constructeur, simplifiant les composants standalone.",
        21: "Introduction de la propriété `control.events` qui centralise tous les événements d'un contrôle (touched, dirty, value changes) sous forme de flux RxJS unique.",
        23: "En Angular v18, les composants personnalisés ControlValueAccessor (CVA) sont déclarés en standalone. Ils implémentent l'interface standard CVA.",
        24: "Angular 18 standardise l'interopérabilité RxJS/Signals avec `toSignal()` pour écouter les observables dans la vue.",
        25: "Le bootstrap par fonctions privilégie `provideHttpClient()` en remplacement du module historique `HttpClientModule`.",
        26: "Les guards sous forme de classes implémentant `CanActivate` sont officiellement obsolètes au profit de fonctions pures.",
        27: "Introduction des Deferrable Views (`@defer`) permettant un lazy-loading granulaire au niveau du template."
      },
      v19: {
        12: "Angular 19 introduit l'exécution sans Zone.js par défaut pour les nouveaux projets, simplifiant la détection globale de changements.",
        13: "Injection privilégiée du service FormBuilder via la fonction fonctionnelle `inject(FormBuilder)` plutôt que par injection dans le constructeur.",
        14: "Conversion simple du flux `valueChanges` en signal réactif dans le template avec la fonction `toSignal(this.form.valueChanges)`.",
        15: "En Angular 19, les validateurs asynchrones peuvent être connectés à des Signals via `toSignal()`, permettant une lecture réactive directe de l'état de validation dans le template.",
        17: "Possibilité d'encapsuler les états comme `statusChanges` dans des signaux réactifs via `toSignal()` pour un rafraîchissement d'interface optimal.",
        18: "En Angular 19, les FormGroups imbriqués peuvent être initialisés via `inject(FormBuilder)` dans chaque composant standalone fils, évitant l'injection répétée dans le constructeur.",
        19: "Le bloc de boucle de rendu `@for` exige une clé de tracking obligatoire (`track`), améliorant grandement les performances de rafraîchissement visuel.",
        20: "L'injection via `inject(FormBuilder)` est stabilisée et recommandée en v19 pour tous les composants standalone utilisant FormBuilder.",
        21: "Conversion des observables de modifications de valeurs et d'états en signaux réactifs via `toSignal()` pour lier la vue plus simplement.",
        22: "Utilisation optimale du nouveau bloc de flux `@for` pour générer de manière réactive les balises `<option>` de sélection.",
        23: "En Angular 19, les composants CVA peuvent utiliser les nouveaux signaux d'entrée et de sortie (Signal inputs & outputs) pour une gestion réactive propre.",
        24: "Les signaux d'effets (`effect()`) et de calculs dérivés (`computed()`) sont stabilisés et optimisés en v19.",
        25: "Déclaration simplifiée des intercepteurs fonctionnels via `withInterceptors([authInterceptor])`.",
        26: "Le guard `CanDeactivate` fonctionnel permet de surveiller facilement l'état de modification de formulaires locaux.",
        27: "Support expérimental stable pour exécuter l'application entièrement sans Zone.js avec `provideExperimentalZonelessChangeDetection()`."
      },
      v20: {
        12: "La détection Zoneless devient stable, permettant des mises à jour des formulaires sans rafraîchir l'application entière.",
        13: "L'injection de `FormBuilder` via `inject()` est stabilisée et s'intègre nativement aux architectures Zoneless sans déclenchement de zone.",
        14: "L'usage de `toSignal()` pour lire la valeur réactive en temps réel est standardisé et stabilisé pour tous les formulaires réactifs.",
        15: "En Angular v20, les validateurs peuvent retourner des Signals d'état directement, permettant un affichage conditionnel des erreurs sans abonnement RxJS.",
        18: "Les FormGroups imbriqués fonctionnent nativement en mode Zoneless — chaque modification de champ déclenche une mise à jour ciblée sans re-rendering global.",
        19: "Le FormArray fonctionne de manière stable en mode Zoneless, les ajouts/suppressions de contrôles ne déclenchent plus de détection globale.",
        20: "Le `FormBuilder` injecté via `inject()` est pleinement compatible Zoneless : aucune zone n'est déclenchée lors de la construction du formulaire.",
        21: "Optimisation de la propagation des événements dans les formulaires sans Zone.js, la détection fine de changements évitant les rendus globaux.",
        22: "En Angular v20, les cases à cocher et listes déroulantes liées à des signaux se mettent à jour finement sans re-rendering complet du composant.",
        23: "En Angular v20, la détection des changements à l'intérieur d'un composant CVA personnalisé s'effectue sans Zone.js de manière stable.",
        24: "Introduction du signal lié `linkedSignal()` permettant de réinitialiser un signal lorsque sa source change.",
        25: "HttpClient fonctionnel optimisé pour s'intégrer nativement aux architectures Zoneless sans déclencher de rafraîchissement global inutile.",
        27: "Le mode Zoneless est validé comme stable pour les applications de production, offrant des performances maximales."
      },
      v21: {
        12: "Intégration native totale du mode Zoneless stable : plus aucun re-rendering global lors de la modification des états de formulaire.",
        13: "Les instances de FormControl et FormGroup supportent l'accès direct aux signaux d'état pour la validation réactive.",
        14: "Accès synchrone et réactif direct aux valeurs via la propriété de Signal natif `.valueSignal`.",
        15: "En Angular v21, les validateurs peuvent être directement liés à des signaux natifs via des observables Signal-aware, éliminant la nécessité de `statusChanges` pour l'affichage réactif des erreurs.",
        16: "Lecture directe de l'état d'erreur via des signaux de contrôle, éliminant les appels de fonctions répétitifs dans le template.",
        17: "Accès natif aux états (`validSignal`, `dirtySignal`) sous forme de signaux pour piloter les styles dynamiques de manière réactive.",
        18: "En Angular v21, les FormGroups imbriqués peuvent être déclarés entièrement avec `SignalFormBuilder`, chaque champ étant un signal réactif et l'imbrication des groupes reflotée dans une structure signal arborescente.",
        19: "Le FormArray en Angular v21 expose un signal natif représentant le tableau de contrôles, permettant un rendu réactif direct sans abonnement RxJS.",
        20: "Introduction expérimentale de `SignalFormBuilder` permettant de déclarer un formulaire basé uniquement sur les signaux dès sa structure.",
        21: "Utilisation des signaux natifs intégrés directement aux contrôles (ex: `valueSignal`), éliminant l'usage de RxJS pour le binding simple.",
        22: "Liaison réactive de la sélection d'options et des cases à cocher directement à partir de signaux d'état.",
        23: "En Angular v21, le ControlValueAccessor s'intègre nativement avec des signaux bidirectionnels (model()), simplifiant drastiquement l'implémentation.",
        24: "NgRx Signal Store est le standard recommandé pour la gestion globale d'états asynchrones dans Angular v21.",
        25: "La nouvelle API `resource()` d'Angular 21 simplifie les requêtes HTTP asynchrones basées sur des requêtes réactives par signaux.",
        26: "Guards fonctionnels pleinement unifiés avec la gestion des états asynchrones et l'injection moderne de services.",
        27: "Runtime Zoneless activé par défaut à la création de projet pour tous les nouveaux bundles de production."
      }
    };

    return notes[version]?.[lessonNum] || '';
  }

  public getLessons() {
    return this.lessons.filter((l) => l.track === this.activeTrack);
  }

  public getAllLessons() {
    return this.lessons;
  }

  public toggleLessonStatus(num: number) {
    const lesson = this.lessons.find((l) => l.num === num);
    if (lesson) {
      if (lesson.status === '✅') {
        lesson.status = '❌';
      } else if (lesson.status === '❌') {
        lesson.status = '🚧';
      } else {
        lesson.status = '✅';
      }
      this.saveStatuses();
    }
  }
}
