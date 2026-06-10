import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from '../../shared/services/lesson.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router, private lessonService: LessonService) {}

  public selectTrack(track: string) {
    if (track === 'setup') {
      this.router.navigate(['/setup']);
    } else {
      this.lessonService.activeTrack = track;
      this.router.navigate(['/cours']);
    }
  }
}
