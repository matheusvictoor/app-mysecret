import { AnswerModel } from '@domain/model';
import DAO from '@domain/dao/DAO';
import { KnexTypeAdapter, DatabaseTableNames } from '../KnexAdapter';

export default class AnswerDAO implements DAO<AnswerModel> {
    private readonly tableName: string = DatabaseTableNames.ANSWER;

    constructor(private readonly connection: KnexTypeAdapter) {}

    async create(data: AnswerModel): Promise<AnswerModel> {
        const [savedUser] = await this.connection<AnswerModel>(this.tableName)
            .insert(data)
            .returning('*');

        return savedUser;
    }

    async findById(answerId: string): Promise<AnswerModel | null> {
        const data = await this.connection<AnswerModel>(this.tableName)
            .where({ answerId })
            .first();

        if(!data) return null;

        return data;
    }
}