/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('locker', (table) => {
    table.increments('id')
    table.string('url')
    table.string('name')
    table.string('rarity')
    table.integer('vbucks')
    table.string('description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('locker')
}
