
const {setupUsers, auth0CreateUsers} = require('../Helpers/setupHelper.js')
const {searchUsers} = require('../Helpers/userHelper.js')
const {teardownUsers} = require('../Helpers/teardownHelper.js')
const {auth0} = require('../helpers/auth0ManagementClientHelper')

let testUsers = []

beforeAll(done => {
  function callback(usrs) {
    testUsers = usrs
    done()
  }
  try {
    teardownUsers(()=>{})
  } catch (error) {
    
  }
    auth0CreateUsers(1, callback)
  });

 
  afterAll(() => {
    teardownUsers(()=>{})
  });
 

    test('Search for user by name', () => {

      function success(body){
          try {
            expect(body[0].name).toBe(testUsers[0].name)
          } catch (error) {
            throw error
          }            
        }  
      
      function failure(message){
        console.log(message)
      }
      var params = {
        search_engine: 'v3',
        q: `name:"${testUsers[0].name}"`,
        per_page: 10,
        page: 0
      };
      
      auth0.getUsers(params).then(success).catch(failure) ;
    });
    

