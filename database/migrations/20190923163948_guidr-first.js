exports.up = function(knex) {
    return knex.schema
        .createTable('users', table => {
            table.increments();
            table
                .text('username')
                .notNullable()
                .unique();
            table.text('password').notNullable();
            table
                .text('email')
                .notNullable()
                .unique();
            table.text('full_name').notNullable();
        })
        .createTable('profiles', table => {
            table.increments();
            table.text('title');
            table.text('description');
            table.integer('age');
            table.text('experience_duration');
            table
                .integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
        .createTable('trips', table => {
            table.increments();
            table.text('title').notNullable();
            table.text('description').notNullable();
            table.boolean('private').defaultTo(false);
            table.text('type').notNullable();
            table.date('start_date').notNullable();
            table.date('end_date').notNullable();
            table.float('duration_hours').notNullable();
            table.integer('duration_days').notNullable();
            table
                .integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('trips')
        .dropTable('profiles')
        .dropTable('users');
};
