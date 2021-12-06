const productRouter = require('./product');
const homeRouter = require('./site');

function route(app) {
    app.use('/product', productRouter)
    app.use('/', homeRouter);
}

module.exports = route;
