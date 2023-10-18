import { Component } from '@angular/core';

@Component({
  selector: 'app-formularseite',
  templateUrl: './formularseite.component.html',
  styleUrls: ['./formularseite.component.css']
})
export class FormularseiteComponent {
  name: string;
  anzahlPersonen: number;

  onSubmit() {
    console.log(`Name: ${this.name}, Anzahl Personen: ${this.anzahlPersonen}`);
    // Hier können Sie die Daten weiterverarbeiten oder an einen Server senden
  }
}
