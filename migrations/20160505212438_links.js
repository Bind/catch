
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('links', function(table){
            table.increments('uid').primary();
            table.string('url');
            table.integer('user_id')
                .references('uid')
                .inTable('users');
            })
        ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('links')
    ])
};
