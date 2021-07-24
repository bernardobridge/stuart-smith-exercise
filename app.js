const {teardownUsers} = require('./Helpers/teardownHelper')
const {getAllUsers} = require('./Helpers/userHelper')
const {deleteTestUsers} = require('./helpers/userHelper')
const refreshToken = require('./Helpers/refreshToken')

var usrs = ['auth0|60f94d918a1c060068964ab3']


const superagent = require('superagent');
require('dotenv').config();
fs = require('fs');

process.env.CLIENT_SECRET

const body = {client_id : `${process.env.CLIENT_ID}` ,client_secret :`${process.env.CLIENT_SECRET}`,audience:"https://dev-5zxjin17.eu.auth0.com/api/v2/",grant_type:"client_credentials"}



superagent.post(`${process.env.ISSUER_BASE_URL}/oauth/token`)
.set('content-type', 'application/json')
.send(body)
.end((err, res) => {
        if (err) {
        console.log(err)
        }
        else{
            let output = JSON.parse(res.text)
            storeLocalToken(output)
           _callback(output.access_token)
        }
})
