import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {QcmAppComponent} from "./app.components";
import {QcmComponent} from "./qcm.components";
import {QcmEditionComponent} from "./qcmEdition.components";
import {qcmService} from "./services/qcmService";

@NgModule({
    imports: [BrowserModule],
    declarations: [QcmAppComponent, QcmComponent, QcmEditionComponent],
    providers: [qcmService],
    bootstrap: [QcmAppComponent]
})
export class AppModule {

}