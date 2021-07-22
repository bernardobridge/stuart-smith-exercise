
const {setupUsers} = require('../Helpers/setupHelper.js')

const {teardownUsers} = require('../Helpers/teardownHelper.js')


beforeAll(() => {
    setupUsers(1)
  });
  
  afterAll(() => {
    teardownUsers(()=>{})
  });

describe('Smoke Tests',()=>{
    test('test one', () => {
        console.log('smoke test one')
    });
    test('test two', () => {
        console.log('smoke test two')
    });
})
  
