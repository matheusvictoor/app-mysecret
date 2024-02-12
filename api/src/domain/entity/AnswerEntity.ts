import UUIDGenerator from "./UUIDGenerator";

export default class AnswerEntity {
    constructor(
        readonly answerId: string,
        readonly questionId: string,
        readonly userId: string | null,
        readonly answer: string,
        readonly createAt: Date,
        readonly updateAt: Date | null
    ) {}

    static create(questionId: string, userId: string | null, answer: string): AnswerEntity {
        const answerId = UUIDGenerator.generate();
        const createAt = new Date();

        return new AnswerEntity(answerId, questionId, userId, answer, createAt, null);
    }
}