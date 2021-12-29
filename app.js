
const express = require('express');
const app = express()
const route = require('./routes')
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))




// app.use((req, res, next) => {
//   const error = new Error("api name not found")

//   res.status(400).json({
//     message: error
//   })
//   next()
// })

app.use('/api/v1', route)


module.exports = app