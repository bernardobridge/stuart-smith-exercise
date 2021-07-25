
const superagent = require('superagent');
const { auth0 } = require('./auth0ManagementClientHelper');
require('dotenv').config();
const refreshToken = require('./refreshToken')


function addTestUsers(testuser, _callback) {
   
    refreshToken((token)=>{
        superagent.post(`${process.env.ISSUER_BASE_URL}/api/v2/users`)
        .send(testuser ) // sends a JSON post body
        .set('authorization', `Bearer ${token}`)
        .set('content-type', 'application/json')
        .end((err, res) => {
                if (err) {
                    _callback(err, res.body)
                }
                else{
                    _callback(err, res.body)
                }
        })
    })

}

function deleteTestUsers(testusersToDelete, _deleteUsersCallback) {
    var successfullyDeleted = []
    var failedToDelete = []
    var rejectedReason = []
    function _success(msg){
            successfullyDeleted.push(msg)
    }
    
    function _failure(msg){
            failedToDelete.push(msg)
    }
    function _rejected(reason){
            rejectedReason.push(reason)
    }
    do {
            var testuserId = testusersToDelete.pop()
            if (typeof testuserId !== 'undefined') {
                    auth0.deleteUser({ id: testuserId }, function (err){
                            if (err) {
                              _failure(testuserId)       
                            }
                            else{
                             _success(testuserId)
                            }
                             
                    })
                    
            }
            
    } while (typeof testuserId !== 'undefined');
    
    _deleteUsersCallback()
}

function handleRate(body){
    /* if (body.X-RateLimit-Remaining==0) {    
        wait for  X-RateLimit-Reset seconds
    } */
}
function searchUsers(query, _callback){
    
    refreshToken((token)=>{
        
        superagent.get(`${process.env.ISSUER_BASE_URL}/api/v2/users`)
        .set('authorization',`Bearer ${token}` )
        .set('search_engine','v3')
        .query(query)
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
module.exports = { getAllUsers, deleteTestUsers, addTestUsers, searchUsers}