exports.seed = function(knex) {
    return knex('users')
        .truncate()
        .then(function() {
            return knex('users').insert([{ username: 'username', password: 'password', full_name: 'Sean McDonnell', email: 'fakeemail@gmail.com' }, { username: 'username2', password: 'password', full_name: 'Hannah Tuttle', email: 'fakeemail2@gmail.com' }]);
        });
};
