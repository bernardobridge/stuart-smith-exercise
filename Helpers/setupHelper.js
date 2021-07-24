const {addTestUsers} = require('./userHelper.js')
var faker = require('faker');

class User{
    constructor(){
        this.connection = "Username-Password-Authentication",
        this.name = faker.name.findName(),
        this.given_name = faker.name.firstName(),
        this.family_name = faker.name.lastName(),
        this.nickname = faker.name.firstName(),
        this.email = faker.internet.email(),
        this.password = faker.internet.password(25),
        this.user_metadata = {
            "phone_number_verified": false,
            "locale": "",
            "zoneinfo": "",
            "gender": "",
            "birthdate": "",
            "phone_number": "",
            "middle_name": ""
        },
        this.email_verified = true,
        this.app_metadata =  {}
    }

}

function setupUsers (numberOfUsers, _callback){
    let usrs = []  
    for (let index = 0; index < numberOfUsers; index++) {
        let myUser = new User()
        addTestUsers(myUser, (err, testUser)=>{
            if (err) {
                throw err
            }
            else{
                _callback(testUser)
                
            }
        })    
        
    }
   
}

module.exports = {setupUsers}