
const express = require('express');
const app = express()
const route = require('./routes')
const morgan = require('morgan')
let request = require('request');
const { reject } = require('lodash');

app.use(express.json())
app.use(morgan('dev'))

// async function getClaimStatus(url) {
//     return new Promise((resolve, reject) => {
//         request.get(
//             {
//                 headers: {
//                     'content-type': 'application/json',
//                     Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4NTgxY2QzZS0wMGRhLTRlYmUtOWJhMS00ZjM3NDg2ZThlYmMiLCJVc2VySWQiOiJzaGVsdGVycG9pbnQiLCJpc3MiOiJodHRwczovL2FyZWE1MS5zaGVsdGVycG9pbnQuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXJlYTUxLnNoZWx0ZXJwb2ludC5jb20vIn0.VcM-TH19Ewt8YQKHxUIiUWle0Kc5KjsT4RZ9vIfIuq0'
//                 },
//                 url: url
//                 // body: JSON.stringify(data)
//             },

//             (error, res) => {
//                 if (error) {
//                     return console.dir(error);
//                 }
//                 let result = JSON.parse(res.body)
//                 //   console.log(result.Response.Variables)
//                 let re = result.Response.Variables
//                 let speech = `Your claim Received Date ${re.ReceivedDate},check Date ${re.CheckDate},
//                 your claim amount ${re.ClaimAmount},Claim Period ${re.ClaimPeriod},and claim type is ${re.ClaimType}`
//                 console.log(speech)
//                 resolve(res.body)

//                 // zapier_response_status = JSON.parse(body).status;
//                 // console.log("zapier_response_status", zapier_response_status)


//             }
//         );
//     }).catch((error) => {
//         console.log("error----->", error)
//     })


// }
// getClaimStatus('https://area51.shelterpoint.com/spwebapi/api/IVRS?claimNumber=&sSN=066685148&zipCode=12401&hCount=1')



// app.use((req, res, next) => {
//     const error = new Error("api name not found")

//     res.status(400).json({
//         message: error
//     })
//     next()
// })

app.use('/api/v1', route)


module.exports = app