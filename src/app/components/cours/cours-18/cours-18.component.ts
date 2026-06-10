import { Component } from '@angular/core';
import { LessonService } from '../../../shared/services/lesson.service';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';

@Component({ selector: 'app-cours-18', templateUrl: './cours-18.component.html' })
export class Cours18Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.num === 2)!;
  public title = this.lesson.title;
  constructor(private lessonService: LessonService) {}
  public get selectedVersion(): string { return this.lessonService.selectedVersion; }
}
