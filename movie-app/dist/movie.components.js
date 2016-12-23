"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MoviesListComponent = (function () {
    function MoviesListComponent() {
        this.movies = [
            { title: 'Batman vs Superman', score: 8 },
            { title: 'Star Wars', score: 9 },
            { title: 'The Revenant', score: 10 },
            { title: 'Mad max: Fury Road', score: 7 }
        ];
    }
    MoviesListComponent.prototype.showMovieDetails = function (movie) {
        console.log(movie);
    };
    MoviesListComponent = __decorate([
        core_1.Component({
            selector: 'movies-list',
            template: "\n        <h2>Films populaires</h2>\n        <movie-cmp\n            *ngFor=\"let currentMovie of movies\"\n            [movie]=\"currentMovie\"\n            (movieSelected)=\"showMovieDetails($event)\">\n        </movie-cmp>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MoviesListComponent);
    return MoviesListComponent;
}());
exports.MoviesListComponent = MoviesListComponent;
//# sourceMappingURL=movie.components.js.map