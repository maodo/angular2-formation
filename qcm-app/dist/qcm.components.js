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
var QcmComponent = (function () {
    function QcmComponent() {
        this.qcmSelected = null;
    }
    QcmComponent.prototype.selectQCM = function (qcm) {
        this.qcmSelected = qcm.title;
        this.qcmToDisplay = qcm;
        console.log(this.qcmToDisplay);
    };
    QcmComponent = __decorate([
        core_1.Component({
            selector: 'qcm-list',
            inputs: ['qcms'],
            template: "\n        <h3>Veuillez choisir un QCM</h3>\n        \n        <div *ngIf=\"qcms.length >0\">\n            <p *ngFor=\"let qcm of qcms\" (click)=\"selectQCM(qcm)\">\n                {{ qcm.title }}\n            </p>\n        </div>\n        <hr>\n        <div>\n            <h3>QCM selected :</h3>\n            <span>{{ qcmSelected }}</span>\n            <hr>\n            <h1>Questions :</h1>\n            <span *ngIf=\"qcmToDisplay\">\n                <h3 *ngFor=\"let question of qcmToDisplay.questionsList\">\n                    {{ question.title }}\n                    <h5 *ngFor=\"let questionAnswer of question.answerList\">\n                        {{ questionAnswer.title }}\n                    </h5>\n                </h3>\n            </span>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], QcmComponent);
    return QcmComponent;
}());
exports.QcmComponent = QcmComponent;
//# sourceMappingURL=qcm.components.js.map