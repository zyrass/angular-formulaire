import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-cours-3',
  templateUrl: './cours-3.component.html',
})
export class Cours3Component {
  public lesson: Lesson = this.lessonService.getLessons()[2];
  public title?: string;
  public slug?: string;

  constructor(private lessonService: LessonService) {
    this.title = this.lesson.title;
    this.slug = this.lesson.slug;
  }
  public form: FormGroup = new FormGroup({
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    passPhrase: new FormControl(''),
  });
  public submitForm() {
    console.log(this.form.value);
  }
}
