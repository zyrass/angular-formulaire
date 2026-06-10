import { Component } from '@angular/core';
import { LessonService } from '../../../shared/services/lesson.service';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';

@Component({
  selector: 'app-cours-17',
  templateUrl: './cours-17.component.html',
})
export class Cours17Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.num === 1)!;
  public title?: string;
  public slug?: string;

  constructor(private lessonService: LessonService) {
    this.title = this.lesson.title;
    this.slug = this.lesson.slug;
  }

  public get selectedVersion(): string {
    return this.lessonService.selectedVersion;
  }
}
