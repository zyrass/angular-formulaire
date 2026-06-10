import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-cours-5',
  templateUrl: './cours-5.component.html',
})
export class Cours5Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'messages-erreurs')!;
  public title?: string;
  public slug?: string;

  public form: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
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
      console.log('Soumission réussie :', this.form.value);
    }
  }
}
