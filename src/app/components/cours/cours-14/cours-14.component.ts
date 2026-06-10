import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-cours-14',
  templateUrl: './cours-14.component.html',
})
export class Cours14Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'http-interceptor')!;
  public title?: string;
  public slug?: string;

  // Playground states
  public apiResponse: any = null;
  public loading: boolean = false;
  public requestHeadersSent: string = '';

  constructor(
    private lessonService: LessonService,
    private http: HttpClient
  ) {
    this.title = this.lesson.title;
    this.slug = this.lesson.slug;
  }

  public fireRequest() {
    this.loading = true;
    this.apiResponse = null;
    this.requestHeadersSent = 'Authorization: Bearer mock-token-123\nContent-Type: application/json';

    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe({
      next: (response) => {
        this.apiResponse = response;
        this.loading = false;
      },
      error: (err) => {
        this.apiResponse = { error: 'Erreur lors de la requête HTTP', details: err.message };
        this.loading = false;
      }
    });
  }

  public get selectedVersion(): string {
    return this.lessonService.selectedVersion;
  }

  public get versionNote(): string {
    return this.lessonService.getVersionNote(this.lesson.num, this.selectedVersion);
  }
}
