import { Component, signal, computed, effect, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-cours-13',
  templateUrl: './cours-13.component.html',
})
export class Cours13Component implements OnDestroy {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'signals-rxjs')!;
  public title?: string;
  public slug?: string;

  // Signal Playground States
  public count = signal<number>(0);
  public doubleCount = computed(() => this.count() * 2);
  
  public name = signal<string>('Alain');
  public uppercaseName = computed(() => this.name().toUpperCase());

  // RxJS toSignal Playground
  private tickInterval$ = interval(1000);
  public ticks = toSignal(this.tickInterval$, { initialValue: 0 });

  constructor(private lessonService: LessonService) {
    this.title = this.lesson.title;
    this.slug = this.lesson.slug;

    // Monitor changes in effect
    effect(() => {
      console.log(`Compteur mis à jour : ${this.count()}`);
    });
  }

  public increment() {
    this.count.update(c => c + 1);
  }

  public decrement() {
    this.count.update(c => Math.max(0, c - 1));
  }

  public updateName(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.name.set(value || 'Alain');
  }

  public get selectedVersion(): string {
    return this.lessonService.selectedVersion;
  }

  public get versionNote(): string {
    return this.lessonService.getVersionNote(this.lesson.num, this.selectedVersion);
  }

  ngOnDestroy() {
    // toSignal automatically cleans up subscriptions, no manual unsubscribe needed!
  }
}
