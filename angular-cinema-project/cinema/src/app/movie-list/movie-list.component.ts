import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [];
  httpService: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getMovies(): void {
      this.movies = this.httpService.getMovieList();     
    }

  

  deleteMovie(id: number): any {}

}
