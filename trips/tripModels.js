const db = require('../database/db-config.js')

module.exports = {
    getAllTrips,
    updateTrip,
    deleteTrip,
}

function getAllTrips() {
    return db('users as u')
    .join('trips as t', 'u.id', 't.user_id')
    .select('u.full_name', 't.id', 't.title', 't.description', 't.private', 't.type', 't.start_date', 't.end_date', 't.duration_hours', 't.duration_days', "u.user_id")
    .where({'t.private': 0})
    .then(trips => {
        const privateBoolean = trips.map(trip => {
            trip.private = Boolean(trip.private);
            return trip;
        });
        return privateBoolean;
    });
    
}

function updateTrip(changes, id) {
    return db('trips').update(changes).where({id}).returning('*')
}

function deleteTrip(id) {
    return db('trips').where({id}).del()
}