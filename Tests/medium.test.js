const {setupUsers, auth0CreateUsers} = require('../Helpers/setupHelper.js')
const {storeSetupData, loadSetupData} = require('../Helpers/dataHelper.js')
const {auth0} = require('../helpers/auth0ManagementClientHelper')

beforeAll(()=>{
    auth0CreateUsers(3).then((newUsers)=>{
        storeSetupData(newUsers, 'mediumTest')
       })
     
});



test('Search by Name', () => {
    loadSetupData('mediumTest',(usrs)=>{
        
        console.log(`1 - test with ${usrs[0].name}`)
        var params = { search_engine: 'v3', q: `name:"${usrs[0].name}"`}

        function failure(message){
          console.log(message)
        }

        auth0.getUsers(params).then((body)=>{
            expect(body[0].name).toBe(usrs[0].name)
        }).catch(failure)

    })
});

test('Search by Email', () => {
    loadSetupData('mediumTest',(usrs)=>{
        
        console.log(`2 - test with ${usrs[0].name}`)
        var params = { search_engine: 'v3', q: `email:"${usrs[0].email}"`}

        function failure(message){
          console.log(message)
        }

        auth0.getUsers(params).then((body)=>{
            expect(body[0].name).toBe(usrs[0].name)
        }).catch(failure)

    })
});

test('Search by nickname', () => {
    loadSetupData('mediumTest',(usrs)=>{
        
        console.log(`3 - test with ${usrs[0].name}`)
        var params = { search_engine: 'v3', q: `nickname:"${usrs[0].nickname}"`}

        function failure(message){
          console.log(message)
        }

        auth0.getUsers(params).then((body)=>{
            expect(body[0].name).toBe(usrs[0].name)
        }).catch(failure)

    })
});
test('Search by Given Name', () => {
    loadSetupData('mediumTest',(usrs)=>{
        
        console.log(`3 - test with ${usrs[0].name}`)
        var params = { search_engine: 'v3', q: `given_name:"${usrs[0].given_name}"`}

        function failure(message){
          console.log(message)
        }

        auth0.getUsers(params).then((body)=>{
            expect(body[0].name).toBe(usrs[0].name)
        }).catch(failure)

    })
});
test('Search by Family Name', () => {
    loadSetupData('mediumTest',(usrs)=>{
        
        console.log(`3 - test with ${usrs[0].name}`)
        var params = { search_engine: 'v3', q: `family_name:"${usrs[0].family_name}"`}

        function failure(message){
          console.log(message)
        }

        auth0.getUsers(params).then((body)=>{
            expect(body[0].name).toBe(usrs[0].name)
        }).catch(failure)

    })
});