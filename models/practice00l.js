const mongoose = require('mongoose')
const practice = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address' }
})
const Practice001 = mongoose.model('Practice001', practice)
module.exports = Practice001