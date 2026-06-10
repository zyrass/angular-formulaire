import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-cours-8',
  templateUrl: './cours-8.component.html',
})
export class Cours8Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'formarray')!;
  public title?: string;
  public slug?: string;

  public form: FormGroup = new FormGroup({
    hobbies: new FormArray([new FormControl('', Validators.required)]),
  });

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

  public get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  public addHobby() {
    this.hobbies.push(new FormControl('', Validators.required));
  }

  public removeHobby(index: number) {
    if (this.hobbies.length > 1) {
      this.hobbies.removeAt(index);
    }
  }

  public submitForm() {
    if (this.form.valid) {
      console.log('Liste des hobbies soumis :', this.form.value);
    }
  }
}
