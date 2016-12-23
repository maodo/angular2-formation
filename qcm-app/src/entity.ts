export interface Qcm {
    title: string,
    questionsList: Array<Question>;
}

export interface Question {
    title: string,
    answerList: Array<Answer>;
}

export interface Answer {
    title: string,
    isCorrect: boolean;
}