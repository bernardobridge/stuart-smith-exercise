const {getAllUsers} = require('./userHelper')
const {deleteTestUsers} = require('./userHelper')


function teardownUsers (_callback) {
    getAllUsers((body)=>{
        let retVal = []
        body.forEach((repo)=>{
            if (repo.email!='stuart_smithxyz@hotmail.com')
            {
                deleteTestUsers(repo.user_id,  (result)=>{
                    retVal.push(`${repo.user_id} was ${result}`)    
                })
            }        
        })       
        _callback(retVal)
    })
    
}

module.exports = {teardownUsers}