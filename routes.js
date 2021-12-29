
const express = require('express')
const api = require('./api')

const routes = express()



routes
    .route('/example')
    .get(api.getData)
    .post(api.postData)



module.exports = routes