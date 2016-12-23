import { Component } from '@angular/core';
import { Qcm, Question, Answer } from './entity';

@Component({
    selector: 'qcm-list',
    inputs: ['qcms'],
    template: `
        <h3>Veuillez choisir un QCM</h3>
        
        <div *ngIf="qcms.length >0">
            <p *ngFor="let qcm of qcms" (click)="selectQCM(qcm)">
                {{ qcm.title }}
            </p>
        </div>
        <hr>
        <div>
            <h3>QCM selected :</h3>
            <span>{{ qcmSelected }}</span>
            <hr>
            <h1>Questions :</h1>
            <span *ngIf="qcmToDisplay">
                <h3 *ngFor="let question of qcmToDisplay.questionsList">
                    {{ question.title }}
                    <h5 *ngFor="let questionAnswer of question.answerList">
                        {{ questionAnswer.title }}
                    </h5>
                </h3>
            </span>
        </div>
    `
})

export class QcmComponent {
    // qcms: Array<string> = [
    //     'Javascript',
    //     'HTML5',
    //     'Angular'
    // ];

    qcms: Array<Qcm>;

    qcmSelected: string = null;
    qcmToDisplay: Array<any>;

    selectQCM(qcm) {
        this.qcmSelected = qcm.title;
        this.qcmToDisplay = qcm;
        console.log(this.qcmToDisplay);
    }
}