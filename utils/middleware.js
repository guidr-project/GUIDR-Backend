const db = require('../database/db-config.js')

module.exports = {
    testIdExists,
}

function testIdExists(req, res, next) {
    const id = req.params.id
   db('trips').where({id})
   .then(trip => {
       console.log(trip)
    if(trip.length){
        next()
    }else{
        res.status(404).json({message: "not found"})
    }
})
}