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
var MoviesAppComponent = (function () {
    function MoviesAppComponent() {
        var _this = this;
        this.user = { name: 'VISEO' };
        setTimeout(function () {
            _this.user.name = 'Formation';
        }, 2000);
    }
    MoviesAppComponent = __decorate([
        core_1.Component({
            selector: 'movies-app',
            template: "\n        <h1>Films populaires</h1>\n        <h2>Bienvenue {{ user.name }}</h2>\n        \n        <movies-list></movies-list>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MoviesAppComponent);
    return MoviesAppComponent;
}());
exports.MoviesAppComponent = MoviesAppComponent;
//# sourceMappingURL=app.components.js.map