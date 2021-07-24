
const {setupUsers} = require('../Helpers/setupHelper.js')
const {searchUsers} = require('../Helpers/userHelper.js')
const {teardownUsers} = require('../Helpers/teardownHelper.js')

let testUsers = []

beforeAll(done => {
  function callback(usrs) {
    testUsers.push(usrs)
    done()
  }
    setupUsers(1, callback)
  });

 
  afterAll(() => {
   // teardownUsers(()=>{})
  });

  test('test one', done => {
      function callback(body){
        try {
          expect(body[0].name).toBe(testUsers[0].name)
          done();
        } catch (error) {
          done(error);
        }
      }

      searchUsers(`q=name:"${testUsers[0].name}"`, callback)
    })

