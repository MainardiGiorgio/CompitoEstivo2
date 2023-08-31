import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
datiSpartiti: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Esempio di recupero degli strumenti e spartiti
    this.http.get('https://my-json-server.typicode.com/PaoloCarugati/strumentimusicali/spartiti').subscribe(data => {
      console.log(data); 
    });

    this.http.get('https://my-json-server.typicode.com/PaoloCarugati/strumentimusicali/strumenti').subscribe(data => {
      console.log(data); 
    });
  }
}

