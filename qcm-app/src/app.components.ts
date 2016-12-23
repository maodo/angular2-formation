import { Component } from '@angular/core';

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

    list = true;

    qcms: Array<Qcm> = [
        {
            title: 'Javascipt',
            questionsList:  [
                {
                    title: 'question 1',
                    answerList:  [
                        { title: 'réponse 1 : réponse 1' },
                        { title: 'question 2 : réponse 2' },
                        { title: 'question 3 : réponse 3' }
                    ]
                },
                {
                    title: 'question 2',
                    answerList:  [
                        { title: 'réponse 1 : réponse 1' },
                        { title: 'question 2 : réponse 2' },
                        { title: 'question 3 : réponse 3' }
                    ]
                },
                {
                    title: 'question 3',
                    answerList:  [
                        { title: 'réponse 1 : réponse 1' },
                        { title: 'question 2 : réponse 2' },
                        { title: 'question 3 : réponse 3' }
                    ]
                }
            ]
        },
        {
            title: 'HTML5',
            questionsList:  [
                {
                    title: 'question 1',
                    answerList:  [
                        { title: 'réponse 1 : réponse 1' },
                        { title: 'question 2 : réponse 2' },
                        { title: 'question 3 : réponse 3' }
                    ]
                }
            ]
        },
        {
            title: 'Angular',
            questionsList:  [
                {
                    title: 'question 1',
                    answerList:  [
                        { title: 'réponse 1 : réponse 1' },
                        { title: 'question 2 : réponse 2' },
                        { title: 'question 3 : réponse 3' }
                    ]
                }
            ]
        }
    ];

    editionMode() {
        this.edition = true;
        this.list = false;
    }

    listMode() {
        this.edition = false;
        this.list = true;
    }
}