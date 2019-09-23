exports.seed = function(knex) {
    return knex('trips')
        .del()
        .then(function() {
            return knex('trips').insert([
                { title: 'Yosemite', description: 'When hiking through the park', private: true, type: 'Hiking', start_date: '2019-07-15', end_date: '2019-07-17', duration_hours: 5, duration_days: 2, user_id: 1 },
                { title: 'Lake Michigan', description: 'Kayaking at the lake', private: false, type: 'Kayaking', start_date: '2019-07-20', end_date: '2019-07-20', duration_hours: 12, duration_days: 0, user_id: 1 },
                { title: 'Yosemite', description: 'When hiking through the park', private: true, type: 'Hiking', start_date: '2019-07-15', end_date: '2019-07-17', duration_hours: 5, duration_days: 2, user_id: 2 },
                { title: 'Lake Michigan', description: 'Kayaking at the lake', private: false, type: 'Kayaking', start_date: '2019-07-20', end_date: '2019-07-20', duration_hours: 12, duration_days: 0, user_id: 2 }
            ]);
        });
};
