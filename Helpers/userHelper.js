
const superagent = require('superagent');
require('dotenv').config();

const index = 999

function addTestUsers(testuser) {
    superagent.post(`${process.env.ISSUER_BASE_URL}/api/v2/users`)
    .send(testuser ) // sends a JSON post body
    .set('authorization', `Bearer ${process.env.AUTH_TOKEN}`)
    .set('content-type', 'application/json')
    .end((err, res) => {
            if (err) {
                console.log(err)
                
            }
            else
                console.log(`${testuser.name} added`)
    })
}

function deleteTestUsers(testuser) {
    
    
    superagent.delete(`${process.env.ISSUER_BASE_URL}/api/v2/users`)
    .set('authorization', `Bearer ${process.env.AUTH_TOKEN}`)
    .field('id', testuser.user_id)
    .end((err, res) => {
            if (err) {
                console.log(err)
                
            }
            else
                console.log(`${testuser.name} DELETED`)
    })
}
module.exports = addTestUsers, deleteTestUsers