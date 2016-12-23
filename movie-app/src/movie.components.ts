import { Component } from '@angular/core';
@Component({
    selector: 'movies-list',
    template: `
        <h2>Films populaires</h2>
        <movie-cmp
            *ngFor="let currentMovie of movies"
            [movie]="currentMovie"
            (movieSelected)="showMovieDetails($event)">
        </movie-cmp>
    `
})
export class MoviesListComponent {
    movies: Array<any> = [
        { title: 'Batman vs Superman', score: 8 },
        { title: 'Star Wars', score: 9 },
        { title: 'The Revenant', score: 10 },
        { title: 'Mad max: Fury Road', score: 7 }
    ];
    showMovieDetails(movie: Movie) {
        console.log(movie);
    }
}