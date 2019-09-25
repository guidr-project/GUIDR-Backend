const db = require('../database/db-config.js')

module.exports = {
    testIdExists,
    testUserIdExists,
    validateEmail,
    validateUsername
}

function testIdExists(req, res, next) {
    const id = req.params.id
   db('trips').where({id})
   .then(trip => {
       //console.log(trip)
    if(trip.length){
        next()
    }else{
        res.status(404).json({message: "not found"})
    }
})
}

function testUserIdExists(req, res, next) {
    const id = req.params.id
   db('users').where({id})
   .then(user => {
      // console.log(user)
    if(user.length){
        next()
    }else{
        res.status(404).json({message: "not found"})
    }
})
}

function validateUsername(req, res, next){
    const {username} = req.body
    db('users').where({username})
    .then(user => {
        console.log(user)
        if(user.length){
            res.status(409).json({message: "You shall not pass"})
        }else{
            next() 
        }
    })
}

function validateEmail(req, res, next){
    const {email} = req.body
    db('users').where({email})
    .then(email => {
        console.log(email)
        if(email.length){
            res.status(409).json({message: "You shall not pass"})
        }else{
            next() 
        }
    })
}