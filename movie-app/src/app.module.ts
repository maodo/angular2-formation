import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MoviesAppComponent} from "./app.components";

@NgModule({
    imports: [BrowserModule],
    declarations: [MoviesAppComponent],
    bootstrap: [MoviesAppComponent]
})
export class AppModule {

}