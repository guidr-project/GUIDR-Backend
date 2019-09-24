const express = require('express');
const bcrypt = require('bcryptjs')
const Users = require('./userModels.js')
const Token = require('../auth/generateToken.js')

const router = express.Router();

router.post('/signUp', (req, res) => {
    const body = req.body

    const hash = bcrypt.hashSync(body.password, 8)

    Users.add({...body, password: hash})
    .then(user => {
        res.status(201).json({message: "New user created"})
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/login', (req, res) => {
    const  {username, password}= req.body

    Users.findby({username})
    .first()
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)){
            const token = Token.generateToken(user)
            res.status(200).json({id: user.id, token: token})
        }
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.get('/:id/trips', (req, res) => {
    const id = req.params.id
    Users.getTrips(id)
    .then(trips => {
        res.status(200).json(trips)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/:id/profile', (req, res) => {
    const id = req.params.id

    Users.getProfile(id)
    .then(profile => {
        res.status(200).json(profile)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;