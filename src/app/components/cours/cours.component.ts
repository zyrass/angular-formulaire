import { Component } from '@angular/core';
import { Lesson } from '../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../shared/services/lesson.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
})
export class CoursComponent {
  public title: string = 'Listes';
  public lessons: Lesson[] = this.lessonService.getLessons();

  constructor(private lessonService: LessonService, private router: Router) {
    console.table(this.lessons);
  }

  public rediriger(slug: string) {
    this.router.navigate(['/cours', slug]);
  }
}
