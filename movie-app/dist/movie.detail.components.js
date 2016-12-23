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
var MovieComponent = (function () {
    function MovieComponent() {
        // the EventEmitter is used to emit the event
        this.movieSelected = new core_1.EventEmitter();
    }
    /**
     * Selects a movie when the component is clicked.
     * Emits a custom event.
     */
    MovieComponent.prototype.selectMovie = function () {
        this.movieSelected.emit(this.movie);
    };
    MovieComponent = __decorate([
        core_1.Component({
            selector: 'movie-cmp',
            inputs: ['movie'],
            // we declare the custom event as an output
            outputs: ['movieSelected'],
            template: "\n        <p>{{ movie.title }} <button (click)=\"selectMovie()\">S\u00E9lectionner</button></p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MovieComponent);
    return MovieComponent;
}());
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.detail.components.js.map