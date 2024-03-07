import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cours-2',
  templateUrl: './cours-2.component.html',
})
export class Cours2Component {
  public title: string = 'Formulaire reactif';
  public form: FormGroup = new FormGroup({
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    passPhrase: new FormControl(''),
  });

  public submitForm() {
    console.log(this.form);
  }
}
