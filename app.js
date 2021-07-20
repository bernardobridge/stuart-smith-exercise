const addTestUsers = require('./Helpers/userHelper.js')
const testuser = require('./Models/user.json')

require('dotenv').config();

testuser.email = 'XXXXX@1.com'
testuser.name = 'XXXXheres another test'
testuser.nickname = 'XXmy nick name'
testuser.family_name = 'XXmy family name'
testuser.given_name = 'XXgiven name test'

addTestUsers(testuser)

//deleteTestUsers(testuser)

/*
for (let index = 1; index < 10; index++) {
    testuser.email = index+testuser.email
    testuser.name = index+testuser.name
    addTestUsers(testuser)
}
*/
