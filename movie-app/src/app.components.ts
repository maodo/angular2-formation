import { Component } from '@angular/core';
@Component({
    selector: 'movies-app',
    template: `
        <h1>Films populaires</h1>
        <h2>Bienvenue {{ user.name }}</h2>
        
        <movies-list></movies-list>
    `
})
export class MoviesAppComponent {
    constructor() {
        setTimeout(() => {
            this.user.name = 'Formation';
            }, 2000);
    }
    user: any = { name: 'VISEO' };
}