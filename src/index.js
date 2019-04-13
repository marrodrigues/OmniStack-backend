const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const port = 3000;
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);
//mongoose.connect('mongodb://marrodrigues:kapa091090@ds227185.mlab.com:27185/goweek-marrodrigues', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/goweek', { useNewUrlParser: true });

app.use((req, res, next) =>{
    req.io = io;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});