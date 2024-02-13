import { table } from "console";
import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.alterTable('users', (table) => {
        table.string('name').nullable().alter();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.alterTable('users', (table) => {
        table.string('name').notNullable().alter();
    });
}

