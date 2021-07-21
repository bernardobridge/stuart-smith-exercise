
const setupUsers = require('../Helpers/setupHelper.js')

const teardownUsers = require('../Helpers/teardownHelper.js')


beforeAll(() => {
    setupUsers()
  });
  
  afterAll(() => {
    teardownUsers()
  });
   
  
describe('Full Test suite',()=>{
    test('test one', () => {
        console.log('Full test one')
    });
    test('test two', () => {
        console.log('Full test two')
    });
})
  