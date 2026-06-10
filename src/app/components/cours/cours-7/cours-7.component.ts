import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-cours-7',
  templateUrl: './cours-7.component.html',
})
export class Cours7Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'formgroups-imbrique')!;
  public title?: string;
  public slug?: string;

  public form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
    }),
  });

  constructor(private lessonService: LessonService) {
    this.title = this.lesson.title;
    this.slug = this.lesson.slug;
  }

  public get selectedVersion(): string {
    return this.lessonService.selectedVersion;
  }

  public get versionNote(): string {
    return this.lessonService.getVersionNote(this.lesson.num, this.selectedVersion);
  }

  public submitForm() {
    if (this.form.valid) {
      console.log('Données du formulaire :', this.form.value);
    }
  }
}
