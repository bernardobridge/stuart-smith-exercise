const superagent = require('superagent');
require('dotenv').config();
const body = {client_id :"WlloBRvZsCFC4cydldjkOVkBF6Cri5Zk",client_secret :"2FmU-6kN5ysHLjEo0OerF_sZSlV56CCE-E3nJtAeji3pqpjPqT-1mzokP748KqWA",audience:"https://dev-5zxjin17.eu.auth0.com/api/v2/",grant_type:"client_credentials"}
function refreshToken(_callback) {
    
    superagent.post(`${process.env.ISSUER_BASE_URL}/oauth/token`)
    .set('content-type', 'application/json')
    .send(body)
    .end((err, res) => {
            if (err) {
               console.log(err)
            }
            else{
                let output = JSON.parse(res.text)
               _callback(output.access_token)
            }
    })
    
}

module.exports = refreshToken