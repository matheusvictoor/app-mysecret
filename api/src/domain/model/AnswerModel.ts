export interface AnswerModel {
    answerId: string;
    questionId: string;
    userId: string | null;
    answer: string;
    createAt: Date;
    updateAt: Date | null;
}