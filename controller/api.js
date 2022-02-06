const Practice001 = require('../models/practice00l');
let quotes = require('../helper/quotes.json');
exports.getData = async (req, res) => {
    try {

        const requestQuery = { ...req.query }
        const excludeTag = ['limit', 'sort', 'page', 'fields']
        excludeTag.forEach(el => delete requestQuery[el])
        const getPracticeData = await Practice001.find({})
        res.status(200).json({
            message: 'first practice api',
            statusCode: 200,
            data: getPracticeData
        })
    } catch (error) {
        res.status(400).json({
            message: `something went wrong`,
            statusCode: 200,
            data: error.message
        })
    }

}

exports.getDataById = async (req, res) => {
    try {
        const getPracticeData = await Practice001.findById(req.query.id)
        res.status(200).json({
            message: 'first practice api',
            statusCode: 200,
            data: getPracticeData
        })
    } catch (error) {
        res.status(400).json({
            message: `something went wrong`,
            statusCode: 200,
            data: error.message
        })
    }

}

exports.postData = async (req, res) => {
    try {
        const practice = await Practice001.create(req.body)

        res.status(200).json({
            message: `data added successfully`,
            statusCode: 200,
            data: practice
        })
    } catch (error) {
        res.status(400).json({
            message: `something went wrong`,
            statusCode: 200,
            data: error.message
        })
    }

}

exports.updateData = async (req, res) => {
    try {
        const practice = await Practice001.updateOne({ _id: req.body.id }, { $set: { name: req.body.name, mobile: req.body.mobile } }, {
            new: true, runValidators: true
        })
        res.status(200).json({
            message: `data added successfully`,
            statusCode: 200,
            data: practice
        })
    } catch (error) {
        res.status(400).json({
            message: `something went wrong`,
            statusCode: 200,
            data: error.message
        })
    }
}


exports.getQuotesData = async (req, res) => {
    try {

        res.status(200).json({
            message: 'first practice api',
            statusCode: 200,
            data: quotes
        })
    } catch (error) {
        res.status(400).json({
            message: `something went wrong`,
            statusCode: 200,
            data: error.message
        })
    }

}
