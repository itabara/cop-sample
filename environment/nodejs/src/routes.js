'use strict';

module.exports = function(app){
   app.use('/api/basket', require('./api/basket'));
}
