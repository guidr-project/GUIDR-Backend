const express = require('express');
const cors = require('cors')
const helmet = require('helmet')
const userRouter = require('../user/userRoutes.js');
const tripRoutes = require('../trips/tripRoutes.js')

const server = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

server.use(express.json());
server.use(helmet())
server.use(cors(corsOptions))
server.use('/users', userRouter);
server.use('/trips', tripRoutes);

server.get('/', (req, res) => {
    res.send('API running...');
});



module.exports = server;
