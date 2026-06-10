import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-cours-15',
  templateUrl: './cours-15.component.html',
})
export class Cours15Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'guards-fonctionnels')!;
  public title?: string;
  public slug?: string;

  // Form group for dirty checking
  public form: FormGroup = new FormGroup({
    message: new FormControl(''),
  });

  // Guard logs
  public navigationStatus: string = '';
  public navigationStatusClass: string = 'text-slate-500';

  constructor(private lessonService: LessonService) {
    this.title = this.lesson.title;
    this.slug = this.lesson.slug;
  }

  public simulateNavigation() {
    const isDirty = this.form.dirty;

    if (isDirty) {
      const confirmLeave = confirm(
        'Attention ! Le formulaire contient des modifications non enregistrées.\n\nVoulez-vous vraiment quitter la page ?'
      );
      if (confirmLeave) {
        this.form.markAsPristine();
        this.navigationStatus = 'Navigation autorisée (Formulaire réinitialisé).';
        this.navigationStatusClass = 'text-green-500 font-bold';
      } else {
        this.navigationStatus = 'Navigation bloquée par le Guard fonctionnel (CanDeactivate).';
        this.navigationStatusClass = 'text-red-500 font-bold';
      }
    } else {
      this.navigationStatus = 'Navigation autorisée instantanément (Formulaire propre).';
      this.navigationStatusClass = 'text-indigo-500 font-bold';
    }
  }

  public saveForm() {
    this.form.markAsPristine();
    this.navigationStatus = 'Formulaire enregistré avec succès !';
    this.navigationStatusClass = 'text-emerald-500 font-bold';
  }

  public get selectedVersion(): string {
    return this.lessonService.selectedVersion;
  }

  public get versionNote(): string {
    return this.lessonService.getVersionNote(this.lesson.num, this.selectedVersion);
  }
}
