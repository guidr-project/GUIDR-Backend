const db = require('../database/db-config.js')

module.exports = {
    getAllTrips,
}

function getAllTrips() {
    return db('trips').where({'trips.private': 0})
}