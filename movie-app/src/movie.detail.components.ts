import { Component, EventEmitter } from '@angular/core';
@Component({
    selector: 'movie-cmp',
    inputs: ['movie'],
// we declare the custom event as an output
    outputs: ['movieSelected'],
    template: `
        <p>{{ movie.title }} <button (click)="selectMovie()">Sélectionner</button></p>
    `
})
export class MovieComponent {
    movie: any;
// the EventEmitter is used to emit the event
    movieSelected: EventEmitter<Movie> = new EventEmitter<Movie>();
    /**
     * Selects a movie when the component is clicked.
     * Emits a custom event.
     */
    selectMovie() {
        this.movieSelected.emit(this.movie);
    }
}