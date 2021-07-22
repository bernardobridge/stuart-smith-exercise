const {getAllUsers} = require('./userHelper')
const {deleteTestUsers} = require('./userHelper')

var usrs = []

function teardownUsers (_callback) {
    getAllUsers((result)=>{
        result.forEach(element => {
            usrs.push(element.user_id)        
        });
    
        deleteTestUsers(usrs,(result)=>{
            _callback(result)
        })
    })
    
}

module.exports = {teardownUsers}