import { Component } from '@angular/core';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-cours-16',
  templateUrl: './cours-16.component.html',
})
export class Cours16Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'defer-zoneless')!;
  public title?: string;
  public slug?: string;

  // Defer simulation states
  public isTriggered: boolean = false;
  public loading: boolean = false;
  public showContent: boolean = false;

  constructor(private lessonService: LessonService) {
    this.title = this.lesson.title;
    this.slug = this.lesson.slug;
  }

  public triggerDefer() {
    this.isTriggered = true;
    this.loading = true;
    this.showContent = false;

    setTimeout(() => {
      this.loading = false;
      this.showContent = true;
    }, 1500);
  }

  public resetDefer() {
    this.isTriggered = false;
    this.loading = false;
    this.showContent = false;
  }

  public get selectedVersion(): string {
    return this.lessonService.selectedVersion;
  }

  public get versionNote(): string {
    return this.lessonService.getVersionNote(this.lesson.num, this.selectedVersion);
  }
}
