exports.seed = function(knex) {
    return knex('profiles')
        .truncate()
        .then(function() {
            return knex('profiles').insert([{ title: 'Outdoorsman', description: 'A person who does stuff outdoors', age: 31, experience_duration: '5 years', user_id: 1 }, { title: 'Kayak guide', description: 'A person guides kayakers', age: 29, experience_duration: '29 years', user_id: 2 }]);
        });
};
