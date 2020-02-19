const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const userRouter = require('../user/userRoutes.js');
const tripRoutes = require('../trips/tripRoutes.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/users', userRouter);
server.use('/trips', tripRoutes);

server.get('/', (req, res) => {
    res.send('API running...');
});



module.exports = server;
