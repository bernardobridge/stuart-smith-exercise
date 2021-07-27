const {setupUsers, auth0CreateUsers} = require('../Helpers/setupHelper.js')
const {storeSetupData, loadSetupData} = require('../Helpers/dataHelper.js')
const {auth0} = require('../helpers/auth0ManagementClientHelper')

beforeAll(()=>{
    auth0CreateUsers(1).then((newUsers)=>{
        storeSetupData(newUsers, 'fullTest')
    })
     
});



test('Search by metadata', () => {
    loadSetupData('fullTest',(usrs)=>{
        
        console.log(`1 - test with ${usrs[0].name}`)
        var params = { search_engine: 'v3', q: `user_metadata.phone_number:"${usrs[0].user_metadata.phone_number}"`}

        function failure(message){
          console.log(message)
        }

        auth0.getUsers(params).then((body)=>{
            expect(body[0].name).toBe(usrs[0].name)
        }).catch(failure)

    })
});

  