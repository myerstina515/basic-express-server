'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require ('../error-handlers/404');
const errorHandler = require ('../error-handlers/500');

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});


// log a request
const logRequest = require('./middleware/logger');
app.use(logRequest);

const validateQuery = require('./middleware/validator');
app.use(validateQuery);

app.get('/person', (req, res) => {
    let output = {
        name: req.query.name
    }
    res.status(200).json(output);
});





app.use('*', notFoundHandler);
app.use(errorHandler);


function start(PORT){
    app.listen(PORT, () => {
        console.log(`listening on ${PORT}`);
    })
}
module.exports = {
    server: app,
    start: start
}


