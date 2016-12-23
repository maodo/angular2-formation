

export class qcmService {
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

    getQcm(): any {
        return this.qcms;
    }
}