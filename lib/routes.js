'use strict';

var index = require('./controllers'),
    symbolGroupApi = require('./controllers/api/symbolgroup');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/symbolgroups', symbolGroupApi.symbolgroups);
  app.get('/api/symbolgroup/:id/symbols', symbolGroupApi.symbols);
  app.post('/api/symbolgroup', symbolGroupApi.postSymbolgroup);
  app.post('/api/symbol', symbolGroupApi.postSymbol);
  app.delete('api/symbolgroup', symbolGroupApi.deleteSymbolgroup);
  app.delete('api/symbol', symbolGroupApi.deleteSymbol);

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });
  
  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', index.index);
};