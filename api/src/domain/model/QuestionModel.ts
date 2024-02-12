export interface QuestionModel {
    questionId: string;
    userId: string;
    question: string;
    createAt: Date;
    updateAt: Date | null;
}