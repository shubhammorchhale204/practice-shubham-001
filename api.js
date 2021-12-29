const fs = require('fs')
const exa = JSON.parse(fs.readFileSync(`${__dirname}/example.txt`))


exports.getData = (req, res) => {
    res.status(200).json({
        message: 'first practice api',
        statusCode: 200,
        data: {
            exa
        }
    })
}

exports.postData = (req, res) => {
    console.log(req.body)
    let a = req.body.a
    let b = req.body.b
    let result = a + b
    res.status(200).json({
        message: `ans is ${result}`,
        statusCode: 200
    })


    const x = 60
    x = 30
}



