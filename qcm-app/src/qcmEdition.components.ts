import { Component } from '@angular/core';
import { Qcm, Question, Answer } from './entity';

@Component({
    selector: 'qcm-edition',
    inputs: ['qcms'],
    template: `
        <div *ngIf="qcms.length >0">
            <p *ngFor="let qcm of qcms; let i = index">
                {{ qcm.title }}
                <button (click)="deleteQcm(i)">Delete</button>
            </p>
        </div>
        
        <button (click)="addQcm(qcmValue.value)">Create</button>
        QCM: <input type="text" #qcmValue />
    `
})

export class QcmEditionComponent {
    // qcms: Array<string> = [
    //     'Javascript',
    //     'HTML5',
    //     'Angular'
    // ];

    qcms: Array<Qcm>;

    addQcm(qcmValue) {
        console.log(qcmValue);
        let qcmPushed: Array<Qcm> =
            {
                title: qcmValue,
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
        ;

        console.log(qcmPushed);

        this.qcms.push(qcmPushed);

        console.log(this.qcms);
    }

    deleteQcm(qcm) {
        console.log(qcm);
        this.qcms.splice(qcm, 1);
    }
}