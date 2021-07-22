const {teardownUsers} = require('./Helpers/teardownHelper')
teardownUsers()

/* const { serialize } = require('superagent')
const {getAllUsers} = require('./Helpers/userHelper.js')
const {deleteTestUsers} = require('./Helpers/userHelper.js')
const {addTestUsers} = require('./Helpers/userHelper.js')

var faker = require('faker');

class User{
    constructor(){
        this.connection = "Username-Password-Authentication",
        this.name = faker.name.findName(),
        this.given_name = faker.name.firstName(),
        this.family_name = faker.name.lastName(),
        this.nickname = faker.name.firstName(),
        this.email = faker.internet.email(),
        this.password = faker.internet.password(),
        this.user_metadata = {
            "phone_number_verified": false,
            "locale": "",
            "zoneinfo": "",
            "gender": "",
            "birthdate": "",
            "phone_number": "",
            "middle_name": ""
        },
        this. email_verified = true,
        this.app_metadata =  {}
    }

}

for (let index = 0; index < 3; index++) {
    let myUser = new User()

    addTestUsers(myUser)    
}






 */