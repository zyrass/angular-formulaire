import { Component } from '@angular/core';
import { LessonService } from '../../../shared/services/lesson.service';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';

@Component({ selector: 'app-cours-26', templateUrl: './cours-26.component.html' })
export class Cours26Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.num === 10)!;
  public title = this.lesson.title;
  constructor(private lessonService: LessonService) {}
  public get selectedVersion(): string { return this.lessonService.selectedVersion; }
}
