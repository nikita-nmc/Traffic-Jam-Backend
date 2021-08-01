const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/socket.io',
    createProxyMiddleware({
      target: 'ws://127.0.0.1:3001',
      changeOrigin: true
    })
  );
};