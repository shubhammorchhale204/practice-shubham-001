
const express = require('express')
const api = require('./controller/api')

const routes = express()



routes
    .route('/example')
    .get(api.getData)
    .post(api.postData)
    .get(api.getDataById)
    .get(api.getQuotesData)

routes
    .route('/example/id')
    .get(api.getDataById)
    .patch(api.updateData)

routes
    .route('/quotes')
    .get(api.getQuotesData)


module.exports = routes