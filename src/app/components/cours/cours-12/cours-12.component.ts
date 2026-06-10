import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-cours-12',
  templateUrl: './cours-12.component.html',
})
export class Cours12Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'control-value-accessor')!;
  public title?: string;
  public slug?: string;

  public form: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    satisfaction: new FormControl(3, [Validators.required, Validators.min(1)]),
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
      console.log('Retour soumis :', this.form.value);
    }
  }
}
