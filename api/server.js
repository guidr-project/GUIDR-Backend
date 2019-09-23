const express = require('express');
const db = require('../database/db-config.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('API running...');
});

server.get('/api/users', (req, res) => {
    db('users').then(users => {
        res.status(200).json(users);
    });
});

module.exports = server;
