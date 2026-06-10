import { Component } from '@angular/core';
import { LessonService } from '../../shared/services/lesson.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
})
export class SetupComponent {
  constructor(private lessonService: LessonService) {}

  public get selectedVersion(): string {
    return this.lessonService.selectedVersion;
  }

  public selectVersion(version: string) {
    this.lessonService.setSelectedVersion(version);
  }
}
