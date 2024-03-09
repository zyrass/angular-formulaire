import { Injectable } from '@angular/core';
import { Lesson } from '../interfaces/Lesson.interface';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  private lessons: Lesson[] = [
    {
      num: 1,
      title: 'ReactiveForm',
      slug: 'reactive-form',
      description:
        'ReactiveForm dans Angular est un moyen déclaratif de créer des formulaires, en utilisant des objets modèles pour gérer la logique de validation et de soumission des données.',
      status: '✅',
    },
    {
      num: 2,
      title: 'Formulaire réactif',
      slug: 'formulaire-reactif',
      description:
        'Un formulaire réactif dans Angular permet de créer des formulaires de manière programmatique, avec une gestion réactive des données et des validations.',
      status: '❌',
    },
    {
      num: 3,
      title: 'Value et Reset',
      slug: 'value-and-reset',
      description:
        "La propriété value d'un FormGroup permet d'accéder ou de définir les valeurs des contrôles, tandis que reset() réinitialise ces valeurs aux valeurs initiales.",
      status: '✒️',
    },
    {
      num: 4,
      title: 'Les validateurs',
      slug: 'validateurs',
      description:
        "Les validateurs dans les formulaires réactifs d'Angular servent à définir des règles de validation pour les champs du formulaire, synchrones ou asynchrones..",
      status: '🚧',
    },
    {
      num: 5,
      title: "Les messages d'erreurs",
      slug: 'messages-erreurs',
      description:
        "Les messages d'erreurs dans les formulaires réactifs d'Angular permettent d'afficher des messages explicatifs lorsqu'un champ ne passe pas une validation donnée.",
      status: '🚧',
    },
    {
      num: 6,
      title: 'Les classes et états des abstractControls',
      slug: 'classes-etats-abstractcontrols',
      description:
        "Les classes et états des AbstractControls dans les formulaires réactifs d'Angular (valid, invalid, dirty, pristine, etc.) reflètent l'état de validation et d'intéraction des contrôles.",
      status: '🚧',
    },
    {
      num: 7,
      title: 'Les formGroups imbriqué',
      slug: 'formgroups-imbrique',
      description:
        "Les FormGroups imbriqués dans les formulaires réactifs d'Angular permettent de modéliser des structures de données imbriquées et complexes de manière organisée.",
      status: '🚧',
    },
    {
      num: 8,
      title: 'FormArray',
      slug: 'formarray',
      description:
        "Le FormArray dans les formulaires réactifs d'Angular permet de gérer des groupes de FormControls dynamiques comme des tableaux de champs.",
      status: '🚧',
    },
    {
      num: 9,
      title: 'FormBuilder',
      slug: 'formbuilder',
      description:
        "Le FormBuilder dans les formulaires réactifs d'Angular facilite la création de groupe de contrôles et de formulaires en fournissant une syntaxe plus concise.",
      status: '🚧',
    },
    {
      num: 10,
      title: 'FormGroup et EventEmitter',
      slug: 'formgroup-eventemitter',
      description:
        "Dans les formulaires réactifs d'Angular, un FormGroup peut émettre des événements via EventEmitter pour notifier les changements de valeur ou d'état.",
      status: '🚧',
    },
    {
      num: 11,
      title: 'Case à cocher, boutons radio et listes déroulantes',
      slug: 'checkbox-radio-select',
      description:
        "Dans les formulaires réactifs d'Angular, les cases à cocher, boutons radio et listes déroulantes sont gérés respectivement par FormControl, FormArray et FormGroup.",
      status: '🚧',
    },
  ];

  constructor() {}

  public getLessons() {
    return this.lessons;
  }
}
