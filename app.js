const {teardownUsers} = require('./Helpers/teardownHelper')
const {deleteTestUsers} = require('./Helpers/userHelper')
const refreshToken = require('./Helpers/refreshToken')


const {auth0} = require('./Helpers/auth0ManagementClientHelper')



function xteardownUsers (_callback) {
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

xteardownUsers((message)=>{
        console.log(message)
})




/* const {auth0} = require('./helpers/auth0ManagementClientHelper')

var testusersToDelete = [ 'auth0|60fd422577bbb500702da359']

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

function deleteTestUsers(testusersToDelete, _deleteUsersCallback) {
 
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
deleteTestUsers(testusersToDelete, ()=>{
        
        console.log(successfullyDeleted)
        console.log(failedToDelete)
        console.log(rejectedReason)
})
 */
/*     
function success(body){
        try {
          console.log(body[0].name)
        } catch (error) {
          console.log(error)
        }            
      }  
    
    function failure(message){
      console.log(message)
    }
    var params = {
        search_engine: 'v3',
        q: `name:"Stuart Smith"`,
        per_page: 10,
        page: 0
      };

auth0.getUsers(params).then(success).catch(failure) ; */