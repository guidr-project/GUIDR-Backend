const express = require('express');
const Trips = require('./tripModels.js');
const restricted = require('../auth/authRestricted.js');

const router = express.Router();

router.get('/', restricted, (req, res) => {
    Trips.getAllTrips()
        .then(trips => {
            res.status(200).json(trips);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.put('/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Trips.updateTrip(changes, id)
        .then(trip => {
            res.status(200).json(trip);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.delete('/:id', restricted, (req, res) => {
    const id = req.params.id;
    Trips.deleteTrip(id)
        .then(response => {
            res.status(200).json({ message: 'Trip successfully deleted' });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
