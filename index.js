var _ = require("underscore");

/**
 * Include session data in res.locals.
 * @param {string} [ns=session] Name of the variable in res.locals. Defaults to "session".
 * @returns {Function}
 */
module.exports = function(ns) {
    
    if(!ns || ns.length < 1) {
        ns = "session";
    }
    
    return function(req, res, next) {
        res.locals[ns] = req.session;
        
        next();
    };
    
};
