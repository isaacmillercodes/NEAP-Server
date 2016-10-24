exports.up = (knex, Promise) => {
  return knex.schema.createTable('coffee', (table) => {
    table.increments();
    table.string('name').unique().notNullable();
    table.string('roaster').notNullable();
    table.string('origin').notNullable();
    table.string('roast').notNullable();
    table.integer('caffeine').notNullable();
    table.boolean('decaf').notNullable().defaultTo(false);
    table.decimal('price').notNullable();
    table.integer('quantity').notNullable().defaultTo(1);
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('coffee');
};
