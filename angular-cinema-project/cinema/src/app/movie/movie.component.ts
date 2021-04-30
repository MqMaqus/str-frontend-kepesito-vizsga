import { AfterContentChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @ViewChild('mForm', { static: true }) movieForm: FormGroup;
  movie: Movie = new Movie();

  constructor() {

  }

  ngOnInit(): void {
  }

  /* Adott egy "saveMovie" metódus. Visszatérési értékei legyenek a form értékei (kulcs-érték párok, például: {title: 'MyTitle', year: 2000, category: 'Action'}). Ha minden beviteli mező helyesen van kitöltve, és rákattint a felhasználó a 'Save' gombra, akkor le kell futnia a metódusnak. Elég most csak a konzolra kiíratni az értékeket. */

  saveMovie(): any {
    console.log("Működik?")
    //return {};
  }
}


