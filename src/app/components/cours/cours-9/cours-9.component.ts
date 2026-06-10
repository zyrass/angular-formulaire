import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-cours-9',
  templateUrl: './cours-9.component.html',
})
export class Cours9Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'formbuilder')!;
  public title?: string;
  public slug?: string;

  public form: FormGroup;

  constructor(
    private lessonService: LessonService,
    private fb: FormBuilder
  ) {
    this.title = this.lesson.title;
    this.slug = this.lesson.slug;

    // Utilisation de FormBuilder pour simplifier l'écriture
    this.form = this.fb.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      hobbies: this.fb.array([this.fb.control('', Validators.required)]),
    });
  }

  public get selectedVersion(): string {
    return this.lessonService.selectedVersion;
  }

  public get versionNote(): string {
    return this.lessonService.getVersionNote(this.lesson.num, this.selectedVersion);
  }

  public submitForm() {
    if (this.form.valid) {
      console.log('Formulaire construit avec FormBuilder soumis :', this.form.value);
    }
  }
}
