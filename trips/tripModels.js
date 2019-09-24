const db = require('../database/db-config.js')

module.exports = {
    getAllTrips,
    updateTrip,
    deleteTrip
}

function getAllTrips() {
    return db('trips').where({'trips.private': 0})
}

function updateTrip(changes, id) {
    return db('trips').update(changes).where({id}).returning('*')
}

function deleteTrip(id) {
    return db('trips').where({id}).del()
}