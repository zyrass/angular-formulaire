import { Component } from '@angular/core';
import { LessonService } from '../../../shared/services/lesson.service';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';

@Component({ selector: 'app-cours-25', templateUrl: './cours-25.component.html' })
export class Cours25Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.num === 9)!;
  public title = this.lesson.title;
  constructor(private lessonService: LessonService) {}
  public get selectedVersion(): string { return this.lessonService.selectedVersion; }
}
