import { Component, OnInit } from '@angular/core';
import { Lesson } from '../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../shared/services/lesson.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
})
export class CoursComponent implements OnInit {
  public get title(): string {
    switch (this.lessonService.activeTrack) {
      case 'basics':
        return 'Sommaire : Fondamentaux Angular';
      case 'forms':
        return 'Sommaire : Formulaires Réactifs';
      case 'advanced':
        return 'Sommaire : Concepts Modernes Angular';
      default:
        return 'Sommaire Angular';
    }
  }

  public get description(): string {
    switch (this.lessonService.activeTrack) {
      case 'basics':
        return "Bienvenue sur le sommaire des Fondamentaux Angular. Maîtrisez l'architecture, les composants, le data binding, les directives, les services et le routing — les briques indispensables de tout projet Angular.";
      case 'forms':
        return "Bienvenue sur le sommaire des Formulaires Réactifs. Ce parcours rassemble les notions clés pour maîtriser la liaison de données, les validations synchrones/asynchrones et les contrôles personnalisés.";
      case 'advanced':
        return "Bienvenue sur le sommaire des Concepts Modernes d'Angular. Ce parcours couvre les notions avancées indispensables de la v17 à la v21 : Signals, flux HTTP, guards fonctionnels et rendu Zoneless.";
      default:
        return "Explorez les leçons de ce parcours d'apprentissage pour progresser sur Angular.";
    }
  }

  public get lessons(): Lesson[] {
    return this.lessonService.getLessons();
  }

  public showModal: boolean = false;
  public get selectedVersion(): string {
    return this.lessonService.selectedVersion;
  }

  constructor(private lessonService: LessonService, private router: Router) {}

  public ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const isDismissed = localStorage.getItem('angular_v17_v18_modal_dismissed');
      if (!isDismissed) {
        this.showModal = true;
      }
    }
  }

  public closeModal() {
    this.showModal = false;
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('angular_v17_v18_modal_dismissed', 'true');
    }
  }

  public openModal() {
    this.showModal = true;
  }

  public selectVersion(version: string) {
    this.lessonService.setSelectedVersion(version);
  }

  public getVersionSummary(version: string): string {
    return this.lessonService.getVersionSummary(version);
  }

  public getVersionBadge(lessonNum: number, version: string): { text: string; class: string } {
    return this.lessonService.getVersionBadge(lessonNum, version);
  }

  public getVersionNote(lessonNum: number, version: string): string {
    return this.lessonService.getVersionNote(lessonNum, version);
  }

  public rediriger(slug: string) {
    this.router.navigate(['/cours', slug]);
  }

  public changerStatut(num: number, event: Event) {
    event.stopPropagation();
    this.lessonService.toggleLessonStatus(num);
  }

  public getCompletedCount(): number {
    return this.lessons.filter(l => l.status === '✅').length;
  }

  public getProgressPercent(): number {
    if (!this.lessons.length) return 0;
    return Math.round((this.getCompletedCount() / this.lessons.length) * 100);
  }
}
