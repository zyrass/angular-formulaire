import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-cours-10',
  templateUrl: './cours-10.component.html',
})
export class Cours10Component implements OnInit, OnDestroy {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'formgroup-eventemitter')!;
  public title?: string;
  public slug?: string;

  public form: FormGroup = new FormGroup({
    search: new FormControl('', Validators.required),
  });

  public lastChange: string = '';
  public lastStatus: string = 'INVALID';
  private subscriptions: Subscription = new Subscription();

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

  ngOnInit() {
    // Écouter les changements de valeur
    this.subscriptions.add(
      this.form.valueChanges.subscribe((val) => {
        this.lastChange = val.search;
      })
    );

    // Écouter les changements d'état de validation
    this.subscriptions.add(
      this.form.statusChanges.subscribe((status) => {
        this.lastStatus = status;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public submitForm() {}
}
