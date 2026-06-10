import { Component } from '@angular/core';
import { LessonService } from '../../../shared/services/lesson.service';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';

@Component({ selector: 'app-cours-19', templateUrl: './cours-19.component.html' })
export class Cours19Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.num === 3)!;
  public title = this.lesson.title;
  constructor(private lessonService: LessonService) {}
  public get selectedVersion(): string { return this.lessonService.selectedVersion; }
}
