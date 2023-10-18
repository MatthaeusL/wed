import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent implements OnInit {
  bilder: string[] = ['bild1.jpg', 'bild2.jpg', 'bild3.jpg'];
  aktuellesBild = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.aktuellesBild = (this.aktuellesBild + 1) % this.bilder.length;
    }, 5000);
  }
}