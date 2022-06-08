'use strict'
module.exports = (req, res, next) => {
    console.log(`request method: ${req.method} request path : ${req.path}`);
    next();
}