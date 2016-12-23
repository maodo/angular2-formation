import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MoviesAppComponent} from "./app.components";
import {MoviesListComponent} from "./movie.components";
import {MovieComponent} from "./movie.detail.components";

@NgModule({
    imports: [BrowserModule],
    declarations: [MoviesAppComponent, MoviesListComponent, MovieComponent],
    bootstrap: [MoviesAppComponent]
})
export class AppModule {

}