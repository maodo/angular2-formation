import { Component } from '@angular/core';
import { qcmService } from './services/qcmService';

@Component({
    selector: 'qcm-app',
    template: `
        <button (click)="editionMode()" *ngIf="list">Mode edit</button>
        
        <button (click)="listMode()" *ngIf="edition">Mode list</button>
        
        <h1>hello</h1>
        
        <qcm-list *ngIf="list" [qcms]='qcms'></qcm-list>
        <qcm-edition *ngIf="edition" [qcms]='qcms'></qcm-edition>
    `
})
export class QcmAppComponent {

    constructor(private _qcmService: qcmService) {

    }

    list = true;

    ngOnInit() {
        this.qcms = this._qcmService.getQcm();
    }

    editionMode() {
        this.edition = true;
        this.list = false;
    }

    listMode() {
        this.edition = false;
        this.list = true;
    }
}