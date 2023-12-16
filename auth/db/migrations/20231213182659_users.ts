import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary().notNullable();
    table.string('Username').notNullable().unique();
    table.string('Email').notNullable();
    table.string('Password').notNullable();
    table.timestamps(true, true);
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('users');
}

