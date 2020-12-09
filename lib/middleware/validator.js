'use strict';

function validateQuery(req, res, next){
    if (req.query.name){
        next();
    } else {
        next('Error')
    }
}


module.exports = validateQuery;