import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from './../../../shared/services/lesson.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cours-1',
  templateUrl: './cours-1.component.html',
})
export class Cours1Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'reactive-form')!;
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

  public submitForm() {}
}
