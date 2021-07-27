
const {setupUsers} = require('../Helpers/setupHelper.js')
const {searchUsers, apiAvalailable} = require('../Helpers/userHelper.js')
const {teardownUsers} = require('../Helpers/teardownHelper.js')


  test('Smoke Test 1', done => {
      function callback(status){
        try {
          expect(status).toBe(200)
          done();
        } catch (error) {
          done(error);
        }
      }

      apiAvalailable(callback)
    })

    test('Smoke Test 2', done => {
      function callback(body){
        try {
          expect(body[0].name).toBe("Stuart Smith")
          done();
        } catch (error) {
          done(error);
        }
      }

      searchUsers(`q=name:"Stuart Smith"`, callback)
    })