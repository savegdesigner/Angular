import { Component, OnInit } from '@angular/core';
import Movie from '../../model/movie'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movies: Array<Movie> = new Array<Movie>()

  constructor() { 
    const movie1 = new Movie('Parasita', 9.2)
    const movie2 = new Movie('Moana', 9)

    this.movies.push(movie1, movie2)

  }

  ngOnInit(): void {
  }

}
