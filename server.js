
let mongoose = require('mongoose');
let _ = require('lodash');
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const port = process.env.PORT;

const app = require('./app')

let DB = process.env.DATA_BASE.replace('<PASSWORD>', process.env.DATA_BASE_PASSWORD)
let array = [1, 34, 56, 2, 23, 4]

// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// }).then(() => {
//     console.log("mongodb connected successfully")
// }).catch(error => {
//     console.log(error.message)
// })


app.listen(port, () => {
    console.log(`server on listing on post ${port}`)
})

