const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/id/portaljson',
        createProxyMiddleware({
            target: 'https://today.line.me',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
            secure: false
        })
    );
};
