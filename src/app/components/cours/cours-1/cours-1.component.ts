import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from './../../../shared/services/lesson.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cours-1',
  templateUrl: './cours-1.component.html',
})
export class Cours1Component {
  public lesson: Lesson = this.lessonService.getLessons()[0];
  public title?: string;
  public slug?: string;

  constructor(private lessonService: LessonService) {
    this.title = this.lesson.title;
    this.slug = this.lesson.slug;
  }

  public submitForm() {}
}
