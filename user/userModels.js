const db = require('../database/db-config.js');

module.exports = {
    add,
    findById,
    findby,
    getTrips,
    getProfile,
    addTrip,
    addProfile,
    updateProfile,
    updateUser
};

function add(user) {
    return db('users')
        .insert(user, 'id')
        .returning('*');
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

function findby(item) {
    return db('users').where(item);
}

function getTrips(id) {
    return db('users as u')
        .join('trips as t', 'u.id', 't.user_id')
        .select('t.id', 't.title', 't.description', 't.private', 't.type', 't.start_date', 't.end_date', 't.duration_hours', 't.duration_days')
        .where({ 't.user_id': id })
        .then(trips => {
            const privateBoolean = trips.map(trip => {
                trip.private = Boolean(trip.private);
                return trip;
            });
            return privateBoolean;
        });
}

function getProfile(id) {
    return db('users as u')
        .join('profiles as p', 'u.id', 'p.user_id')
        .select('u.full_name', 'u.email', 'u.username', 'p.title', 'p.description', 'p.age', 'p.experience_duration')
        .where({ 'p.user_id': id });
}

function addTrip(trip) {
    return db('trips')
        .insert(trip)
        .returning('*');
}

function addProfile(profile) {
    return db('profiles')
        .insert(profile)
        .returning('*');
}

function updateProfile(changes, user_id) {
    return db('profiles')
        .update(changes)
        .where({ user_id })
        .returning(['title', 'description', 'age', 'experience_duration']);
}

function updateUser(changes, id) {
    return db('users')
        .update(changes)
        .where({ id })
        .returning(['email', 'full_name']);
}
