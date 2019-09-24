const db = require('../database/db-config.js')

module.exports = {
    add,
    findById,
    findby,
}

function add (user) {
    return db('users')
    .insert(user, 'id').returning('*')
    // .then(ids => {
    //   const [id] = ids;
    //   return findById(id);
    // });
}

function findById (id) {
    return db('users').where({id}).first()
}

function findby (item) {
    return db('users').where(item)
}