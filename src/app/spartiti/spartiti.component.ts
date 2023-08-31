import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spartiti',
  templateUrl: './spartiti.component.html',
  styleUrls: ['./spartiti.component.css']
})
export class SpartitiComponent {
  @Input() spartitiData: any; // Dichiarazione di una variabile di input
}

