
const superagent = require('superagent');
require('dotenv').config();
const refreshToken = require('./refreshToken')


function addTestUsers(testuser) {
   
    refreshToken((token)=>{
        superagent.post(`${process.env.ISSUER_BASE_URL}/api/v2/users`)
        .send(testuser ) // sends a JSON post body
        .set('authorization', `Bearer ${token}`)
        .set('content-type', 'application/json')
        .end((err, res) => {
                if (err) {
                    console.log(err)
                }
        })
    })

}

function deleteTestUsers(testuserId, _deleteUsersCallback) {
    
    refreshToken((token)=>{
        superagent.delete(`${process.env.ISSUER_BASE_URL}/api/v2/users/`)
        .field(':id', `${testuserId}`)
        .set('authorization', `Bearer ${token}`)
        .end((err, res) => {
                if (err) {
    
                    _deleteUsersCallback(err)
                    
                }
                else{
                    _deleteUsersCallback(' successfully deleted...')
                }
      
        })
    })

}
function getAllUsers(_callback){
    
    refreshToken((token)=>{
        
        superagent.get(`${process.env.ISSUER_BASE_URL}/api/v2/users`)
        .set('authorization',`Bearer ${token}` )
        .end((err, res)=>{
            if (err) {
                console.log(err)
            }
            else{
                _callback(res.body)
            }
        })      
    })
}
module.exports = { getAllUsers, deleteTestUsers, addTestUsers}