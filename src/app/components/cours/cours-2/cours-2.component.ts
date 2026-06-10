import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-cours-2',
  templateUrl: './cours-2.component.html',
})
export class Cours2Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'formulaire-reactif')!;
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

  public submitForm() {
    console.log(this.form);
  }
}
