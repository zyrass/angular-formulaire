import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-cours-11',
  templateUrl: './cours-11.component.html',
})
export class Cours11Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'checkbox-radio-select')!;
  public title?: string;
  public slug?: string;

  public form: FormGroup = new FormGroup({
    newsletter: new FormControl(false),
    gender: new FormControl('male', Validators.required),
    framework: new FormControl('', Validators.required),
  });

  public frameworks: string[] = ['Angular', 'React', 'Vue', 'Svelte'];

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
      console.log('Préférences soumises :', this.form.value);
    }
  }
}
