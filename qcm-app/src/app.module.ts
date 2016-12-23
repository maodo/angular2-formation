import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {QcmAppComponent} from "./app.components";
import {QcmComponent} from "./qcm.components";
import {QcmEditionComponent} from "./qcmEdition.components";

@NgModule({
    imports: [BrowserModule],
    declarations: [QcmAppComponent, QcmComponent, QcmEditionComponent],
    bootstrap: [QcmAppComponent]
})
export class AppModule {

}