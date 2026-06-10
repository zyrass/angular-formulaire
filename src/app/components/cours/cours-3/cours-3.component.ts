import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cours-3',
  templateUrl: './cours-3.component.html',
})
export class Cours3Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'value-and-reset')!;
  public title?: string;
  public slug?: string;

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
  public form: FormGroup = new FormGroup({
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    passPhrase: new FormControl(''),
  });
  public formValueSignal = toSignal(this.form.valueChanges, { initialValue: this.form.value });
  public submitForm() {
    console.log(this.form.value);
  }
  public resetForm() {
    this.form.reset();
  }
}
