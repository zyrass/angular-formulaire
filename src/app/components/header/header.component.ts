import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from '../../shared/services/lesson.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public menuOpen: boolean = false;

  constructor(private router: Router, private lessonService: LessonService) {}

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  public rediriger(pathHome: string = '/') {
    this.router.navigate([pathHome]);
    this.menuOpen = false;
  }

  public navigateToTrack(track: 'basics' | 'forms' | 'advanced') {
    this.lessonService.activeTrack = track;
    this.router.navigate(['/cours']);
    this.menuOpen = false;
  }
}
