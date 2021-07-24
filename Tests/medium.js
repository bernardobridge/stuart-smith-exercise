
const {setupUsers} = require('../Helpers/setupHelper.js')

const {teardownUsers} = require('../Helpers/teardownHelper.js')


beforeAll(() => {
    //setupUsers(2)
  });
  
  afterAll(() => {
   // teardownUsers(()=>{})
  });


  

    test('test one', () => {
        console.log('medium test one')
    });
    test('test two', () => {
        console.log('medium test two')
    });

