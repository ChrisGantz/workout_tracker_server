exports.up = function (knex) {
  return knex.schema.createTable('role', (table) => {
    table.increments('role_id').unique().notNullable();
    table.string('name', 100).unique().notNullable();
    table.dateTime('created_on').defaultTo(knex.fn.now());
    table.dateTime('modified_on').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('role');
};
