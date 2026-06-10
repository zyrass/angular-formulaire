import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Lesson } from '../../../shared/interfaces/Lesson.interface';
import { LessonService } from '../../../shared/services/lesson.service';

@Component({
  selector: 'app-cours-4',
  templateUrl: './cours-4.component.html',
})
export class Cours4Component {
  public lesson: Lesson = this.lessonService.getAllLessons().find(l => l.slug === 'validateurs')!;
  public title?: string;
  public slug?: string;

  public checkEmailUnique = (control: AbstractControl): Promise<ValidationErrors | null> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(control.value === 'admin@admin.com' ? { emailTaken: true } : null);
      }, 1000);
    });
  };

  public form: FormGroup = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      asyncValidators: [this.checkEmailUnique]
    }),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
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

  public submitForm() {
    if (this.form.valid) {
      console.log('Formulaire valide :', this.form.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
