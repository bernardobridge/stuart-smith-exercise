
const setupUsers = require('../Helpers/setupHelper.js')

const teardownUsers = require('../Helpers/teardownHelper.js')


beforeAll(() => {
    setupUsers()
  });
  
  afterAll(() => {
    teardownUsers()
  });
   

describe('Smoke Tests',()=>{
    test('test one', () => {
        console.log('smoke test one')
    });
    test('test two', () => {
        console.log('smoke test two')
    });
})
  
describe('Medium Test suite',()=>{
    test('test one', () => {
        console.log('medium test one')
    });
    test('test two', () => {
        console.log('medium test two')
    });
})
  
describe('Full Test suite',()=>{
    test('test one', () => {
        console.log('Full test one')
    });
    test('test two', () => {
        console.log('Full test two')
    });
})
  