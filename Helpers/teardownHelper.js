const {auth0} = require('./auth0ManagementClientHelper')
const {deleteTestUsers} = require('./userHelper')

/**
 * Function to be delete all users in the connection DB
 * @param {function} _callback 
 */
function teardownUsers (_callback) {
    var params = {
        search_engine: 'v3',
        per_page: 100,
        page: 0
      };
      auth0.getUsers(params, function (err, users) {
              if (users) {
                for (let index = 0; index < users.length; index++) {
                        const element = users[index];
                        deleteTestUsers(element.user_id)           
                }        
              }
              else{
                      _callback('no users')
              }
              

      });

}

module.exports = {teardownUsers}