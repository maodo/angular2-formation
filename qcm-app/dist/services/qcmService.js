"use strict";
var qcmService = (function () {
    function qcmService() {
        this.qcms = [
            {
                title: 'Javascipt',
                questionsList: [
                    {
                        title: 'question 1',
                        answerList: [
                            { title: 'réponse 1 : réponse 1' },
                            { title: 'question 2 : réponse 2' },
                            { title: 'question 3 : réponse 3' }
                        ]
                    },
                    {
                        title: 'question 2',
                        answerList: [
                            { title: 'réponse 1 : réponse 1' },
                            { title: 'question 2 : réponse 2' },
                            { title: 'question 3 : réponse 3' }
                        ]
                    },
                    {
                        title: 'question 3',
                        answerList: [
                            { title: 'réponse 1 : réponse 1' },
                            { title: 'question 2 : réponse 2' },
                            { title: 'question 3 : réponse 3' }
                        ]
                    }
                ]
            },
            {
                title: 'HTML5',
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
            },
            {
                title: 'Angular',
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
            }
        ];
    }
    qcmService.prototype.getQcm = function () {
        return this.qcms;
    };
    return qcmService;
}());
exports.qcmService = qcmService;
//# sourceMappingURL=qcmService.js.map