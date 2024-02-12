import { UserModel } from "@domain/model";
import DAO from "@domain/dao/DAO";
import { DatabaseTableNames, KnexTypeAdapter } from "../KnexAdapter";

export default class UserDAO implements DAO<UserModel> {
    private readonly tableName: string = DatabaseTableNames.USERS;

    constructor(private readonly connection: KnexTypeAdapter) {}

    async create(data: UserModel): Promise<UserModel> {
        const [savedUser] = await this.connection<UserModel>(this.tableName)
            .insert(data)
            .returning('*');

        return savedUser;
    }

    async findById(userId: string): Promise<UserModel | null> {
        const data = await this.connection<UserModel>(this.tableName)
            .where({ userId })
            .first();

        if(!data) return null;

        return data;
    }
}