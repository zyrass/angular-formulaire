import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from '../../shared/services/lesson.service';
import { Lesson } from '../../shared/interfaces/Lesson.interface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
})
export class AsideComponent {
  constructor(private lessonService: LessonService, private router: Router) {}

  public get lessons(): Lesson[] {
    const url = this.router.url;
    const currentSlug = url.split('/cours/')[1];
    if (currentSlug) {
      const currentLesson = this.lessonService.getAllLessons().find(l => l.slug === currentSlug);
      if (currentLesson && currentLesson.track) {
        this.lessonService.activeTrack = currentLesson.track;
      }
    }
    return this.lessonService.getLessons();
  }

  public get shouldShow(): boolean {
    const url = this.router.url;
    return url.startsWith('/cours/') && url !== '/cours';
  }
}
