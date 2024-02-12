import knex, {Knex as KnexType} from "knex";
import { AnswerModel, QuestionModel, UserModel } from '@domain/model';
import DatabaseConnetion from  './DatabaseConnetion'

export default class KenxAdapter implements DatabaseConnetion {
    private connection: KnexTypeAdapter;

    constructor(){
        this.connection = {} as KnexTypeAdapter;
    }
    connect(): Promise<void> {
        try {
            this.connection = knex({
                client: 'pg',
                connection: {
                    host: "localhost",
                    user: "postgres",
                    password: "1290",
                    database: "mysecretdb",
                    port: 5432
                },
            });

            return Promise.resolve();

        } catch (error) {
            throw new Error('Error connecting to database.');
        }
    }

    disconnect(): Promise<void> {
        return this.connection.destroy();
    }

    get instance(): KnexTypeAdapter {
        return this.connection;
    }
}

interface DatabaseTables {
    answers: AnswerModel;
    questions: QuestionModel;
    users: UserModel;
}

export enum DatabaseTableNames {
    ANSWER = 'answers',
    QUESTIONS = 'questions',
    USERS = 'users',
}

export type KnexTypeAdapter = KnexType<DatabaseTables>