const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Replace with the appropriate API endpoint
    createProxyMiddleware({
      target: 'http://localhost:3000/cryto_data', // Replace with the API server's URL
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000' // Replace with the appropriate origin
      }
    })
  );
};
