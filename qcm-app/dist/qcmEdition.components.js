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
var QcmEditionComponent = (function () {
    function QcmEditionComponent() {
    }
    QcmEditionComponent.prototype.addQcm = function (qcmValue) {
        console.log(qcmValue);
        var qcmPushed = {
            title: qcmValue,
            questionsList: [
                {
                    title: 'question 1',
                    answerList: [
                        { title: 'réponse 1 : réponse 1' },
                        { title: 'question 2 : réponse 2' },
                        { title: 'question 3 : réponse 3' }
                    ]
                }
            ]
        };
        console.log(qcmPushed);
        this.qcms.push(qcmPushed);
        console.log(this.qcms);
    };
    QcmEditionComponent.prototype.deleteQcm = function (qcm) {
        console.log(qcm);
        this.qcms.splice(qcm, 1);
    };
    QcmEditionComponent = __decorate([
        core_1.Component({
            selector: 'qcm-edition',
            inputs: ['qcms'],
            template: "\n        <div *ngIf=\"qcms.length >0\">\n            <p *ngFor=\"let qcm of qcms; let i = index\">\n                {{ qcm.title }}\n                <button (click)=\"deleteQcm(i)\">Delete</button>\n            </p>\n        </div>\n        \n        <button (click)=\"addQcm(qcmValue.value)\">Create</button>\n        QCM: <input type=\"text\" #qcmValue />\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], QcmEditionComponent);
    return QcmEditionComponent;
}());
exports.QcmEditionComponent = QcmEditionComponent;
//# sourceMappingURL=qcmEdition.components.js.map