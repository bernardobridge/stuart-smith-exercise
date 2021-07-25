
const superagent = require('superagent');
const { auth0 } = require('./auth0ManagementClientHelper');
require('dotenv').config();
const refreshToken = require('./refreshToken')

/**
 * 
 * @param {User} testuser - created from the User class
 * @param {function} _callback - a function to return the new users or error message
 */
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

/**
 * 
 * @param {string[]} testusersToDelete - string array containing the user_id values for users to be deleted
 * @param {function} _deleteUsersCallback 
 * @returns {string[]} - string array containing user_id of users deleted
 */
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

/**
 * 
 * @param {string} query - string containing the query to be sent to the API
 * @param {function} _callback 
 * @returns {json} - returns the users that were found 
 * @deprecated - The auth0 ManagementClient should be used directly from the helper. (See {@link auth0})
 */
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

/**
 * Return json containing all users from the connection DB
 * @param {function} _callback 
 * @deprecated This function will be deleted. Please use auth0 ManagementClient directly from the helper. (See {@link auth0})
 */
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