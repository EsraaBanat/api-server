'use strict';
require('dotenv').config();
const port = process.env.PORT;
const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const internalErrorHandler = require('./error-handlers/500')
const foodRoutes = require('./routes/food');
const clothesRoutes = require('./routes/clothes')


app.use(express.json());

app.use(foodRoutes);
app.use(clothesRoutes);


app.use("*", notFoundHandler);
app.use(internalErrorHandler);

function start() {
    app.listen(port, () => {
        console.log(`Server Listening on PORT ${port}`)
    })
}

module.exports = {
    app,
    start,
}


