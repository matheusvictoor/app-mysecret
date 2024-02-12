import UUIDGenerator from "./UUIDGenerator";

export default class QuestionEntity {
    constructor(
        readonly questionId: string,
        readonly userId: string,
        readonly question: string,
        readonly createAt: Date,
        readonly updateAt: Date | null
    ) {}

    static create(userId: string, question: string): QuestionEntity {
        const questionId = UUIDGenerator.generate();
        const createAt = new Date();
        
        return new QuestionEntity(questionId, userId, question, createAt, null);
    }
}
