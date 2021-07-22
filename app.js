const {teardownUsers} = require('./Helpers/teardownHelper')
const {getAllUsers} = require('./Helpers/userHelper')
const {deleteTestUsers} = require('./helpers/userHelper')
const refreshToken = require('./Helpers/refreshToken')

var usrs = ['auth0|60f94d918a1c060068964ab3']

getAllUsers((result)=>{
    result.forEach(element => {
        usrs.push(element.user_id)        
    });

    deleteTestUsers(usrs,(result)=>{
        console.log(result)
    })
})

 
